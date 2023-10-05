let number;
function myFunction_numget() {
    number = document.getElementById("nconfield").value;
    console.log(number);
    if (number < 1 || number == null || number == "" || typeof number === 'undefined') {
        document.getElementById("numconvertionresult").innerHTML= "El numero ingresado es 0 o es negativo."
        +" Por lo tanto no se puede hacer la coversion.";
    } else {
        return number;
    }
}

function myFunction_ConvertKm() {
    myFunction_numget();
    const Km = number * 1.60934;
    document.getElementById("numconvertionresult").innerHTML= "La conversion en Kilometros de "+number+" Millas es = "+ Km + " Km.";
    
}
function myFunction_ConvertC() {
    myFunction_numget();
    const C = (number - 32) * 5/9;
    document.getElementById("numconvertionresult").innerHTML= "La conversion en Celsius de "+number+" Fahrenheit es = "+ C + "°C.";
}
function myFunction_ConvertKg() {
    myFunction_numget();
    const Kg = number / 35.274;
    document.getElementById("numconvertionresult").innerHTML= "La conversion en Kilogramos de "+number+" Onza es = "+ Kg + " Kg.";
}