const mongoose = require("mongoose");
require('dotenv').config();
const URI = "mongodb+srv://kittythekiller070:XL9otDp5dhwZoXOz@cluster0.zskq9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(URI)

    .then(db=>console.log("DB conectada"))
    .catch(err => console.log(err))