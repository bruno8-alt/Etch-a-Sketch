const container = document.querySelector(".container");
const btn = document.querySelector(".button");
btn.addEventListener("click", createGrid);
function createGrid(){
    container.innerHTML = "";
    let size = prompt("Enter Number of squares per side for the new grid");
    if (size < 100) {
        for (let i = 0; i < size * size; i++) {
            let child = document.createElement("div");
            child.classList.add("item");
            container.appendChild(child);
        }
        const itemWidth = 650 / size;
        const items = document.querySelectorAll(".item");
        items.forEach(item => {
            item.style.width = `${itemWidth}px`;
            item.style.height = `${itemWidth}px`;
            item.style.border = "1px solid red";
            item.style.boxSizing = "border-box"; // Fixed typo: should be "border-box"
        });
    }
else{
    alert("Please enter a Number between 1-99");
}}
    
   


     
    
  

