const { Router } = require("express");
const { validateUser } = require("../validators/users.js")
const routerUsers = Router();


const users = require("../models/users.js")

routerUsers.get("/users", async (req, res) => {
    const user = await users.find();
    res.json(user);
});

routerUsers.get("/users/:id", async (req, res) => {
    try {
        const user = await users.findById(req.params.id);
        res.json(user);
    } catch (err) {
        res.status(404).json(err)
    }
});

routerUsers.post("/users", validateUser, async (req, res) => {
    const { name, email, password, role, status } = req.body;
    const newUser = new users({ name, email, password, role, status });
    await newUser.save();
    res.json({ message: "User Saved" });
});

routerUsers.put("/users/:id", async (req, res) => {

    const userId = req.params.id;
    const updated = req.body

    const change = await users.findByIdAndUpdate(userId, updated, { new: true })
    res.json(change)
});

routerUsers.delete("/users/:id", async (req, res) => {
    try {
        const userDelete = await users.findByIdAndDelete(req.params.id)
        if (!userDelete) {
            return res.status(404).json({ message: "usuario no encontrado" })
        }
        res.status(200).json({ message: "Usuario eliminado" })
    } catch (err) {
        res.status(500).json({ error: "error del sistema" })
    }
});

module.exports = routerUsers;