document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("login_button");

    loginButton.addEventListener("click", () => {
        console.log("Botón login clickeado");
        window.location.href = "WMS-DEMO/Home_Menu/Home_Menu.html";
    });
});


// Simular login al presionar "Enter" con pantalla de carga
