import { getProjects } from "../queriesFirebase.js";
import { getPerfilImages } from "../queriesFirebase.js";
import { sendComment } from "../listeners/listeners.js";
import { getComments } from "../queriesFirebase.js";


async function Posts() {
    const containerPosts = document.querySelector(".aside-right");
    
    const data = await getProjects();
    const imageData = await getPerfilImages();
    const avatarURL = imageData.imagePerfil;
    
    for (const [i, element] of data.entries()) {
        const icon = document.createElement("i");
        icon.classList.add("bi", "bi-send", `icon-send-${i}`);
        
        const iconThumb = document.createElement("i");
        iconThumb.classList.add("bi", "bi-hand-thumbs-up-fill");
        
        const iconMessage = document.createElement("i");
        iconMessage.classList.add("bi", "bi-chat-left-fill")
        
        const post = document.createElement("div");
        post.classList.add("posts-container");
        post.setAttribute("id", `post-${i}`)
        const idPostContainer = post.getAttribute("id");

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
        

        //Reacciones
        const containerReaction = document.createElement("div");
        containerReaction.classList.add("container-reaction");

        const divContainerThumb = document.createElement("div");
        divContainerThumb.classList.add("div-container-thumb");
        
        
        const divContainerMessage = document.createElement("div");
        divContainerMessage.classList.add("div-container-message");

        
        containerReaction.append(divContainerThumb, divContainerMessage)
        

        const containerComments = document.createElement("div");
        containerComments.classList.add("container-comments");
        
        const containerInput = document.createElement("div");
        containerInput.classList.add("container-input");
        containerInput.appendChild(icon)
        

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
        namePost.style.margin = "0"
        containerInput.append(imageAvatarInput, inputComments);

        post.append(
            postDataUser,
            descriptionPost,
            imageContainerPost,
            containerReaction,
            containerComments,
            containerInput
        );
        
        const comments = await getComments(idPostContainer)
        console.log(comments)
        containerComments.textContent = comments && comments[i] && comments[i].texto
        showingComments(comments.length, containerComments)
        
        const spanLike = document.createElement("span");
        const spanMessage = document.createElement("span");
        spanLike.textContent = `30 likes`
        spanMessage.textContent = `40 Comentarios`

        
        
        divContainerThumb.append(iconThumb, spanLike)
        divContainerMessage.append(iconMessage, spanMessage)
        containerPosts.appendChild(post);

        
        formatDate(datePost, element)
        sendComment(icon,
            containerComments,
            inputComments,
            idPostContainer
        )

    };
    
}

function formatDate(datePost, element) {
    const timestamp = element.fechaCreacion;
    const date = new Date(timestamp.seconds * 1000);
    const fechaFormateada = date.toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    datePost.textContent = fechaFormateada;
}


function showingComments (length, containerComments) {
   if(length > 0) {
    containerComments.style.display = "block"
   }
}


export default Posts;
