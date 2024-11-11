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

routerInventory.delete("/inventory/:id", async (req, res) => {
    try {
        const userDelete = await inventory.findByIdAndDelete(req.params.id)
        if (!userDelete) {
            return res.status(404).json({ message: "usuario no encontrado" })
        }
        res.status(200).json({ message: "Usuario eliminado" })
    } catch (err) {
        res.status(500).json({ error: "error del sistema"})
    }
});
module.exports = routerInventory;