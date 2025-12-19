import GridImage from "./GridImage.js";
import Search from "./Search.js";
function AsideLeft() {
    const containerAsides = document.querySelector("#asides-container");

    const containerMax = document.createElement("div");
    containerMax.classList.add("max-container-aside")
     

    const containerContent = document.createElement("div");
    containerContent.classList.add("container-content");
   

    const containerDetails = document.createElement("div");
    containerDetails.classList.add("container-details")


    const leftAside = document.createElement("aside");
    const rightAside = document.createElement("aside");

    containerMax.appendChild(containerContent)
    leftAside.classList.add("aside-left");
    rightAside.classList.add("aside-right");


    leftAside.appendChild(containerDetails)


    containerAsides.appendChild(containerMax)
    containerContent.appendChild(leftAside)
    containerContent.appendChild(rightAside)




    GridImage(leftAside)
    createButtonsDetails(containerDetails)
    Search(rightAside)
}



function createButtonsDetails(leftAside) {
    let opciones = [
        { opcion: "Presentación" },
        { opcion: "Detalles" },
        { opcion: "Proyectos" }
    ]
    let buttonDetails;
    opciones.map((item, i) => {
        console.log(item)
        buttonDetails = document.createElement("button");
        buttonDetails.classList.add("button-details")
        buttonDetails.style.display = "block"
        buttonDetails.textContent = item.opcion
        leftAside.append(buttonDetails);
    })

}




export default AsideLeft