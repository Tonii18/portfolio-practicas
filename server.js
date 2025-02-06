const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static("public"));


// Ruta principal
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Ruta de la seccion sobre mi
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"))
});

// Ruta de la seccion 'contacto'
app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "contact.html"))
});

