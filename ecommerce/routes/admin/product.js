const express = require("express");
const productsNewTemplate = require("../../views/products/newone");
const { requireTitle, requirePrice } = require("./validator");
const { validationResult } = require("express-validator");

const router = express.Router();

router.get("/admin/products", (req, res) => {});

router.get("/admin/products/new", (req, res) => {
  res.send(productsNewTemplate({}));
  //render product form template
});

router.post("/admin/products/new", [requireTitle, requirePrice], (req, res) => {
  const errors = validationResult(req);

  console.log(req.body);

  res.send("submitted");
});

module.exports = router;

//these files for routing pathway  connect the controller
