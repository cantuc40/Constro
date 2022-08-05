const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const cookieSession = require("cookie-session");
require('dotenv').config();
var corsOptions = {
    origin: "http://localhost:8081"
};


//Create middleware and establish port number
const app = express();
const port = process.env.PORT || 8080; 
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cookieSession({
        name: "users-session",
        secret: process.env.SECRET,
        httpOnly: true
})
);

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome" });
  });


  app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
  });