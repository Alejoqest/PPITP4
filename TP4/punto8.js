const read_field = document.querySelector("#readonly");
const read_div = document.querySelector("#readonly-div");

const campo1 = document.querySelector("#op1");
const campo2 = document.querySelector("#op2");

const b_suma = document.querySelector("#btn-sumar");
const b_resta = document.querySelector("#btn-restar");
const b_multiplica = document.querySelector("#btn-multiplicar");
const b_divide = document.querySelector("#btn-dividir");

b_suma.addEventListener("click", operation);
b_resta.addEventListener("click", operation);
b_multiplica.addEventListener("click", operation);
b_divide.addEventListener("click", operation);

function operation(e) {
    let val1 = Number(campo1.value);
    let val2 = Number(campo2.value);
    let resultado;
    if (val1 != "" || val2 != "" || val1 != undefined || val2 != undefined || val1 != NaN || val2 != NaN) {
        switch (e.target) {
            case b_suma:
                resultado = val1+val2;
            break;
            case b_resta:
                resultado = val1-val2;
            break;
            case b_multiplica:
                resultado = val1*val2;
            break;
            case b_divide:
                if (val2 != 0) {
                    resultado = val1/val2;
                } else {
                    read_div.innerHTML = "No se pudo realizar la división porque el segundo valor es 0."
                    return false;
                }
            break;
        }
        read_field.value = resultado;
        read_div.innerHTML = "";
    } else {
        read_div.innerHTML = "Algunos de los dos numeros ingresados esta mal definido.";
    }
}
