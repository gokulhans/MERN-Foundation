const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// const password = encodeURIComponent("GOk@9846"); // password encryption if it contain special characters



const connectDB = async () => {

  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.log('MongoDB is not connected err...');
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;