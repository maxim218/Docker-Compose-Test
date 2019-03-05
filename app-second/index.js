"use strict";

const express = require("express");
const app = express();

app.listen(5000);
console.log("Start server OK");

let message = "Second app ";
let number = 0;

app.get('/work', (request, response) => {
    number++;
    response.end(message + number);
});
