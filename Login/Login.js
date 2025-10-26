document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.getElementById("login_button");

    loginButton.addEventListener("click", () => {
        console.log("Botón login clickeado");
        window.location.href = "../Home_Menu/Home_Menu.html";
    });
});