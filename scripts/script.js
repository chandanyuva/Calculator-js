let add =(num1,num2)=> num1+num2;
let subtract =(num1,num2)=> num1+num2;
let multply =(num1,num2)=> num1+num2;
let divide =(num1,num2)=> num1+num2;

let calculator=document.querySelectorAll('div.calculatorDiv > button');
let displayOld = document.querySelector('#display-old')
let displayCurent = document.querySelector('#display-curent')
calculator.forEach(listItem =>{
    let id=listItem.getAttribute('id');
    let btn = document.getElementById(id);
    btn.addEventListener('mousedown',(e)=>{
        console.log(e.target.value);
        // displayOld.textContent+=e.target.value;
        displayCurent.textContent+=e.target.value;
    })
})