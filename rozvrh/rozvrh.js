const image = document.getElementsByTagName("img");
console.log(image);
for (var i = 0; i < image.length; i++) {
  image[i].onclick = changeOpacity;
}

function changeOpacity(e) {
  e.target.style.opacity = "1";
}
