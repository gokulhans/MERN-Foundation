const mongoose = require('mongoose');
const {MONGOURI} = require('../keys')

const connectDB = async () => {

  try {
    await mongoose.connect(
      process.env.DATABASE_URL || MONGOURI,
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