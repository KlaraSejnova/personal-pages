//function to dropdown the menu 
function myFunction(element){
    if (element.nextElementSibling.style.display == 'none')
    element.nextElementSibling.style.display='';
    else
    element.nextElementSibling.style.display='none'
  }

// change icon plus to minus and viceversa
function changeIcon(x) {
    x.firstElementChild.classList.toggle("fa-minus-circle");
    }