const {Router} = require("express");
const routerUsers = Router();

const users = require("../models/users.js")

routerUsers.get("/users", async (req, res) => {
    const user = await users.find();
    res.json(user);
});

routerUsers.post("/users", async (req, res) => {
    const {name, email, password, role, status} = req.body;
    const newUser = new users({name, email, password, role, status});
    await newUser.save();
    res.json({message: "User Saved"});
});

module.exports = routerUsers;