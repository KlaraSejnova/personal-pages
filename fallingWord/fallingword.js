const word = document.getElementsByClassName("word")[0].textContent;
console.log(word);
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == word) {
    alert("Correct");
    return false;
  } else {
    alert("Not correct. Try again");
  }
}
