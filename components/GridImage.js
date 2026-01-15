import  {getGridImages} from "../queriesFirebase.js"

function GridImage(leftAside) {

    const containerGrid = document.createElement("div");
    containerGrid.classList.add("container-grid");

    const containerGridBox = document.createElement("div");
    containerGridBox.classList.add("container-gridBox");
    
    const title = document.createElement("h3");
    title.textContent = "Skills";
    title.style.margin=" 10px 0"
    
    containerGrid.append(title)
    if(!leftAside) return
    leftAside.appendChild(containerGrid);
    
    containerGrid.appendChild(containerGridBox)


    setGrid(containerGridBox);

}
async function setGrid(containerGridBox) {
    const images = await getGridImages();
    const img = images[0] || []
    
    for (let i = 0; i < img.length; i++) {
        const gridBox = document.createElement("div");
        const imgGrid = document.createElement("img");
        
       imgGrid.src  = `https://cdn.jsdelivr.net/gh/${img[i]}`;
        imgGrid.classList.add("image-grid");
        
        gridBox.appendChild(imgGrid);
        containerGridBox.appendChild(gridBox);
        
    }
}

export default GridImage