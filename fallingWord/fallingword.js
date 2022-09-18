// const word = document.getElementsByClassName("word")[0].textContent;
// console.log(word);
// function validateForm() {
//   var x = document.forms["myForm"]["fname"].value;
//   if (x == word) {
//     alert("Correct");
//     return false;
//   } else {
//     alert("Not correct. Try again");
//   }
// }

var words=[
  'hello',
  'darknes',
  'my',
  'old',
  'friend'
]

function addFallingWord(word) {
  var element = document.getElementById("words")
  var node = document.createElement("div")
  node.append(word)
  node.classList.add("word")
  element.appendChild(node)
}



function addWords(words) {
  var wordToInsert = words.shift()
  addFallingWord(wordToInsert)
  if (words.length != 0) { setTimeout(addWords, 1500, words) }
}

function checkState() {
  var words = document.getElementsByClassName("word");
  var typed = document.getElementById("typed");
  var failed = false;
  var longestWord = 0;

  if (words.length == 0) {
    {alert("You won...")}
  }

  for (var i = 0; i < words.length; i++) {
    var element = words[i];
    longestWord = (longestWord < element.textContent.length) ? element.textContent.length : longestWord
    if (element.getBoundingClientRect().y > 500) {
      failed = true;
    } 
    if (element.textContent == typed.value.slice(- element.textContent.length)) {
      element.remove()
    }
  }

  typed.value = typed.value.slice(-longestWord)
  

  if (failed) {alert("Failed...")}
  else {setTimeout(checkState, 25);}
}

document.addEventListener("keydown", (event) => {
    console.log(event.key);
    var typed = document.getElementById("typed")
    typed.value = typed.value.concat(event.key)

  })

addWords(words);
checkState();