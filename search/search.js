// function to search in text
function myFunction() {
  let input = document.getElementById("myInput");
  let filter = input.value.toUpperCase();
  let container = document.getElementById("container");
  let div = container.getElementsByClassName("card");
  console.log(div);
  for (i = 0; i < div.length; i++) {
    h1 = div[i].getElementsByTagName("h1")[0];
    txtValue = h1.textContent || h1.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      div[i].style.display = "";
    } else {
      div[i].style.display = "none";
    }
  }
}
