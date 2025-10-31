window.addEventListener("scroll", () => {
  const scrolleable = document.querySelectorAll(".scrolleable");

  if (window.scrollY > 100) {
    scrolleable.forEach(e => e.classList.add("scrolled"));
  } else {
    scrolleable.forEach(e => e.classList.remove("scrolled"));
  }
});


const input = document.getElementById("confProd");

input.addEventListener("select", () => {
  // Cambiamos el estilo del input
  input.classList.add("selected");
});

// Opcional: volver al estilo normal cuando pierda el foco
input.addEventListener("blur", () => {
  input.classList.remove("selected"); // color de fondo claro
});