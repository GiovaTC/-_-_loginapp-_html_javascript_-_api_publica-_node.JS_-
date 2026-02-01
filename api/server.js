const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());    

// api publica de ejemplo   
app.post("/api/login", (req, res) => {
    const { usuario, correo } = req.body;

    if (usuario && correo) {
        res.json({
            ok: true,
            mensaje: "usuario autenticado",
            data: { usuario, correo }   
        });
    } else {
        res.status(400).json({
            ok: false,
            mensaje: "datos incompletos"
        });
    }
}); 

app.listen(3000, () => {
    console.log("API publica ejecutandose en http://localhost:3000");
}); 