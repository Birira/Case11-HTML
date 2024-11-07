const {Schema, model} = require("mongoose");

const usersSchema = new Schema({
    name:{type: String, required: true},
    email:{type: String, required: true},
    password:{type: String, required: true},
    role:{type: String, required: true},
    status:{type: Boolean, required: true}
});

module.exports = model("users", usersSchema);