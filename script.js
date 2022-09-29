console.log ("Probando 1 2 3");

//* Funcion de suma en flecha
const readInput =(id)=>Number(document.getElementById(id).value);



function suma(){
     readInput("num1") + readInput("num2");
    
const inputResult = document.getElementById("result");
    document.getElementById("result").value = readInput("num1") + readInput("num2")

} 

//* Función resta

function resta(){
    const inputNum1 = Number(document.getElementById("num1").value);
    const inputNum2 = Number(document.getElementById("num2").value);
    const inputResult = document.getElementById("result");
        document.getElementById("result").value = inputNum1 - inputNum2;
}

//*Función multiplicacion

function multiplicacion(){
    const inputNum1 = Number(document.getElementById("num1").value);
    const inputNum2 = Number(document.getElementById("num2").value);
    const inputResult = document.getElementById("result");
        document.getElementById("result").value = inputNum1*inputNum2;
}
//*Función division
 function division(){
    const inputNum1 = Number(document.getElementById("num1").value);
    const inputNum2 = Number(document.getElementById("num2").value);
    const inputResult = document.getElementById("result");
        document.getElementById("result").value = inputNum1/inputNum2;

 }

 //* Division arrow*
//let suma = (a,b) => a+b;
//};
// suma(Number(document.getElementByID("num1").value), Number(document.getElementByID("num2".value));
