require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const UsersController = require('./routes/UsersController')
// Create a new app using express
const app = express();


// Overwrite built in Promise library in mongoose
mongoose.Promise = global.Promise;
// Connect to MongoDB and set up messages for when 
// Mongo connects successfully or errors out
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true }); 

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('Mongoose Connected Successfully');
});

// If the connection throws an error
connection.on('error', (err) => {
    console.log('Mongoose default connection error: ' + err);
});

// Inject middleware
// Use the build folder in your client directory for static files 
app.use(express.static(__dirname + '/client/build/'));
app.use(bodyParser.json());

// Add Controllers after Middleware
app.use('/api/users', UsersController)
app.get('/', (req, res) => {
    res.send('Hello world!')
})


// Create a index route that renders your built React app
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Magic happening on port " + PORT);
})