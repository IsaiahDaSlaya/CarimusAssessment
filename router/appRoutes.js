const express = require("express");
const router = express.Router();
const path = require("path");

const appDir = path.dirname(require.main.filename);

router.use(express.static(appDir + "/public/"));

// Try to make a GET request to our app's index.html path, if
// it works, proceed as normal; otherwise throw a 500 Status
// to indicate an internal server error.

router.get("/", (req, res) => {
  try {
    res.sendFile(appDir + "/public/index.html");
  } catch (error) {
    res.status(500).json({
      error: error.toString()
    });
  }
});

// Try to make a GET request to our app's allGifs.html path, if
// it works, proceed as normal; otherwise throw a 500 Status
// to indicate an internal server error.

router.get("/allGifs", (req, res) => {
  try {
    res.sendFile(appDir + "/public/allGifs.html");
  } catch (error) {
    res.status(500).json({
      error: error.toString()
    });
  }
});

// Try to make a GET request to our app's randomGifs.html path, if
// it works, proceed as normal; otherwise throw a 500 Status
// to indicate an internal server error.

router.get("/randomGifs", (req, res) => {
  try {
    res.sendFile(appDir + "/public/randomGifs.html");
  } catch (error) {
    res.status(500).json({
      error: error.toString()
    });
  }
});

module.exports = router;