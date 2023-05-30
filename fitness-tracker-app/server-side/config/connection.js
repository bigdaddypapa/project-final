const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const MONGODB_URI = 'mongodb+srv://user:Rzzl0BYLVC72pHVl@papa.so4tv32.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, err => {
  if (err) throw err;
  console.log('Connected to MongoDB!')
}

);

module.exports = mongoose.connection;
