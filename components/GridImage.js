
function GridImage(leftAside) {
    const containerGrid = document.createElement("div");
    containerGrid.classList.add("container-grid");
    leftAside.appendChild(containerGrid);
    setGrid(containerGrid);
}

function setGrid(containerGrid) {
    
    for (let i = 0; i < 9; i++) {
        const imgGrid = document.createElement("img");
        const gridBox = document.createElement("div");
        gridBox.appendChild(imgGrid)
        imgGrid.src = "https://scontent.fmzt3-1.fna.fbcdn.net/v/t39.30808-6/593730634_122107613055129657_8562271371294648786_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHZwbr7P-R3lksVgCJuCar7W-71sq-cLWdb7vWyr5wtZ2HI5F62JUAV1iwj6QzWbtymbziZsuMqyqFJDWWu8WPP&_nc_ohc=7umzhlp1SbUQ7kNvwEf9gz1&_nc_oc=Adn_zoXmN8cm2L2i6Maxt5Okf4UqRUP_udm1BzrWhkL812F-fq6y4A--AFt7w9ndOSbrGvesVZ6qKSgIakDMBcdc&_nc_zt=23&_nc_ht=scontent.fmzt3-1.fna&_nc_gid=KZ6A1Od0bgWiEwElLoW8vQ&oh=00_AfmujrSWdCpEh7hrOsCtJGCZbdBKgOdVuOGZ1Cjlg-8gkg&oe=6947F04D"
        imgGrid.classList.add("image-grid");
        containerGrid.appendChild(gridBox);
    }

}

export default GridImage