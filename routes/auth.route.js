const express = require("express");
const router = express.Router();
const { authController } = require("../controllers");
const auth = require("../middlewares/auth");

router.get("/me", auth(), authController.me);
router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
