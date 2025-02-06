// Obtener la barra de navegación
const navBar = document.querySelector('.navbar');

// Función para detectar el scroll y aplicar la clase 'scrolled'
function handleScroll() {
    if (window.scrollY > window.innerHeight) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
}

// Manejar el evento de scroll
window.addEventListener('scroll', handleScroll);

