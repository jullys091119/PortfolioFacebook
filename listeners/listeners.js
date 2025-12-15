
export function carruselListeners (btn,container,direction,itemWidth) {
    console.log(itemWidth)
  btn.addEventListener("click", (e)=> {
    container.scrollLeft += itemWidth * direction
  })
}
