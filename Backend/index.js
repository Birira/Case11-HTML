const express = require("express");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
//Inicialización
const app = express();

//Configuraciones
app.set("port", 3000);
require("./database");

//middlewares
app.use(morgan("dev"));
const storage = multer.diskStorage({
    destination: path.join(__dirname, "public/uploads"), filename(req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
app.use(multer({ storage }).single("image"));
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(express.json());

//routes
app.use("/api", require("./routes/login"));
app.use("/api", require("./routes/getUsers"));
app.use("/api", require("./routes/getInventory"));
app.use("/api", require("./routes/getSolicitudes"));
app.use("/api", require("./routes/postInventory"));
app.use("/api", require("./routes/getDevoluciones"));


//archivos estaticos
app.use(express.static(path.join(__dirname, "public")));

//Iniciar app
app.listen(app.get("port"), () => {
    console.log('http://localhost:3000')
    console.log("puerto del servidor", app.get("port"))
})