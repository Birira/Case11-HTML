const express = require("express");
const router = express.Router();
const Inventory = require("../models/inventory");

router.post("/inventory", async (req, res) => {
    try {

        const { product, stock, disponibilidad } = req.body;

        if (!product || stock === undefined || disponibilidad === undefined) {
            return res
                .status(400)
                .json({ message: "Todos los campos son requeridos" });
        }

        const newInventoryItem = new Inventory({
            product,
            stock,
            disponibilidad,
        });

        const savedItem = await newInventoryItem.save();
        
        res
            .status(201)
            .json({ message: "Producto agregado con éxito", data: savedItem });
    } catch (error) {
        console.error("Error al agregar producto al inventario:", error);
        res.status(500).json({ message: "Error del servidor al agregar producto" });
    }
});

module.exports = router;
