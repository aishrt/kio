const express = require("express");
const router = express.Router();
const { userController } = require("../controllers");
const auth = require("../middlewares/auth");

router.get("/get-profile/:id", auth(), userController.getProfile);
router.get("/list", auth(), userController.getList);
router.put("/update-profile/:id", userController.updateProfile);
router.delete("/delete-profile/:id", userController.deleteProfile);

module.exports = router;
