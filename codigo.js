
//bring elements
const menu=document.getElementById("menu");
const aside=document.getElementById("aside");

//function add class
menu.addEventListener("click",()=>{
  aside.classList.toggle("active");
});