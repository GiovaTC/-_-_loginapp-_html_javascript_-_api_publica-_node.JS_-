# -_-_loginapp-_html_javascript_-_api_publica-_node.JS_- :. 
# 📌 Login App – HTML + JavaScript + API Pública (Node.js):  

<img width="1024" height="1024" alt="image" src="https://github.com/user-attachments/assets/e79fee00-03a7-41cd-a1b2-1d143802acb4" />    

<img width="2551" height="1043" alt="image" src="https://github.com/user-attachments/assets/fe12a284-8d5c-434f-a623-88e4303ab798" />        

<img width="2555" height="1038" alt="image" src="https://github.com/user-attachments/assets/4de18749-949d-4925-a348-ad4d5413511e" />    

A continuación tienes una **solución completa, clara y funcional** que cumple exactamente con lo solicitado:

✅ Formulario de login en **HTML + JavaScript**  
✅ Validación básica  
✅ Apertura de un **template (dashboard)** con la información del usuario  
✅ Envío de datos a una **API pública (código abierto)**  
✅ **API pública de ejemplo** usando **Node.js + Express**  

Todo el proyecto es **didáctico, reutilizable y fácil de ejecutar**.

---

## 1️⃣ Estructura del proyecto

```text
login-app/
│
├── frontend/
│   ├── login.html
│   ├── dashboard.html
│   └── app.js
│
└── api/
    ├── server.js
    └── package.json

2️⃣ Frontend – Formulario de Login (HTML)
📄 frontend/login.html

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <script defer src="app.js"></script>
</head>
<body>

<h2>Inicio de Sesión</h2>

<form id="loginForm">
    <label>Usuario:</label><br>
    <input type="text" id="usuario" required><br><br>

    <label>Correo:</label><br>
    <input type="email" id="correo" required><br><br>

    <button type="submit">Ingresar</button>
</form>

<p id="mensaje"></p>

</body>
</html>

3️⃣ Template después del Login (Dashboard)
📄 frontend/dashboard.html

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Dashboard</title>
</head>
<body>

<h2>Bienvenido</h2>

<p><strong>Usuario:</strong> <span id="user"></span></p>
<p><strong>Correo:</strong> <span id="email"></span></p>

<script>
    const data = JSON.parse(localStorage.getItem("usuario"));

    document.getElementById("user").textContent = data.usuario;
    document.getElementById("email").textContent = data.correo;
</script>

</body>
</html>

4️⃣ JavaScript – Lógica del Login y envío a la API
📄 frontend/app.js

document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const correo = document.getElementById("correo").value;

    const datos = { usuario, correo };

    try {
        const response = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datos)
        });

        const result = await response.json();

        if (result.ok) {
            localStorage.setItem("usuario", JSON.stringify(datos));
            window.location.href = "dashboard.html";
        } else {
            document.getElementById("mensaje").textContent = "Login incorrecto";
        }

    } catch (error) {
        console.error(error);
    }
});
  
5️⃣ API Pública de Ejemplo (Código Abierto)
🟢 Tecnologías utilizadas
Node.js
Express
JSON
Sin base de datos (API pública de demostración)

📄 api/package.json
{
  "name": "api-login-publica",
  "version": "1.0.0",
  "main": "server.js",
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5"
  }
}

📦 Instalación de dependencias
npm install
📄 api/server.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// API pública de ejemplo
app.post("/api/login", (req, res) => {
    const { usuario, correo } = req.body;

    if (usuario && correo) {
        res.json({
            ok: true,
            mensaje: "Usuario autenticado",
            data: { usuario, correo }
        });
    } else {
        res.status(400).json({
            ok: false,
            mensaje: "Datos incompletos"
        });
    }
});

app.listen(3000, () => {
    console.log("API pública ejecutándose en http://localhost:3000");
});

6️⃣ Flujo de funcionamiento
El usuario ingresa sus datos en el formulario
JavaScript envía los datos a la API pública
La API valida y responde OK
Los datos se guardan en localStorage

Se abre el dashboard mostrando la información del usuario

7️⃣ API pública – Endpoint
POST
http://localhost:3000/api/login
📤 Body (JSON)
{
  "usuario": "giovanny",
  "correo": "giovanny@email.com"
}

✅ Resultado
✔ Login funcional
✔ Comunicación Frontend ↔ API
✔ Dashboard dinámico
✔ Código claro, modular y reutilizable

📌 Proyecto ideal para prácticas de autenticación básica, consumo de APIs y separación frontend/backend :. . / .
