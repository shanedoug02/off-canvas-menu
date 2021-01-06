const hamburgerDivEl = document.querySelector(".hamburger");
const slidingNavEl = document.querySelector(".sliding__nav");
const contentEl = document.querySelector(".content");
const collectionFromHamburgerEl = document.getElementsByTagName("span");

const slide = () => {
    hamburgerDivEl.addEventListener("click", function(){
        slidingNavEl.classList.toggle("slide");
        contentEl.classList.toggle("shift");
        burgerToX();
    })


}

slide();

const burgerToX = ()=> {
    for (let bar of collectionFromHamburgerEl) {
            bar.classList.toggle("change");
        }       
   
}


