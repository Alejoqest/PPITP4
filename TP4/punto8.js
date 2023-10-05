function myFunction_obtainnumbers(){ 
    number1 = document.getElementById("op1").value;
    console.log("El primer operando es: "+number1);
    number2 = document.getElementById("op2").value;
    console.log("El segundo operando es: "+number2);
    return number1, number2;
}
function myFunction_sumar() {
    myFunction_obtainnumbers();
    if (number1 == null || number2 == null || number1 == '' || number2 == '' || typeof number1 === 'undefined' || typeof number2 === 'undefined'){
        document.getElementById("readonly-div").innerHTML= "Algunos de los numeros ingresadas esta mal definido.";
    } else {
        const suma = Number(number1)+Number(number2);
        document.getElementById("readonly").value = suma;
        document.getElementById("readonly-div").innerHTML= "";
    }
}
function myFunction_restar() {
    myFunction_obtainnumbers();
    if (number1 == null || number2 == null || number1 == '' || number2 == '' || typeof number1 === 'undefined' || typeof number2 === 'undefined'){
        document.getElementById("readonly-div").innerHTML= "Algunos de los numeros ingresadas esta mal definido.";
    } else {
        const resta = Number(number1)+Number(number2);
        document.getElementById("readonly").value = resta;
        document.getElementById("readonly-div").innerHTML= "";
    }
}
function myFunction_multiplicar() {
    myFunction_obtainnumbers();
    if (number1 == null || number2 == null || number1 == '' || number2 == '' || typeof number1 === 'undefined' || typeof number2 === 'undefined'){
        document.getElementById("readonly-div").innerHTML= "Algunos de los numeros ingresadas esta mal definido.";
    } else {
        const multiplicar = Number(number1)*Number(number2);
        document.getElementById("readonly").value = multiplicar;
        document.getElementById("readonly-div").innerHTML= "";
    }
}
function myFunction_dividir() {
    myFunction_obtainnumbers();
    if (number1 == null || number2 == null || number1 == '' || number2 == '' || typeof number1 === 'undefined' || typeof number2 === 'undefined'){
        document.getElementById("readonly-div").innerHTML= "Algunos de los numeros ingresadas esta mal definido.";
    } else {
        const dividir = Number(number1)*Number(number2);
        document.getElementById("readonly").value = dividir;
        document.getElementById("readonly-div").innerHTML= "";
    }
}