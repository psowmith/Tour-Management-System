const User = require('../Models/User');
const mongoose = require('../Config/Db');
const AppError = require('../Utils/appError');
const CatchAsync = require('../Utils/catchAsync');
const { fetchCollectionData, filterData } = require('../Utils/apiFeatures');

const londondata = CatchAsync(async (req, res, next) => {
    try {
        const [hotels, beach, pools] = await Promise.all([
            fetchCollectionData('london_hotels', { reservation: false }),
            fetchCollectionData('london_beach', { reservation: false }),
            fetchCollectionData('london_pools', { reservation: false })
        ]);
        let combinedData = [...hotels, ...beach, ...pools].sort(() => Math.random() - 0.5);

        const { minPrice, maxPrice, checkin, checkout, guests } = req.query;
        combinedData = filterData(combinedData, minPrice, maxPrice, checkin, checkout, guests);

        res.status(200).json(combinedData);
    } catch (error) {
        return next(new AppError('Error retrieving the data', 404));
    }
});

const getFilteredData = async (req, res, next, collectionName) => {
    try {
        const data = await fetchCollectionData(collectionName, { reservation: false });
        const { minPrice, maxPrice, checkin, checkout, guests } = req.query;
        const filteredData = filterData(data, minPrice, maxPrice, checkin, checkout, guests);

        res.status(200).json(filteredData);
    } catch (error) {
        return next(new AppError(`Error retrieving ${collectionName} data`, 404));
    }
};

const londonBeachData = (req, res, next) => getFilteredData(req, res, next, 'london_beach');
const londonPoolData = (req, res, next) => getFilteredData(req, res, next, 'london_pools');
const londonHotelsData = (req, res, next) => getFilteredData(req, res, next, 'london_hotels');

const reservation = CatchAsync(async (req, res, next) => {
    const { name } = req.body;
    try {
        const database = mongoose.connection.db;
        const collections = ['london_hotels', 'london_beach', 'london_pools'];
        const results = await Promise.all(collections.map(collectionName =>
            database.collection(collectionName).updateOne({ name }, { $set: { reservation: true } })
        ));

        if (results.some(result => result.modifiedCount > 0)) {
            res.status(200).json({ message: 'Reservation set to true successfully' });
        } else {
            return next(new AppError('Tour ID not found', 404));
        }
    } catch (error) {
        return next(new AppError('Failed to make reservation', 404));
    }
});

module.exports = {
    londondata,
    londonBeachData,
    londonPoolData,
    londonHotelsData,
    reservation,
};
