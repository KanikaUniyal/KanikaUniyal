const express = require('express');
const app = express();
// const errorMiddleware = require('./middleware/error')
const errorMiddleware = require('./middlewares/Error')
app.use(express.json())
//Route imports
const product = require('./routes/productRoute');
app.use('/api/v1', product);

//middleware for errors
app.use(errorMiddleware);

module.exports = app
///productController.js