const express = require("express");
var bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/add-product", (req, res, next) => {
    res.send(`<form method="post" action="/add-product">
    <label for="firstname">First_name: </label>
    <input type="text" name="firstname" required><br>
    <label for="lastname">Last name: </label>
    <input type="text" name="lastname" required><br>
    <label for="inputsize">Input_Size</label>
    <input type="number" name="inputsize" required><br>
    <label for="email">Email: </label>
    <input type="email" name="email" required><br>
    <label for="password">Password: </label>
    <input type="password" name="password" required><br>
    <input type="submit" value="Login!">
</form>`);
});

app.post("/add-product", (req, res, next) => {
    const formData = req.body;
    console.log("Form Data:", formData);
    res.send("Form data received and logged!");
});

app.listen(8000, () => {
    console.log("Server started");
});
