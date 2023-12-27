const express = require("express");
const { json } = require("body-parser");
const routes = require("./routes");
const passport = require("passport");
const httpStatus = require("http-status");
const { jwtStrategy } = require("./config/passport");
const path = require('path');

let cors = require("cors");

require("dotenv").config();
// const dotenv = require("dotenv");
// dotenv.config();
const app = express();
app.use(express.json());

app.use(cors());

// jwt authentication
app.use(passport.initialize());
passport.use("jwt", jwtStrategy);

// image upload
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.static(path.join(__dirname, "assets")));

const port = process.env.REACT_APP_PORT;
app.listen(port, (req, res) => {
  console.log(`Server is listening at http://localhost:${port}`);
});

// send back a 404 error for any unknown api request
// app.use((req, res, next) => {
//   next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
// });

require("./config/config");
require("./routes/router")(app);

app.use("/", routes);
