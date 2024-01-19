document.addEventListener("DOMContentLoaded", function () {
  var clickableDivs = document.querySelectorAll(".clickable");

  // Loop through each div and attach the onclick event
  clickableDivs.forEach(function (div) {
    div.addEventListener("click", function () {
      console.log(div.classList);
      // Toggle between the 'original' and 'changed' classes
      if (div.classList.contains("image")) {
        div.classList.remove("image");
        div.classList.add("imageclick");
      } else {
        div.classList.remove("imageclick");
        div.classList.add("image");
      }
    });
  });
});
