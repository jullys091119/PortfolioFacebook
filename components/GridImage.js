
function GridImage(leftAside) {

    const containerGrid = document.createElement("div");
    containerGrid.classList.add("container-grid");

    const containerGridBox = document.createElement("div");
    containerGridBox.classList.add("container-gridBox");
    
    const title = document.createElement("h3");
    title.textContent = "Fotos";
    title.style.margin=" 10px 0"
    
    containerGrid.append(title)
    if(!leftAside) return
    leftAside.appendChild(containerGrid);
    
    containerGrid.appendChild(containerGridBox)


    setGrid(containerGridBox);

}

function setGrid(containerGridBox) {
    for (let i = 0; i < 1; i++) {
        const imgGrid = document.createElement("img");
        const gridBox = document.createElement("div");
        gridBox.appendChild(imgGrid)
        imgGrid.src = ".\img\imagenperfil.jpg"
        imgGrid.classList.add("image-grid");
        containerGridBox.appendChild(gridBox);
    }
}

export default GridImage