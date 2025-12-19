
function Search (rightAside) {
 
    const divSearch = document.createElement("div");
    divSearch.classList.add("container-search");
    if(!rightAside) return
    rightAside.appendChild(divSearch)

    const containerAvatar = document.createElement("div");
    containerAvatar.classList.add("container-avatar")

    const avatar = document.createElement("div");
    avatar.classList.add("avatar");

    const imgAvatar = document.createElement("img");
    imgAvatar.src="https://scontent.fmzt3-1.fna.fbcdn.net/v/t39.30808-6/593730634_122107613055129657_8562271371294648786_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHZwbr7P-R3lksVgCJuCar7W-71sq-cLWdb7vWyr5wtZ2HI5F62JUAV1iwj6QzWbtymbziZsuMqyqFJDWWu8WPP&_nc_ohc=7umzhlp1SbUQ7kNvwEf9gz1&_nc_oc=Adn_zoXmN8cm2L2i6Maxt5Okf4UqRUP_udm1BzrWhkL812F-fq6y4A--AFt7w9ndOSbrGvesVZ6qKSgIakDMBcdc&_nc_zt=23&_nc_ht=scontent.fmzt3-1.fna&_nc_gid=KZ6A1Od0bgWiEwElLoW8vQ&oh=00_AfmujrSWdCpEh7hrOsCtJGCZbdBKgOdVuOGZ1Cjlg-8gkg&oe=6947F04D"
    imgAvatar.classList.add("img-avatar")
     
    divSearch.appendChild(containerAvatar)

    const hr = document.createElement("hr");
    hr.classList.add("line-search");
    
    const inputSearch = document.createElement("input");
    inputSearch.setAttribute("type","text");
    inputSearch.setAttribute("id", "search");
    inputSearch.classList.add("input-search");
    inputSearch.setAttribute("placeholder","¿Qué proyecto buscas ?");

    avatar.appendChild(imgAvatar)
    containerAvatar.append(avatar)
    containerAvatar.appendChild(inputSearch)
    divSearch.appendChild(hr)

   




}

export default Search