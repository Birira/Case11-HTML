const {Schema, model} = require("mongoose");

const devolucionesSchema = new Schema({
    ID:{type: String, required: true},
    fechaD:{type: String, required: true},
});

module.exports = model("Devoluciones", devolucionesSchema);