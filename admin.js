import { setProjects } from "./queriesFirebase.js";

const crear = document.querySelector("#enviar");
const select = document.querySelector("#lenguaje");
const containerBudge = document.querySelector("#budge");
const lenguajesSeleccionados = []; 

// Función para renderizar badges
function renderBadges() {
    containerBudge.innerHTML = ""; // limpiar antes

    lenguajesSeleccionados.forEach((lang, index) => {
        const span = document.createElement("span");
        span.className = "badge rounded-pill bg-primary me-1 d-inline-flex align-items-center";
        span.textContent = lang;

        // Botón para quitar
        const btnClose = document.createElement("button");
        btnClose.type = "button";
        btnClose.className = "btn-close btn-close-white btn-sm ms-2"; // bootstrap close
        btnClose.setAttribute("aria-label", "Close");

        btnClose.addEventListener("click", () => {
            // Quitar del array
            lenguajesSeleccionados.splice(index, 1);
            renderBadges();
        });

        span.appendChild(btnClose);
        containerBudge.appendChild(span);
    });
}


function setOptionSelect() {
    const webLanguages = [
        "HTML", "CSS", "JavaScript", "TypeScript",
        "React", "Next.js", "Vue.js", "Nuxt.js", "Angular", "Svelte", "Astro",
        "Node.js", "Express", "NestJS", "Django", "Flask", "FastAPI",
        "Laravel", "Spring Boot", ".NET", "Ruby on Rails"
    ];

    webLanguages.forEach(lang => {
        const option = document.createElement("option");
        option.value = lang;
        option.textContent = lang;
        select.appendChild(option);
    });
}

// Evento select
select.addEventListener("change", () => {
    const value = select.value;

    if (!lenguajesSeleccionados.includes(value)) {
        lenguajesSeleccionados.push(value);
        renderBadges();
    }
});

// Evento crear proyecto
crear.addEventListener("click", function (e) {
    e.preventDefault();

    const titulo = document.querySelector("#titulo").value;
    const descripcion = document.querySelector("#descripcion").value;
    const destacado = document.querySelector("#destacado").value;
    const fecha = document.querySelector("#fecha").value;
    const imagen = document.querySelector("#imagen").value;
    const link = document.querySelector("#link").value;

    if (!fecha) {
        console.error("Fecha vacía");
        return;
    }

    const fechaConverted = new Date(`${fecha}T00:00:00`);

    console.log(lenguajesSeleccionados, "Array a Firebase");

    // Enviar a Firebase
    setNewProject(titulo, descripcion, destacado, fechaConverted, imagen, link, lenguajesSeleccionados);
});

// Funciones auxiliares
function resetForm() {
    document.querySelector("#projectform").reset();
    lenguajesSeleccionados.length = 0; // limpiar array
    renderBadges(); // limpiar badges
}

export function setNewProject(titulo, descripcion, destacado, fecha, imagen, link, lenguajes) {
    try {
        setProjects(titulo, descripcion, destacado, fecha, imagen, link, lenguajes);
        resetForm();
    } catch (error) {
        console.log(error, "Error");
    }
}

// Inicialización
setOptionSelect();
