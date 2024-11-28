const mongoose = require("mongoose");
require('dotenv').config();
const URI = "mongodb+srv://matiasrayo12345:vdCj9ZEG5kcqPvu2@cluster0.xxg7j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(URI)

    .then(db=>console.log("DB conectada"))
    .catch(err => console.log(err))