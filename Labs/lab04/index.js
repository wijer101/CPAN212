require('dotenv').config()
const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");


// adding our mongoDB database
const mongoose = require("mongoose"); // importing the dependancy
mongoose.connect(process.env.MONGODB_LAPTOP); // establishing a connection -> connect command + an api string to connect to our database
// this does not keep the connection, only establishes where it will go to connect
const db = mongoose.connection; // saving the databse usecase into a variable


db.once("open", () => {
    // Check connection
    console.log("Connected to MongoDB");
});


db.on("error", (err) => {
    // Check for DB errors
    console.log("DB Error");
});


// middlelware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const Device = require("./models/device")

app.get("/fetch_all", (req, res) => {
    Device.find()
        .then((devices) => {
            res.json(devices); // Return the fetched books as JSON
        })
        .catch((err) => {
            res.status(500).send(err); // Handle error
        });
});

app.get("/fetch_filter", (req, res) => {
    Device.find({ brand: "Dell" }, { price: 0, stock: 0 })
        .then((devices) => {
            res.json(devices); // Return the fetched books as JSON
        })
        .catch((err) => {
            res.status(500).send(err); // Handle error
        });
});

app.get("/fetch/:objectID", (req, res) => {
    Device.findById(req.params.objectID)
        .then((devices) => {
            res.json(devices); // Return the fetched books as JSON
        })
        .catch((err) => {
            res.status(500).send(err); // Handle error
        });
});

app.post("/search", (req, res) => {
    //check what they sent me
    //based on what checked, add those into a query
    const filter = {}
    if (req.body.price) {
        if (req.body.arth == "gte") {
            filter.price = { "$gte": parseInt(req.body.price) }
        }
        if (req.body.arth == "gt") {
            filter.price = { "$gt": parseInt(req.body.price) }
        }
        if (req.body.arth == "lte") {
            filter.price = { "$lte": parseInt(req.body.price) }
        }
        if (req.body.arth == "lt") {
            filter.price = { "$lt": parseInt(req.body.price) }
        }
    }

    if (req.body.brand) {
        filter.brand = req.body.brand
    }

    console.log(filter)

    Device.find(filter)
        .then((devices) => {
            res.json(devices); // Return the fetched books as JSON
        })
        .catch((err) => {
            res.status(500).send(err); // Handle error
        });
});

// routes
app.get("/", (req, res) => {
    res.send("Welcome to our server");
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});


app.use("", (req, res) => {
    res.status(404).send("Page not found");
});