// cargar ubicaciones desde Data.js

//cargar scursales desde Data.js segund ubicacion seleccionada(interfaz)

// 2. Cargás los estados de scursles guardados en localStorage, segubn ubicaciones seleccionada 
const estadoSucursales = JSON.parse(localStorage.getItem("estadoSucursales")) || {};

// 3. Combinás la información
const sucursalesConProgreso = sucursalesUbicacion.map(s => {
  const progreso = estadoSucursales[s.id]?.progreso || 0;
  return { ...s, progreso };
});

// 4. Renderizás las cards con los valores combinados
sucursalesConProgreso.forEach(sucursal => {
  renderSucursalCard(sucursal);
});


//selecciionar sucursal(interfaz)

//Al apretar ENTER
//agregar sucursal seleccionada(interfaz) al local storage 
//redirigir a Cola_Picking al presionar ENTER








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
            sucursales.classList.add("hide");
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



