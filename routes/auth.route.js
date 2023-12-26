const express = require("express");
const router = express.Router();
const { authController } = require("../controllers");
const auth = require("../middlewares/auth");
// const jwt = require('jsonwebtoken');

// const verifyToken = (req, res, next) => {
//   const token =
//     req.headers.authorization && req.headers.authorization.split(" ")[1];
//   if (!token) {
//     return res.status(401).json({ message: "Unauthorized - Token missing" });
//   }

//   try {
//     const decoded = jwt.verify(token, "thisisasamplesecret");
//     req.user = decoded;
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: "Unauthorized - Invalid token" });
//   }
// };

router.get("/me", auth(), authController.me);
router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
