const express = require("express");
const { validationResult } = require("express-validator");
// const productsRepo = require("../../repositories/products");
const productsNewTemplate = require("../../views/admin/products/newone");
const { requireTitle, requirePrice } = require("./validator");
const productsRepo = require("../../repositories/product");

const router = express.Router();

router.get("/admin/products", (req, res) => {});

router.get("/admin/products/new", (req, res) => {
  res.send(productsNewTemplate({}));
});

router.post(
  "/admin/products/new",
  [requireTitle, requirePrice],
  upload.single("image"),
  async (req, res) => {
    const image = req.file.buffer.toString("base64");
    const { title, price } = req.body;
    await productsRepo.create({ title, price, image });
    res.send("submitted");
  }
);

module.exports = router;
