const desplazarArriba = document.querySelector("#desplazarse-hacia-arriba");

if (desplazarArriba) { // Comprueba si el elemento existe antes de agregar el evento
  desplazarArriba.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
}

// Mostrar el menú de hamburguesa
const menuHamburguesa = document.querySelector(".menu-hamburguesa"); // Cambiado a una clase

if (menuHamburguesa) { // Comprueba si el elemento existe antes de agregar el evento
  menuHamburguesa.addEventListener("click", () => {
    ul.classList.toggle("show");
  });
}

// Cerrar el menú de hamburguesa cuando se hace clic en un enlace

// Seleccionar enlaces de navegación
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);
