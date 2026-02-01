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
            document.getElementById("mensaje").textContent = "login incorrecto";
        }
    
    } catch (error) {
        console.error(error);
    }
}); 