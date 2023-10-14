const read_field = document.querySelector("#readonly");
const read_div = document.querySelector("#readonly-div"); 

function myFunction_obtainnumbers(){ 
    number1 = document.querySelector("#op1").value;
    console.log("El primer operando es: "+number1);
    number2 = document.querySelector("#op2").value;
    console.log("El segundo operando es: "+number2);
    return number1, number2;
}
function myFunction_sumar() {
    myFunction_obtainnumbers();
    if (number1 == null || number2 == null || number1 == '' || number2 == '' || typeof number1 === 'undefined' || typeof number2 === 'undefined'){
        read_div.innerHTML = "Algunos de los dos numeros ingresados esta mal definido.";
    } else {
        const suma = Number(number1)+Number(number2);
        read_field.value = suma;
        read_div.innerHTML= "";
    }
}
function myFunction_restar() {
    myFunction_obtainnumbers();
    if (number1 == null || number2 == null || number1 == '' || number2 == '' || typeof number1 === 'undefined' || typeof number2 === 'undefined'){
        read_div.innerHTML= "Algunos de los dos numeros ingresados esta mal definido.";
    } else {
        const resta = Number(number1)+Number(number2);
        read_field.value = resta;
        read_div.innerHTML= "";
    }
}
function myFunction_multiplicar() {
    myFunction_obtainnumbers();
    if (number1 == null || number2 == null || number1 == '' || number2 == '' || typeof number1 === 'undefined' || typeof number2 === 'undefined'){
        read_div.innerHTML= "Algunos de los dos numeros ingresados esta mal definido.";
    } else {
        const multiplicar = Number(number1)*Number(number2);
        read_field.value = multiplicar;
        read_div.innerHTML= "";
    }
}
function myFunction_dividir() {
    myFunction_obtainnumbers();
    if (number1 == null || number2 == null || number1 == '' || number2 == '' || typeof number1 === 'undefined' || typeof number2 === 'undefined'){
        read_div.innerHTML= "Algunos de los dos numeros ingresados esta mal definido.";
    } else {
        const dividir = Number(number1)*Number(number2);
        read_field.value = dividir;
        read_div.innerHTML= "";
    }
}