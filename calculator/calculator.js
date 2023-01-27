let number = document.getElementsByTagName("button");
let display = document.getElementById("id_display");
for (var i = 0; i < number.length; i++) {

    number[i].addEventListener("click",change);
}
let equation = [];
function change(){
    let txt = this.innerHTML;
    
    console.log(equation.join(""));
    if (this.innerHTML === '='){
        display.value = eval(equation.join(""));
        equation = [];
        return
    }
    equation.push(txt);
    display.value = equation.join("");
}