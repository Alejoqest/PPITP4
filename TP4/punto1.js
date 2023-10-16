//Selector.
const millasfield = document.querySelector("#millasconfield");
const kmfield = document.querySelector("#kmconfield");
const farehfield = document.querySelector("#fahconfield");
const celsiusfield = document.querySelector("#celconfield");
const onfield = document.querySelector("#onconfield");
const kgfield = document.querySelector("#kgconfield");
//Establecer los eventos en input de los campos.
millasfield.addEventListener("input", myFunction_convert);
kmfield.addEventListener("input", myFunction_convert);
farehfield.addEventListener("input", myFunction_convert);
celsiusfield.addEventListener("input", myFunction_convert);
onfield.addEventListener("input", myFunction_convert);
kgfield.addEventListener("input", myFunction_convert);
/*
    Funcion que hace que segun el elemento que la llame, entrege la conversion en otro campo.
*/
function myFunction_convert(e) {
    switch(e.target) {
        case millasfield:
            let km = millasfield.value *  1.60934;
            kmfield.value = km;
        break;
        case kmfield:
            let millas = kmfield.value / 1.60934;
            millasfield.value = millas;
        break;
        case farehfield:
            let C = (farehfield.value -32) * 5/9;
            celsiusfield.value = C;
        break;
        case celsiusfield:
            let fah = (celsiusfield.value * 9/5) +32;
            farehfield.value = fah;
        break;
        case onfield:
            let kg = onfield.value / 35.274;
            kgfield.value = kg;
        break;
        case kgfield:
            let on = kgfield.value * 35.274;
            onfield.value = on;
        break;
    }
}