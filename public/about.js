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

// Escuchar el evento de scroll
window.addEventListener('scroll', handleScroll);

// Codigo para el grafico
window.onload = function() {
    var ctx = document.getElementById('techChart').getContext('2d');

    var techChart = new Chart(ctx, {
        type: 'pie', // Gráfico de tipo "quesito" (pastel)
        data: {
            //labels: ['HTML', 'CSS', 'JavaScript', 'Node.js'], // Nombres de las tecnologías
            datasets: [{
                label: 'Tecnologías que sé',
                data: [39, 29, 19, 9, 4], // Porcentaje de conocimiento de cada tecnología
                backgroundColor: ['#f39c12', '#2980b9', '#2ecc71', '#9b59b6', '#ff0055'], // Colores para cada tecnología
                borderColor: ['#d35400', '#1abc9c', '#27ae60', '#8e44ad'], // Colores del borde
                borderWidth: 2
            }]
        },
        options: {
            responsive: true, // Hacerlo responsivo
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
                        }
                    }
                }
            }
        }
    });
};

// Codigo para la funcionalidad de menu desplegable
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    const toggleIcon = card.querySelector('.toggle-icon');
    const projectDescription = card.querySelector('.project-description');

    toggleIcon.addEventListener('click', () => {
        // Cambiar la visibilidad de la descripción
        if (projectDescription.style.display === 'none' || projectDescription.style.display === '') {
            projectDescription.style.display = 'block';
            toggleIcon.innerHTML = '&#x25B2;'; // Cambiar a flecha hacia arriba
        } else {
            projectDescription.style.display = 'none';
            toggleIcon.innerHTML = '&#x25BC;'; // Flecha hacia abajo
        }
    });
});

// Codigo para obtener los datos de mi canal de Youtube (Usando su API)
const apiKey = 'AIzaSyBQnTrCOQfWb9ihWS1A6hkEH5bqn15RCnY';
const channelId = 'UCTZUzsoDg4nMdKtm5fSRHKw';

async function getMostWatchedVideos(){
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&order=viewCount&part=snippet&type=video&maxResults=3`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const videos = data.items;

        // Actualizar cada tarejta con la informacion de los videos
        for(let i = 0; i < videos.length; i++){
            const video = videos[i];
            const videoId = video.id.videoId;
            const title = video.snippet.title;
            const thumbnail = video.snippet.thumbnails.high.url;
            const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

            // Establecer los elementos de cada video
            document.getElementById(`video-thumbnail-${i+1}`).src = thumbnail;
            document.getElementById(`video-title-${i + 1}`).innerText = title;
            document.getElementById(`video-link-${i + 1}`).href = videoUrl;
        }
    } catch (error) {
        console.error('Error al obtener los videos', error);
    }
}

async function getSubscribersNumber() {
    const url = `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&id=${channelId}&part=statistics`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const subscriberCount = data.items[0].statistics.subscriberCount;

        // Mostrar el numero de subscriptores
        document.getElementById('subscribers-count').innerText = subscriberCount;
    } catch (error) {
        console.error('No se pudo actualizar el numero de subscriptores', error);
    }
}

getMostWatchedVideos();
getSubscribersNumber();
