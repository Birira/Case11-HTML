const { Schema, model } = require("mongoose");

const solicitudesSchema = new Schema({
    user: { type: String, required: true },
    rut: { type: String, required: true },
    product: { type: String, required: true },
    email: { type: String, required: true },
    solicitud: { type: String, required: true },
    status: { type: String, required: true },
});

module.exports = model("solicitudes", solicitudesSchema);