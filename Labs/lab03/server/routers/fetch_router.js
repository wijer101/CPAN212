const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const _ = require("lodash");

const upload_directory = path.join(__dirname, "../uploads");

router.get("/single", (req, res) => {
    let files_array = fs.readdirSync(upload_directory);
    if (files_array.length == 0) {
        return res.status(503).send({
            message: "No images",
        });
    }
    let filename = _.sample(files_array);
    res.sendFile(path.join(upload_directory, filename));
});

// New /fetch/multiple route to return multiple random files
router.get("/multiple", (req, res) => {
  let files_array = fs.readdirSync(upload_directory);
  if (files_array.length == 0) {
      return res.status(503).send({
          message: "No images",
      });
  }

  // Get 5 random files or less
  let random_files = _.sampleSize(files_array, Math.min(5, files_array.length));
  
  // Return the HTTP URLs of the files instead of local paths
  let file_urls = random_files.map(file => `http://localhost:8000/uploads/${file}`);
  res.status(200).json(file_urls);
});

module.exports = router;
