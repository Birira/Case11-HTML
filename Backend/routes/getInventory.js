const {Router} = require("express");
const routerInventory = Router();

const inventory = require("../models/inventory")

routerInventory.get("/inventory", async (req, res) => {
    const product = await inventory.find();
    res.json(product);
});
routerInventory.post("/inventory", async (req, res) => {
    const {product,stock,disponbilidad} = req.body;
    const newProduct = new inventory({product,stock,disponbilidad});
    await newProduct.save();
    res.json({message: "Product Saved"});
});

module.exports = routerInventory;