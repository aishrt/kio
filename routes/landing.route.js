const express = require("express");
const router = express.Router();
const { landingController } = require("../controllers");
const upload = require("../middlewares/multer");

router.get("/", landingController.landing);
router.post("/upload", upload.single("file"), landingController.upload);

module.exports = router;
