let element = document.querySelectorAll(".question");

for (let i = 0; i < element.length; i++) {  
  console.log(element[i].nextElementSibling.className)
  if (element[i].nextElementSibling.className === "answer hide"){
    element[i].addEventListener("click", openOnlyOne);
    element[i].addEventListener("click", openClose); 
     }
      else {
    element[i].addEventListener("click", close); 
  }
  }
function close() {
  this.nextElementSibling.classList.remove("show");
  this.classList.remove("newColor");
  this.firstElementChild.classList.remove("newColor");
  this.firstElementChild.classList.remove("fa-minus-circle");
  }  
function openOnlyOne() {
  element.forEach(question => {
  question.nextElementSibling.classList.remove("show");
  question.classList.remove("newColor");
  question.firstElementChild.classList.remove("fa-minus-circle","newColor")})
   }
function openClose() {
  this.nextElementSibling.classList.add("show");
  this.classList.add("newColor");
  this.firstElementChild.classList.add("newColor","fa-minus-circle");
}

  


  