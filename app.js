import Animate from "./lib/animate.js";
let animate = new Animate();

animate.animateLineBar();
animate.animateOnScroll();

let nav = document.querySelectorAll("#nav li a");
let navbar = document.querySelector(".navbar");
let toTop = document.querySelector(".to-top");

nav.forEach((e) => {
  e.addEventListener("click", function () {
    nav.forEach((el) => el.classList.remove("active"));
    this.classList.add("active");
  });
});

toTop.addEventListener("click", function () {
  // window.pageYOffset(0);
  window.scrollTo(0, 0);
});
