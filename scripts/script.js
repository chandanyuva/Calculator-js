
let firstNum,secoundNum,operator;


let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 + num2;
let multiply = (num1, num2) => num1 + num2;
let divide = (num1, num2) => num1 + num2;

let calculator = document.querySelectorAll("div.calculatorDiv > button");
let displayOld = document.querySelector("#display-old");
let displayCurent = document.querySelector("#display-curent");

calculator.forEach((listItem) => {
    let id = listItem.getAttribute("id");
    let btn = document.getElementById(id);
    btn.addEventListener("mousedown", (e) => {
        console.log(e.target.value);
        populateDisplay(e);
    });
});

let operate=(n1,op,n2)=>{
    switch (op) {
        case '+':
            add(n1,n2)
            break;
        case '-':
            subtract(n1,n2);
            break;
        case '*':
            multiply(n1,n2);
            break;
        case '/':
            divide
            break;
    
        default:
            console.error('operator mis-match');
            break;
    }
}

const populateDisplay=(e)=>{
    if (!(e.target.value==='clear'|| e.target.value==='delete'|| e.target.value==='=')){
        displayCurent.textContent += e.target.value;
        console.log(displayCurent.textContent);
    }
    else if {
        
    }
}