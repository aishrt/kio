module.exports = (routes) => {
  let router = require("express").Router();
  routes.use("/", router);
};
