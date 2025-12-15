import { getPerfilImages } from "../queriesFirebase.js";

async function ImagePerfil() {
    const data = await setImagesPerfil()
    const containerBanner = document.querySelector(".max-container");

    const name  = document.createElement("h1")
    name.textContent = data.nombre
    name.style.marginBottom = 0;
    name.style.fontFamily="Montserrat";
    name.style.marginLeft="60px"
    
    const informacionUser = document.createElement("p");
    informacionUser.textContent = `🖥️ ${data.biografia}💻`;
    informacionUser.classList.add("informacion-user")
    
    const containerPerfil = document.createElement("div");
    containerPerfil.classList.add("perfil-container")

    const image = document.createElement("img");
    image.src = data.imagePerfil
    image.alt = "Imagen de perfil";
    image.style.borderRadius="100%"
    image.classList.add("perfil-image")
    
    
    containerPerfil.append(image);
    
    containerPerfil.appendChild(name)
    containerPerfil.appendChild(informacionUser)
    containerBanner.append(containerPerfil) 

    
}

async function setImagesPerfil () {
  const data = await getPerfilImages()
  return data
}

export default ImagePerfil