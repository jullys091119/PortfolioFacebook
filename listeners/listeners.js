import { addComments} from "../queriesFirebase.js";

export function carruselListeners(btn, container, direction, itemWidth) {
  btn.addEventListener("click", (e) => {
    container.scrollLeft += itemWidth * direction
  })
}

export function sendComment(
  iconSend,
  containerComments,
  inputComments,
  idPostComments
) {
  iconSend.addEventListener("click", (e) => {
    containerComments.style.display = "block";
    addComments(inputComments.value, idPostComments);
  })
}


