var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./docs.json');
require('dotenv/config');

const db = require('./config/mongoDb');

var indexRouter = require('./routes');

var app = express();

db.connect();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

module.exports = app;
