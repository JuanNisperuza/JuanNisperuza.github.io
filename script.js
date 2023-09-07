const proyectoSlider = document.querySelector('.proyecto-slider');
const proyectos = document.querySelectorAll('.proyecto');

let currentIndex = 0;

function updateSlider() {
    const translateX = currentIndex * -330; // Ancho de la tarjeta más margen
    proyectoSlider.style.transform = `translateX(${translateX}px)`;
}

// Control de navegación del slider
document.querySelector('.proyectos-personales .proyecto-slider').addEventListener('click', () => {
    if (currentIndex < proyectos.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
});

document.querySelector('.proyectos-laborales .proyecto-slider').addEventListener('click', () => {
    if (currentIndex < proyectos.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
});

updateSlider(); // Llama a esta función para inicializar el slider
