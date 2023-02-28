let frank = document.getElementById("frank");
console.log(frank);
let milos = document.getElementById("milos");
let van = document.getElementById("van");
let sejn = document.getElementById("sejn");

frank.addEventListener("click", show);
milos.addEventListener("click", show2);
function show() {
  van.style.display = "block";
  frank.style.borderTop = "2px solid black";
  milos.style.borderTop = "none";
  sejn.style.display = "none";
}
function show2() {
  van.style.display = "none";
  milos.style.borderTop = "2px solid black";
  frank.style.borderTop = "none";
  sejn.style.display = "block";
}

// history list
window.addEventListener("load", function () {
  [].forEach.call(document.querySelectorAll(".glider"), function (ele) {
    ele.addEventListener("glider-slide-visible", function (event) {
      var glider = Glider(this);
      console.log("Slide Visible %s", event.detail.slide);
    });
    ele.addEventListener("glider-slide-hidden", function (event) {
      console.log("Slide Hidden %s", event.detail.slide);
    });
    ele.addEventListener("glider-refresh", function (event) {
      console.log("Refresh");
    });
    ele.addEventListener("glider-loaded", function (event) {
      console.log("Loaded");
    });
    new Glider(ele, {
      slidesToShow: 1,
      slidesToScroll: 1,
      scrollLock: true,
      draggable: false,
      dots: ele.parentNode.querySelector(".dots"),
      arrows: {
        prev: ele.parentNode.querySelector(".glider-prev"),
        next: ele.parentNode.querySelector(".glider-next"),
      },
      rewind: true,
    });
  });
});
