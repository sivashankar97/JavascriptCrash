const express = require("express");
const productsNewTemplate = require("../../views/products/newone");

const router = express.Router();

router.get("/admin/products", (req, res) => {});

router.get("/admin/products/new", (req, res) => {
  res.send(productsNewTemplate({}));
  //render product form template
});

module.exports = router;

//these files for routing pathway  connect the controller
