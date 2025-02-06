// Obtener la barra de navegación
const navBar = document.querySelector('.navbar');

// Función para detectar el scroll y aplicar la clase 'scrolled'
function handleScroll() {
    if (window.scrollY > window.innerHeight) {
        navBar.classList.add('scrolled');  // Agregar clase cuando el scroll pasa el parallax
    } else {
        navBar.classList.remove('scrolled');  // Quitar clase cuando estamos en el parallax
    }
}

// Manejar el evento de scroll
window.addEventListener('scroll', handleScroll);

// Funcionalidad de copiar el correo
function copyEmail() {
    const emailField = document.getElementById("email");
    emailField.select();
    emailField.setSelectionRange(0, 99999);
    document.execCommand("copy");

    alert("Correo copiado: " + emailField.value);
}
