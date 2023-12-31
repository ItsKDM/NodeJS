const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    res.send(`<form action="/product" method="POST">
    <label for="title">Product:</label>
    <input type="text" id="title" name="title"><br>
    <label for="size">Size:</label>
    <input type="number" id="size" name="size"><br>
    <button type="submit">Add Product</button>
</form>`);
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Homepage</h1>');
});

app.listen(3000);