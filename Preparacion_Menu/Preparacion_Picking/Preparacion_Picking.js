document.addEventListener("DOMContentLoaded", () => {
  const ubicaciones = document.querySelectorAll(".ubicacion-btn");
  const sucursales = document.querySelectorAll(".sucursal-card");
  const sucursalSection = document.getElementById("sucursales-section");

  // Selección única de ubicación
  ubicaciones.forEach(btn => {
    btn.addEventListener("click", () => {
      ubicaciones.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");
      sucursalSection.scrollIntoView({ behavior: "smooth", block: "start" });
        
        if (btn.id === "ubicacion-enabled") {
            sucursales.forEach(card => card.classList.remove("hide"));
            
        }   else {
            sucursalCards.classList.add("hide");
        };
    });
  });

  // Selección única de sucursal
  sucursales.forEach(card => {
    card.addEventListener("click", () => {
      sucursales.forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
    });
  });
});



