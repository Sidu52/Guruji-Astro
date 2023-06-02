require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./config/mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

app.use(bodyParser.json());
app.use(cookieParser());


app.use("/", require('./router/tasks'));

app.listen(port, (error) => {
    if (error) { console.log('Error starting the server:', error); return; }
    console.log(`Server is running on port ${port}`);
})
