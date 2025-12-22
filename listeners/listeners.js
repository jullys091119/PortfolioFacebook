import { addComments, addLike, removeLike, getLikes } from "../queriesFirebase.js";

// Enviar comentario
export function sendComment(iconSend, containerComments, inputComments, postId) {
  iconSend.addEventListener("click", async () => {
    const texto = inputComments.value.trim();
    if (!texto) return;

    await addComments(texto, postId);
    inputComments.value = "";
    containerComments.style.display = "block";
  });
}

// Likes
export async function likePost(iconThumb, spanLike, postId, userId = "Anon") {
  let liked = false;

  // Al cargar, revisa si el usuario ya dio like
  const likes = await getLikes(postId);
  const count = likes.length;
  spanLike.textContent = `${count} likes`;
  if (likes.includes(userId)) {
    liked = true;
    iconThumb.style.color = "#1877F2";
  }

  iconThumb.addEventListener("click", async () => {
    if (!liked) {
      await addLike(postId, userId);
      spanLike.textContent = `${parseInt(spanLike.textContent) + 1} likes`;
      iconThumb.style.color = "#1877F2";
      liked = true;
    } else {
      await removeLike(postId, userId);
      spanLike.textContent = `${parseInt(spanLike.textContent) - 1} likes`;
      iconThumb.style.color = "";
      liked = false;
    }
  });
}

// Carrusel (opcional)
export function carruselListeners(btn, container, direction, itemWidth) {
  btn.addEventListener("click", () => {
    container.scrollLeft += itemWidth * direction;
  });
}
