const express = require("express");
require('dotenv/config');
const proxy = require('express-http-proxy');

const app = express();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { findOne } = require("./model/masque.js");

const getuserroute = require("./route/userroute.js");
const getmasqueroute = require("./route/masqueroute.js");

app.use("/", getuserroute);
app.use("/", getmasqueroute);

app.use(bodyParser.json());

app.use('/', proxy('http://127.0.0.1:40/'));

const http = require("http");
const host = 'localhost';
const port = 40;



mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Ok')
);

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

