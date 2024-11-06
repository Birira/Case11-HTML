const mongoose = require("mongoose");
const URI = "mongodb+srv://vicentepereirach:Wq6P5HV6y5hScVpj@cluster0.541up.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(URI)

    .then(db=>console.log("DB conectada"))
    .catch(err => console.log(err))