const mongoose = require('../Config/Db');
const AppError = require('../Utils/appError');
const CatchAsync = require('../Utils/catchAsync');

const adminData = CatchAsync(async (req, res, next) => {
    try {
        const database = mongoose.connection.db;
        const collections = await database.listCollections().toArray();
        const allData = [];
        for (const collection of collections) {
            const collectionName = collection.name;
            const collectionData = await database.collection(`${collectionName}`).find({ reservation: true }).toArray();
            allData.push(...collectionData);
        }
        const totalCost = allData.reduce((sum, item) => {
            const numericCost = parseFloat(item.cost.replace(/[^0-9.]/g, ''));
            return sum + numericCost;
        }, 0);
        res.status(200).send({ totalCost });
    } catch (err) {
        return next(new AppError("admin Controller's data error", 404));
    }
});

const newUser = CatchAsync(async (req, res, next) => {
    try {
        const database = mongoose.connection.db;
        const collection = await database.collection('users').find().toArray();
        if (collection.length > 0) {
            res.status(200).send(collection[collection.length - 1]);
        } else {
            return next(new AppError('No new user', 404));
        }
    } catch (err) {
        return next(new AppError('Error in new user fetching', 404));
    }
});

const allUsers = CatchAsync(async (req, res, next) => {
    try {
        const database = mongoose.connection.db;
        const collection = await database.collection('users').find().toArray();
        res.status(200).send(collection);
    } catch (err) {
        return next(new AppError('Error in fetching DB of all users', 404));
    }
});

const updateUser = CatchAsync(async (req, res, next) => {
    const { originalemail, email, username } = req.body;
    try {
        const database = mongoose.connection.db;
        const user = database.collection('users');
        const update = await user.updateOne({ email: originalemail }, { $set: { email, username } });
        if (update.modifiedCount > 0) {
            res.status(200).json({ message: "User updated" });
        } else {
            return next(new AppError('User updation failed', 404));
        }
    } catch (err) {
        return next(new AppError('Error in update of user', 404));
    }
});

const tourData = CatchAsync(async (req, res, next) => {
    try {
        const database = mongoose.connection.db;
        const collections = await database.listCollections().toArray();
        const allData = [];
        for (const collection of collections) {
            const collectionName = collection.name;
            if (collectionName != 'users') {
                const collectionData = await database.collection(`${collectionName}`).find().toArray();
                allData.push(...collectionData);
            }
        }
        res.status(200).send(allData);
    } catch (err) {
        return next(new AppError('Error in fetching all tourist data', 404));
    }
});

const updateTour = CatchAsync(async (req, res, next) => {
    const { Id, Name, Address, Cost, Reservation, Checkin, Checkout, Guest, Rating } = req.body;
    try {
        const database = mongoose.connection.db;
        const collections = await database.listCollections().toArray();
        for (const collection of collections) {
            const collectionName = collection.name;
            if (collectionName != 'users') {
                const collectionData = await database.collection(`${collectionName}`);
                var update = await collectionData.updateOne({ name: Id }, { $set: { name: Name, address: Address, cost: Cost, reservation: Reservation, checkin: Checkin, checkout: Checkout, guest: Guest, count: Rating } });
            }
        }
        if (update.modifiedCount > 0) {
            res.status(200).json({ message: "Tour updated" });
        } else {
            return next(new AppError('Tour updation failed', 404));
        }
    } catch (err) {
        return next(new AppError('Error in fetching tour update', 404));
    }
});

module.exports = {
    adminData,
    newUser,
    allUsers,
    updateUser,
    tourData,
    updateTour
};
