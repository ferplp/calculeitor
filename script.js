console.log ("Probando 1 2 3");
//* Funcion de suma

function suma(){
const inputNum1 = Number(document.getElementById("num1").value);
const inputNum2 = Number(document.getElementById("num2").value);
const inputResult = document.getElementById("result");
    document.getElementById("result").value = inputNum1+inputNum2;

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
//result = function (a,b){
//    return a+b;

//};
// result(suma(Number(document.getElementByID("num1").value), Number(document.getElementByID("num2".value));
