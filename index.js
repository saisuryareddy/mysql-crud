const express = require("express");
const connection = require("./sql")
const product = require("./routes/product")
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/product',product)

module.exports = app;