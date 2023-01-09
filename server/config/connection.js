const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONNECTION_STRING || 'mongodb://localhost/countdown', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;