

let manu_btn= document.getElementById("manu")
let manu = document.querySelector(".manu")
let close = document.querySelector(".close-btn")

 manu_btn.addEventListener("click", () => {
    manu.style.transform = "translate(0px)";
 }) 
 close.addEventListener("click", () => {
    manu.style.transform = "translate(-100%)";
 })

 window.addEventListener("load" , () => {
   let loading = document.querySelector(".loader");
      loading.style.display = "none" ;

 })

