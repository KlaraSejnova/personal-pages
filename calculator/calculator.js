let number = document.getElementsByTagName("button");
let display = document.getElementById("id_display");
let equation = [];

for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click",showOnDisplay);
}

function showOnDisplay(){
    let txt = this.innerHTML;
    if (this.innerHTML === '='){
        display.value = eval(equation.join(""));
        equation = [];
        return
    }
    equation.push(txt);
    display.value = equation.join("");
}