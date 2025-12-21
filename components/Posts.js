// posts.js
import { getProjects, getPerfilImages, getComments } from "../queriesFirebase.js";
import { sendComment } from "../listeners/listeners.js";

export default async function Posts() {
    const containerPosts = document.querySelector(".aside-right");
    const data = await getProjects();
    const avatarURL = (await getPerfilImages()).imagePerfil;

    for (const [i, element] of data.entries()) {
        const { post, inputComments, containerComments, datePostMain } = createPost(element, i, avatarURL);
        containerPosts.appendChild(post);

        const comments = await getComments(post.id);
        renderComments(comments, containerComments, avatarURL);

        sendComment(containerComments, inputComments, post.id);
        formatDate(datePostMain, element);
    }
}

// -----------------------------
// Helpers
// -----------------------------
function createPost(element, i, avatarURL) {
    const post = document.createElement("div");
    post.className = "posts-container";
    post.id = `post-${i}`;

    // Header
    const { postDataUser, datePostMain } = createPostHeader(avatarURL);

    // Description
    const descriptionPost = document.createElement("p");
    descriptionPost.textContent = element.descripcion;
    descriptionPost.className = "description-post";

    // Image
    const imageContainerPost = document.createElement("div");
    imageContainerPost.className = "image-container-posts";
    const imgPost = document.createElement("img");
    imgPost.src = element.image;
    imgPost.className = "img-post";
    imageContainerPost.appendChild(imgPost);

    // Reactions
    const containerReaction = document.createElement("div");
    containerReaction.className = "container-reaction";
    createReactionBar(containerReaction);

    // Comments container
    const containerComments = document.createElement("div");
    containerComments.className = "container-comments";

    // Input
    const containerInput = document.createElement("div");
    containerInput.className = "container-input";
    createSendIcon(containerInput, i);

    const imageAvatarInput = document.createElement("img");
    imageAvatarInput.src = avatarURL;
    imageAvatarInput.className = "image-avatar";

    const inputComments = document.createElement("input");
    inputComments.type = "text";
    inputComments.placeholder = "Escribe un comentario";
    inputComments.className = "input-comment";

    containerInput.append(imageAvatarInput, inputComments);

    // Append all
    post.append(postDataUser, descriptionPost, imageContainerPost, containerReaction, containerComments, containerInput);

    return { post, inputComments, containerComments, datePostMain };
}

function createPostHeader(avatarURL) {
    const postDataUser = document.createElement("div");
    postDataUser.className = "post-data-user-header";

    const containerAvatar = document.createElement("div");
    containerAvatar.className = "container-avatar-posts";

    const imageAvatar = document.createElement("img");
    imageAvatar.src = avatarURL;
    imageAvatar.className = "image-avatar";

    const containerDate = document.createElement("div");
    containerDate.className = "container-date";

    const namePost = document.createElement("p");
    namePost.textContent = "Julian Ontiveros";
    namePost.className = "name-post";

    const datePostMain = document.createElement("p");
    datePostMain.className = "date-post-main";

    containerDate.append(namePost, datePostMain);
    containerAvatar.append(imageAvatar, containerDate);
    postDataUser.appendChild(containerAvatar);

    return { postDataUser, datePostMain };
}

function createSendIcon(containerInput, i) {
    const icon = document.createElement("i");
    icon.className = `bi bi-send icon-send-${i}`;
    containerInput.appendChild(icon);
}

function createReactionBar(containerReaction) {
    const iconThumb = document.createElement("i");
    iconThumb.className = "bi bi-hand-thumbs-up-fill icon-color";

    const iconMessage = document.createElement("i");
    iconMessage.className = "bi bi-chat-left-fill icon-color";

    const divContainerThumb = document.createElement("div");
    divContainerThumb.className = "div-container-thumb";
    const spanLike = document.createElement("span");
    spanLike.textContent = "30 likes";
    divContainerThumb.append(iconThumb, spanLike);

    const divContainerMessage = document.createElement("div");
    divContainerMessage.className = "div-container-message";
    const spanMessage = document.createElement("span");
    spanMessage.textContent = "40 Comentarios";
    divContainerMessage.append(iconMessage, spanMessage);

    containerReaction.append(divContainerThumb, divContainerMessage);
}

function renderComments(comments, containerComments, avatarURL) {
    containerComments.innerHTML = "";
    comments.forEach(element => {
        const commentContainer = document.createElement("div");
        commentContainer.className = "comment-container";

        const avatarDiv = document.createElement("div");
        avatarDiv.className = "avatar-comments";
        const imgAvatar = document.createElement("img");
        imgAvatar.src = avatarURL;
        imgAvatar.className = "img-avatar";
        avatarDiv.appendChild(imgAvatar);

        const textContainer = document.createElement("div");
        textContainer.className = "container-text-post";
        const textPost = document.createElement("p");
        textPost.textContent = element.texto;
        const datePost = document.createElement("p");
        datePost.className = "date-post";

        textContainer.append(textPost, datePost);
        commentContainer.append(avatarDiv, textContainer);
        containerComments.appendChild(commentContainer);

        showingComments(comments.length > 0, containerComments);
        formatDateComments(datePost, element);
    });
}

function formatDate(datePost, element) {
    const timestamp = element.fechaCreacion;
    datePost.textContent = new Date(timestamp.seconds * 1000).toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

function formatDateComments(datePost, element) {
    const timestamp = element.fecha;
    datePost.textContent = new Date(timestamp.seconds * 1000).toLocaleDateString("es-ES", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

function showingComments(show, containerComments) {
    containerComments.style.display = show ? "block" : "none";
}
