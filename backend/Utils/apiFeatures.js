const mongoose = require('../Config/Db');

const fetchCollectionData = async (collectionName, filter = {}) => {
  const database = mongoose.connection.db;
  const collection = database.collection(collectionName);
  return collection.find(filter).toArray();
};

const filterByPrice = (data, minPrice, maxPrice) => {
  return data.filter(item => {
    const cost = parseInt(item.cost.replace(/\D/g, ''), 10);
    return cost >= parseInt(minPrice, 10) && cost <= parseInt(maxPrice, 10);
  });
};

const filterByDateAndGuests = (data, checkin, checkout, guests) => {
  return data.filter(item => (
    new Date(item.checkin) <= new Date(checkin) &&
    new Date(item.checkout) >= new Date(checkout) &&
    item.guest >= guests
  ));
};

const filterData = (data, minPrice, maxPrice, checkin, checkout, guests) => {
  if (minPrice && maxPrice) {
    data = filterByPrice(data, minPrice, maxPrice);
  }
  if (checkin && checkout && guests) {
    data = filterByDateAndGuests(data, checkin, checkout, guests);
  }
  return data;
};

module.exports = {
  fetchCollectionData,
  filterData
};
