

const slidingNavEl = document.querySelector(".sliding__nav");
const hamburgerEl = document.querySelector(".hamburger"); 
const contentEl = document.querySelector(".content");
const allElsFromHamburger = document.getElementsByTagName("span");


const toggleNav = () => {
  hamburgerEl.addEventListener("click", function() {
    slidingNavEl.classList.toggle("slide");
    contentEl.classList.toggle("shift");
    animateHamburgerBars();
});
}
toggleNav();

const animateHamburgerBars = () => {
    for (let bar of allElsFromHamburger) {
       bar.classList.toggle("change"); 
    }
}

