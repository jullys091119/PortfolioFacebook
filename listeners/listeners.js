import { addComments, addLike, removeLike, getLikes } from "../queriesFirebase.js";

// Genera un userId único por dispositivo si no existe
let userId = localStorage.getItem("userId");
if (!userId) {
    userId = crypto.randomUUID();
    localStorage.setItem("userId", userId);
}

// -----------------------------
// Enviar comentario
// -----------------------------
export function sendComment(iconSend, containerComments, inputComments, postId) {
    iconSend.addEventListener("click", async () => {
        const texto = inputComments.value.trim();
        if (!texto) return;

        await addComments(texto, postId);
        inputComments.value = "";
        containerComments.style.display = "block";
    });
}

// -----------------------------
// Likes
// -----------------------------
export async function likePost(iconThumb, spanLike, postId) {
    // Inicializa likes
    const likes = await getLikes(postId);
    let liked = likes.includes(userId);
    let count = likes.length;

    spanLike.textContent = `${count} likes`;
    iconThumb.style.color = liked ? "#1877F2" : "";

    iconThumb.addEventListener("click", async () => {
        if (!liked) {
            await addLike(postId, userId);
            count++;
            spanLike.textContent = `${count} likes`;
            iconThumb.style.color = "#1877F2";
            liked = true;
        } else {
            await removeLike(postId, userId);
            count--;
            spanLike.textContent = `${count} likes`;
            iconThumb.style.color = "";
            liked = false;
        }
    });
}

// -----------------------------
// Carrusel
// -----------------------------
export function carruselListeners(btn, container, direction, itemWidth) {
    btn.addEventListener("click", () => {
        container.scrollLeft += itemWidth * direction;
    });
}
