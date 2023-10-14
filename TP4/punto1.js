function myFunction_convert() {
    switch (event.target) {
        case document.querySelector("#millasconfield"):
            let millas = document.querySelector("#millasconfield").value *  1.60934;
            document.querySelector("#kmconfield").value = millas;
            break;
        case document.querySelector("#kmconfield"):
            let km = document.querySelector("#kmconfield").value / 1.60934;
            document.querySelector("#millasconfield").value = km;
            break;
        case document.querySelector("#fahconfield"):
            let C = (document.querySelector("#fahconfield").value -32) * 5/9;
            document.querySelector("#celconfield").value = C;
            break;
        case document.querySelector("#celconfield"):
            let fah = (document.querySelector("#celconfield").value * 9/5) +32;
            document.querySelector("#fahconfield").value = fah;
            break;
        case document.querySelector("#onconfield"):
            let kg = document.querySelector("#onconfield").value / 35.274;
            document.querySelector("#kgconfield").value = kg;
            break;
        case document.querySelector("#kgconfield"):
            let on = document.querySelector("#kgconfield").value * 35.274;
            document.querySelector("#onconfield").value = on;
            break;
        }
}