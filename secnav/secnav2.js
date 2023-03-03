const navigation = document.getElementById("second-nav");
console.log(navigation);
const observer = new IntersectionObserver(
  ([e]) => e.target.classList.toggle("isSticky", e.intersectionRatio < 1),
  { threshold: [1] }
);

observer.observe(navigation);
// function to show menu for Application Tab
let menus = document.getElementById("Application");
let nav = document.getElementById("nav-application");
menus.addEventListener("mouseenter", Show);
menus.addEventListener("mouseleave", Hide);
nav.addEventListener("mouseenter", Show);
nav.addEventListener("mouseleave", Hide);
function Show() {
  nav.classList.add("show");
}
function Hide() {
  nav.classList.remove("show");
}
// function to show menu for Full Stack Tab
let menuFullstack = document.getElementById("Fullstack");
let navFullstack = document.getElementById("nav-Fullstack");
menuFullstack.addEventListener("mouseenter", Show2);
menuFullstack.addEventListener("mouseleave", Hide2);
navFullstack.addEventListener("mouseenter", Show2);
navFullstack.addEventListener("mouseleave", Hide2);
function Show2() {
  navFullstack.classList.add("show");
}
function Hide2() {
  navFullstack.classList.remove("show");
}
