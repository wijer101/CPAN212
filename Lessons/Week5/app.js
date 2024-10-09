const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();
const path = require("path");
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "uploads"))
    },
    filename: function (req, file, cb) {
        const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniquePrefix + "-" +file.originalname)
    }
})

const upload = multer({ storage: storage })


// middlelware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "register.html"));
})

app.post("/register", upload.single('file'), (req, res) => {
    console.log(req.body)
    res.send("I got your register information")
})


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});


app.use("", (req, res) => {
    res.status(404).send("Page not found");
});