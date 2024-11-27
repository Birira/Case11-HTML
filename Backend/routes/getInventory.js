const { Router } = require("express");
const routerInventory = Router();

const inventory = require("../models/inventory")

routerInventory.get("/inventory", async (req, res) => {
    const product = await inventory.find();
    res.json(product);
});



routerInventory.get("/inventory/:id", async (req, res) => {
    try {
        const item = await inventory.findById(req.params.id);
        res.json(item);
    } catch (err) {
        res.status(404).json(err)
    }
});

routerInventory.put("/inventory/:id", async (req, res) => {
    const inventoryId = req.params.id;
    const updated = req.body;

    const change = await inventory.findByIdAndUpdate(inventoryId, updated, { new: true })
    res.json(change)
});

routerInventory.post("/inventory", async (req, res) => {
    const { product, stock, disponibilidad } = req.body;
    const newProduct = new inventory({ product, stock, disponibilidad });
    await newProduct.save();
    res.json({ message: "Product Saved" });
});

routerInventory.delete("/inventory/:id", async (req, res) => {
    try {
        const userDelete = await inventory.findByIdAndDelete(req.params.id)
        if (!userDelete) {
            return res.status(404).json({ message: "item no encontrado" })
        }
        res.status(200).json({ message: "item eliminado" })
    } catch (err) {
        res.status(500).json({ error: "error del sistema" })
    }
});
module.exports = routerInventory;