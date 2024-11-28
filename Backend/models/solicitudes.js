const { Schema, model } = require("mongoose");

const solicitudesSchema = new Schema({
    user: { type: String, required: true },
    rut: { type: String, required: true },
    product: { type: String, required: true },
    email: { type: String, required: true },
    solicitud: { type: String, default: "Sin descripción" },
    status: { type: String, required: true },
});

module.exports = model("Solicitudes", solicitudesSchema);
