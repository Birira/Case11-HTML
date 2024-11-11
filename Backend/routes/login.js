const { Router } = require("express");
const bcrypt = require('bcrypt');

const routerLogin = Router();


const users = require("../models/users.js")

routerLogin.post("/", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await users.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }
        const isMatch = password === user.password
        if (!isMatch) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }
        const token = user._id
        res.json({ token })
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

module.exports = routerLogin;