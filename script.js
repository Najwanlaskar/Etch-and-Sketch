//put the grind squares inside a container div (HTML)
const Container=document.querySelector(".container");
const btn=document.querySelector(".Display");
const colbtn=document.querySelector(".color");


let containerSize=520;
let size=16;
function CreateColumn(size){
        Container.innerHTML = "";
        for(i=0;i<size*size;i++){                                                    
        const square = document.createElement("div");
        square.classList.add("square")
        square.style.border = "1px solid";
          square.style.background="white"
        square.style.height= square.style.width= `${(containerSize/size)-2}px`;
        Container.appendChild(square);

{
} }
}
CreateColumn(size)
