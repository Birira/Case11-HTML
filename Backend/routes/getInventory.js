const { Router } = require("express");
const routerInventory = Router();

const inventory = require("../models/inventory")

routerInventory.get("/inventory", async (req, res) => {
    const product = await inventory.find();
    res.json(product);
});



routerInventory.get("/inventory/:id", async (req, res) => {
    try {
        // Intentar buscar el elemento por ID
        const item = await inventory.findById(req.params.id);

        // Si no se encuentra el elemento, devolver un error 404
        if (!item) {
            return res.status(404).json({ message: 'Préstamo no encontrado' });
        }

        // Si el elemento se encuentra, devolverlo como JSON
        res.json(item);

    } catch (err) {
        // Si ocurre un error en la base de datos o en la lógica, manejarlo aquí
        console.error('Error al obtener el préstamo:', err.message);

        // Devolver un error 500 con el mensaje del error
        res.status(500).json({
            message: 'Error al obtener el préstamo',
            error: err.message
        });
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