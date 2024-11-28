const mongoose = require("mongoose");
require('dotenv').config();
const URI = "mongodb+srv://Vicente:R833WfAKcEKqcW6O@cluster0.ibfio.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(URI)

    .then(db=>console.log("DB conectada"))
    .catch(err => console.log(err))