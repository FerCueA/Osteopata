const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para leer JSON
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("🟢 Servidor de Quiromasaje activo en Render");
});

// Arrancar el servidor
app.listen(PORT, () => {
  console.log(`Servidor funcionando en puerto ${PORT}`);
});
