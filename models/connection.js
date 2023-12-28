const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/weather';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
