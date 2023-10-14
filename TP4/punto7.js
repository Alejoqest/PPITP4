const gestor = new XMLHttpRequest();
const input_nombre = document.querySelector("#name-ani");
const input_edad = document.querySelector("#age-ani");
const input_raza = document.querySelector("#race-ani")
const input_tipo = document.querySelector("#type-ani");
const form = document.querySelector("#punto7form");
const submit_buttton = document.querySelector("#POST_button");

input_nombre.addEventListener("submit", check_validity, true);

input_nombre.addEventListener("input", check_validity, true);

input_edad.addEventListener("submit", check_validity, true);

input_edad.addEventListener("input", check_validity, true);

input_raza.addEventListener("submit", check_validity, true);

input_raza.addEventListener("input", check_validity, true);

input_tipo.addEventListener("submit", check_validity, true);

input_tipo.addEventListener("input", check_validity, true);

submit_buttton.addEventListener("onclick", check_validity, true);

function check_validity(e) {
    switch (e.target) {
        case input_nombre:
            if (input_nombre.validity.valueMissing) {
                input_nombre.setCustomValidity("Por favor el animal necesita un nombre!");
            } else if (input_nombre.validity.tooLong) {
                input_nombre.setCustomValidity("El nombre es demasiado largo! Menos de 25 letras por favor!")
            } else {
                input_nombre.setCustomValidity("");
            }
            break;
        case input_edad:
            if (input_edad.validity.valueMissing) {
                input_edad.setCustomValidity("Por favor ingrese la edad del animal!");
            } else if (input_edad.validity.rangeOverflow) {
                input_nombre.setCustomValidity("El numero es demasiado largo! Menos de 10 cifras por favor!")
            } else {
                input_edad.setCustomValidity("");
            }
            break;
        case input_raza:
            if (input_raza.validity.valueMissing) {
                input_raza.setCustomValidity("Por favor ingrese la raza del animal!");
            } else if (input_raza.validity.tooLong) {
                input_raza.setCustomValidity("El raza es demasiado largo! Menos de 25 letras por favor!")
            } else if (input_raza.validity.valid) {
                input_edad.setCustomValidity("");
            }
            break;
        case input_tipo:
            if (input_tipo.validity.valueMissing) {
                input_tipo.setCustomValidity("Por favor ingrese el tipo de animal!");
            } else if (input_tipo.validity.patternMismatch) {
                input_tipo.setCustomValidity("Su resupuesta no es valida!");
            } else {
                input_tipo.setCustomValidity("");
            }
            break;
        case submit_buttton:
            check_validity(input_nombre);
            check_validity(input_edad);
            check_validity(input_raza);
            check_validity(input_tipo);
            break;
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = "'"+input_nombre.value+"'";
    let age = input_edad.value;
    let race = "'"+input_raza.value+"'";
    let type = "'"+input_tipo.value.toLowerCase()+"'";
    gestor.onload = function () {
        if (this.readyState == 4 && (this.status == 200 || this.status == 201)) {
            console.log("Terminado.");
            console.log(this.readyState+" "+this.status);
            document.getElementById("response-sql-query").innerHTML = 
            "<h1> Conexion " + this.status + "</h1>" +
            "</<p>" + this.responseText + "</p>";
        } else {
            document.getElementById("response-sql-query").innerHTML = 
            "<h1> ERROR "+this.status+" "+this.statusText+"</h1>";
            console.log("Punto7\nError.");
        }
    }
    gestor.open("POST","punto7.php");
    gestor.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    gestor.send("name="+name+"&age="+age+"&race="+race+"&type="+type);
});