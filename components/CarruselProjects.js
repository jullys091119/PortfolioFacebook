import { getProjects } from "../queriesFirebase.js";
import { carruselListeners } from "../listeners/listeners.js";
async function CarruselProjects() {
    let direction;
    const container = document.querySelector(".max-container-projects");
    const maxContainer = document.querySelector(".max-container");
    const containerCarrusel = document.createElement("div");
    containerCarrusel.classList.add("container-carrusel");

    const btnPrev = document.createElement("button")
    const btnNext = document.createElement("button")
    btnPrev.classList.add("btn-prev")
    btnNext.classList.add("btn-next")
    
    const chevronNext = document.createElement("img");
    chevronNext.src = "./img/next.png";
    chevronNext.style.height = "10px"
    chevronNext.style.width = "10px"
    const chevronPrev = document.createElement("img");
    chevronPrev.src = "./img/left-chevron.png";
    chevronPrev.style.height = "15px"
    chevronPrev.style.width = "15px"
    
    btnNext.appendChild(chevronNext);
    btnPrev.appendChild(chevronPrev);



    const containerButtons = document.createElement("div")
    containerButtons.classList.add("container-buttons")
    
    const carruselHeader = document.createElement("header");
    carruselHeader.classList.add("carrusel-header");
    carruselHeader.textContent = "Mis proyectos"

    
    container.appendChild(containerButtons)
    
    
    containerButtons.appendChild(btnPrev)
    containerButtons.appendChild(btnNext)
    
    container.appendChild(containerCarrusel)
    
    
    
    showCardsCarrusel()
    
    const itemWidth = await showCardsCarrusel(containerCarrusel);
    
    containerButtons.appendChild(carruselHeader)
    direction = + 1
    carruselListeners(btnNext, containerCarrusel, direction, itemWidth)
    direction = -1;
    carruselListeners(btnPrev, containerCarrusel, direction, itemWidth)
    
    maxContainer.appendChild(container)
}

async function showCardsCarrusel() {
    const data = await getProjects();
    const containerCarrusel = document.querySelector(".container-carrusel");
    containerCarrusel.innerHTML = "";
    data.map((item) => {
        const imagenCarrusel = document.createElement("img");
        imagenCarrusel.src = item.image
        imagenCarrusel.alt = "Imagen proyecto Julián Ontiveros";
        imagenCarrusel.classList.add("image-carrusel");
        const carruselCard = document.createElement("div");
        carruselCard.classList.add("carrusel-card")
        carruselCard.appendChild(imagenCarrusel)
        const nombreProyecto = document.createElement("p");
        nombreProyecto.textContent = item.titulo
        nombreProyecto.classList.add("nombre-proyecto");
        carruselCard.appendChild(nombreProyecto)

        containerCarrusel.appendChild(carruselCard)

    })
    const itemWidth = containerCarrusel.querySelector(".carrusel-card").offsetWidth + 10;
    return itemWidth;

}



export default CarruselProjects