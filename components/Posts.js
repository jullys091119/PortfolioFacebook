import { getProjects } from "../queriesFirebase.js";
import { getPerfilImages } from "../queriesFirebase.js";

async function Posts() {
    const containerPosts = document.querySelector(".aside-right");

    const data = await getProjects();
    const imageData = await getPerfilImages(); 
    const avatarURL = imageData.imagePerfil;

    data.forEach(element => {

        
        const post = document.createElement("div");
        post.classList.add("posts-container");


        const postDataUser = document.createElement("div");
        postDataUser.classList.add("post-data-user-header");

        const containerAvatar = document.createElement("div");
        containerAvatar.classList.add("container-avatar-posts");

        const imageAvatar = document.createElement("img");
        imageAvatar.src = avatarURL;
        imageAvatar.classList.add("image-avatar");

        const containerDate = document.createElement("div");
        containerDate.classList.add("container-date");

        const namePost = document.createElement("p");
        namePost.textContent = "Julian Ontiveros";
        namePost.style.margin = "10px 0 16px 3px 0";

        const datePost = document.createElement("p");
        datePost.textContent = element.fechaCreacion;
        datePost.style.margin = "0";
        
        containerDate.append(namePost, datePost);
        containerAvatar.append(imageAvatar, containerDate);
        postDataUser.appendChild(containerAvatar);
        
        const descriptionPost = document.createElement("p");
        descriptionPost.textContent = element.descripcion;
        descriptionPost.style.margin = "0 12px";
        descriptionPost.style.fontFamily = "Poppins";
     
        const imageContainerPost = document.createElement("div");
        imageContainerPost.classList.add("image-container-posts");

        const imgPost = document.createElement("img");
        imgPost.classList.add("img-post");
        imgPost.src = element.image;
        
        imageContainerPost.appendChild(imgPost);
        
       
        const containerInput = document.createElement("div");
        containerInput.classList.add("container-input");
        
        const imageAvatarInput = document.createElement("img");
        imageAvatarInput.src = avatarURL;
        imageAvatarInput.classList.add("image-avatar");
        
        const inputComments = document.createElement("input");
        inputComments.type = "text";
        inputComments.placeholder = "Escribe un comentario";
        
    
        inputComments.style.fontFamily = "Montserrat";
        inputComments.style.border = "none";
        inputComments.style.outline = "none";
        inputComments.style.width = "100%";
        inputComments.style.padding = "8px 12px";
        inputComments.style.borderRadius = "20px";
        inputComments.style.backgroundColor = "#f0f2f5";
        namePost.style.margin="0"
        
        containerInput.append(imageAvatarInput, inputComments);
        

        post.append(
            postDataUser,
            descriptionPost,
            imageContainerPost,
            containerInput
        );
        
        containerPosts.appendChild(post);

    
        formatDate(datePost,element)
    });

}

function formatDate(datePost,element) {

    const timestamp = element.fechaCreacion;
    const date = new Date(timestamp.seconds * 1000);

    const fechaFormateada = date.toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    datePost.textContent = fechaFormateada;

}

export default Posts;
