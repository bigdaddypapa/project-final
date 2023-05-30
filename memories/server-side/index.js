const express = require ('express') 
const bodyParser = require ('body-parser') 
const mongoose = require ('mongoose')
const cors = require ('cors')
const app = express()

const postRoutes = require ('./routes/posts')

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL= 'mongodb+srv://user:Rzzl0BYLVC72pHVl@papa.so4tv32.mongodb.net/?retryWrites=true&w=majority'
const port = process.env.port|| 5000;

mongoose.connect(CONNECTION_URL);
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
  });

