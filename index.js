require('dotenv').config()
const express = require('express');
const morgan = require('morgan')
const mongoose = require("mongoose");
const cors = require('cors')
const app = express();
const paintingController = require('./controllers/panitingController')

const mongoURI = process.env.MONGO_URI

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('MongoDB connection established:', mongoURI)
)

const db = mongoose.connection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected:' , process.env.MONGO_URI))
db.on('disconnected', () => console.log('mongo disconnected'))

app.use(morgan('short'))
app.use(cors())

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', paintingController)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('app is running')
})