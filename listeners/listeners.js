
export function carruselListeners (btn,container,direction,itemWidth) {
  btn.addEventListener("click", (e)=> {
    container.scrollLeft += itemWidth * direction
  })
}


