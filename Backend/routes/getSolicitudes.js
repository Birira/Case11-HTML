const { Router } = require("express");
const routerSolicitudes = Router();

const Solicitudes = require("../models/Solicitudes")

routerSolicitudes.get("/Solicitudes", async (req, res) => {
    const solicitud = await Solicitudes.find();
    res.json(solicitud);
});



routerSolicitudes.get("/Solicitudes/:id", async (req, res) => {
    try {
        const user = await Solicitudes.findById(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(404).json(err)
    }
});

routerSolicitudes.put("/Solicitudes/:id", async (req, res) => {
    const solicitudId = req.params.id;
    const updated = req.body;

    const change = await Solicitudes.findByIdAndUpdate(solicitudId, updated, { new: true })
    res.json(change)
});

routerSolicitudes.post("/Solicitudes", async (req, res) => {
    const { solicitud, user, product, status } = req.body;
    const newsolicitud = new Solicitudes({ solicitud, user, product, status });
    await newsolicitud.save();
    res.json({ message: "Request Saved" });
});


routerSolicitudes.delete("/Solicitudes/:id", async (req, res) => {
    try {
        const SolicitudesDelete = await Solicitudes.findByIdAndDelete(req.params.id)
        if (!SolicitudesDelete) {
            return res.status(404).json({ message: "solicitud no encontrado" })
        }
        res.status(200).json({ message: "solicitud eliminado" })
    } catch (err) {
        res.status(500).json({ error: "error del sistema" })
    }
});

module.exports = routerSolicitudes;