const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://sowmithpottabathini2003:sowmith2003@cluster1.rnpplrq.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('connected', () => {
  console.log('Mongoose connected to ' + dbURI);
});
db.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});
db.on('disconnected', () => {
  console.log('Mongoose disconnected');
});
module.exports = mongoose;
