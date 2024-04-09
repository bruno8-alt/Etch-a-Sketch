const container = document.querySelector(".container");
const btn = document.querySelector(".button");
btn.addEventListener("click", () =>{
    let size = prompt("Enter Number of squares per side for the new grid");
    if(size < 100){
    for(let i = 0; i < (size*size); i++){
        let child = document.createElement("div");
        child.classList.add("item");
        container.appendChild(child);
    }}
    const itemWidth = (650 / size)-1;
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        item.style.flexBasis = `${itemWidth-1}px`;
    })
})

