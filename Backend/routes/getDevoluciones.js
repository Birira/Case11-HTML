const { Router } = require("express");
const routerDevoluciones = Router();

const devoluciones = require("../models/devoluciones.js")

routerDevoluciones.get("/devoluciones", async (req, res) => {
    try {
        const devoluciones = await devoluciones.find(); // Obtener todas las devoluciones
        res.json(devoluciones); // Enviar como respuesta
    } catch (err) {
        console.error("Error al obtener las devoluciones:", err.message);
        res.status(500).json({ message: "Error al obtener las devoluciones", error: err.message });
    }
});



routerDevoluciones.get("/devoluciones/:id", async (req, res) => {
    try {
        // Intentar buscar el elemento por ID
        const item = await devoluciones.findById(req.params.id);

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

routerDevoluciones.put("/devoluciones/:id", async (req, res) => {
    const devolucionesId = req.params.id;
    const updated = req.body;

    const change = await devoluciones.findByIdAndUpdate(devolucionesId, updated, { new: true })
    res.json(change)
});

routerDevoluciones.post("/devoluciones", async (req, res) => {
    const { ID, fechaD } = req.body;
    const newDevolucion = new devoluciones({ ID, fechaD });
    await newDevolucion.save();
    res.json({ message: "Product Saved" });
});

routerDevoluciones.delete("/devoluciones/:id", async (req, res) => {
    try {
        const userDelete = await devoluciones.findByIdAndDelete(req.params.id)
        if (!userDelete) {
            return res.status(404).json({ message: "item no encontrado" })
        }
        res.status(200).json({ message: "item eliminado" })
    } catch (err) {
        res.status(500).json({ error: "error del sistema" })
    }
});
module.exports = routerDevoluciones;