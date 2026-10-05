console.log("NEXORA JS CARGADO 🚀");

const elements = document.querySelectorAll(
    ".service-card, .process-step, .about-container, .contact-container"
);

// Preparar elementos para la animación
elements.forEach((element, index) => {

    element.classList.add("reveal");

    // Pequeño retraso entre tarjetas
    if (element.classList.contains("service-card")) {
        element.style.transitionDelay = `${(index % 3) * 120}ms`;
    }
});

// Función para detectar elementos visibles
function revealOnScroll() {

    elements.forEach((element) => {

        if (element.classList.contains("show")) {
            return;
        }

        const position = element.getBoundingClientRect();

        if (position.top < window.innerHeight - 80) {
            element.classList.add("show");
        }

    });
}

// Ejecutar al cargar
window.addEventListener("load", revealOnScroll);

// Ejecutar al hacer scroll
window.addEventListener("scroll", revealOnScroll);

console.log("Animaciones NEXORA listas 🚀");