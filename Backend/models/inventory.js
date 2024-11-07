const {Schema, model} = require("mongoose");

const inventorySchema = new Schema({
    product:{type: String, required: true},
    stock:{type: Number, required: true},
    disponbilidad:{type: String, required: true},
});

module.exports = model("inventory", inventorySchema);