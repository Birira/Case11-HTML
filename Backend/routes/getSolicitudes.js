const { Router } = require("express");
const routerSolicitudes = Router();
const Solicitudes = require("../models/solicitudes.js");

// Obtener todas las solicitudes
routerSolicitudes.get("/solicitudes", async (req, res) => {
    try {
        const solicitud = await Solicitudes.find();
        res.json(solicitud);
    } catch (err) {
        res.status(500).json({ message: "Error al obtener las solicitudes", error: err });
    }
});

// Buscar solicitudes por RUT
routerSolicitudes.get("/solicitudes/rut/:rut", async (req, res) => {
    try {
        const solicitudes = await Solicitudes.find({ rut: req.params.rut });
        if (!solicitudes.length) {
            return res.status(404).json({ message: "No se encontraron solicitudes con ese RUT" });
        }
        res.json(solicitudes);
    } catch (err) {
        res.status(500).json({ message: "Error al obtener las solicitudes por RUT", error: err });
    }
});

// Actualizar una solicitud por su ID
routerSolicitudes.put("/solicitudes/:id", async (req, res) => {
    const solicitudId = req.params.id;
    const datosActualizados = req.body;

    try {
        const solicitudActualizada = await Solicitudes.findByIdAndUpdate(solicitudId, datosActualizados, { new: true });
        if (!solicitudActualizada) {
            return res.status(404).json({ message: "Solicitud no encontrada para actualizar" });
        }
        res.json(solicitudActualizada);
    } catch (err) {
        res.status(500).json({ message: "Error al actualizar la solicitud", error: err });
    }
});

// Crear una nueva solicitud
routerSolicitudes.post("/solicitudes", async (req, res) => {
    const { user, rut, product, email, solicitud, status } = req.body;

    // Verificar que todos los campos requeridos estén presentes
    if (!user || !rut || !product || !email || !status) {
        return res.status(400).json({ message: "Faltan datos en la solicitud" });
    }

    const nuevaSolicitud = new Solicitudes({
        user, 
        rut, 
        product, 
        email, 
        solicitud: solicitud || "Sin descripción",  // Si falta, asignar valor por defecto
        status
    });

    try {
        await nuevaSolicitud.save();
        res.status(201).json({ message: "Solicitud guardada con éxito" });
    } catch (err) {
        res.status(500).json({ message: "Error al guardar la solicitud", error: err });
    }
});

// Eliminar una solicitud por su ID
routerSolicitudes.delete("/solicitudes/:id", async (req, res) => {
    try {
        const solicitudEliminada = await Solicitudes.findByIdAndDelete(req.params.id);
        if (!solicitudEliminada) {
            return res.status(404).json({ message: "Solicitud no encontrada para eliminar" });
        }
        res.status(200).json({ message: "Solicitud eliminada con éxito" });
    } catch (err) {
        res.status(500).json({ message: "Error al eliminar la solicitud", error: err });
    }
});

module.exports = routerSolicitudes;