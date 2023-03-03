// function for navigation to be sticky when user scroll down
window.onscroll = function () {
  myFunction();
};
const stickynav = document.getElementById("stickynav");
const sticky = stickynav.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    stickynav.classList.add("sticky");
  } else {
    stickynav.classList.remove("sticky");
  }
}
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
