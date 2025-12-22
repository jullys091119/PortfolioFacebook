import { getPerfilImages } from "../queriesFirebase.js";
function Search(rightAside) {

    const divSearch = document.createElement("div");
    divSearch.classList.add("container-search");
    if (!rightAside) return
    rightAside.appendChild(divSearch)

    const containerAvatar = document.createElement("div");
    containerAvatar.classList.add("container-avatar")

    const avatar = document.createElement("div");
    avatar.classList.add("avatar");

    divSearch.appendChild(containerAvatar)

    const hr = document.createElement("hr");
    hr.classList.add("line-search");

    const inputSearch = document.createElement("input");
    inputSearch.setAttribute("type", "text");
    inputSearch.setAttribute("id", "search");
    inputSearch.classList.add("input-search");
    inputSearch.setAttribute("placeholder", "¿Qué proyecto buscas ?");


    containerAvatar.append(avatar)
    containerAvatar.appendChild(inputSearch)
    divSearch.appendChild(hr)
    getImage(avatar)
}


async function getImage(avatar) {
    const data = await getPerfilImages();

    const imgAvatar = document.createElement("img");
    imgAvatar.src = data.imagePerfil;
    imgAvatar.classList.add("img-avatar");

    avatar.appendChild(imgAvatar)
}

export default Search