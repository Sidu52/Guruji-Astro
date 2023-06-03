require('dotenv').config()
const mongoose = require('mongoose');
// const url = "mongodb://127.0.0.1:27017/gurutodos"; // For Local Server
const url = `mongodb+srv://${process.env.Mongoose_Cluster_Name}:${process.env.Mongoose_PASSWORD}@cluster0.fca4n63.mongodb.net/gurutodos`;

mongoose.connect(url);
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', () => {
    console.log("Connected to Database :: MongoDB")
});

module.exports = db;
