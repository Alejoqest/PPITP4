const xhr = new XMLHttpRequest();

const i_conn = document.querySelector("#conn-input");
const k_conn = document.querySelector("#conn-key");
const b_conn = document.querySelector("#conn-punto4");
const div_conn = document.querySelector("#result-conn");

b_conn.addEventListener("click", myFunction_conn_get);

function myFunction_conn_get(){    
    let v_conn = i_conn.value;
    let p_conn = k_conn.value;
    xhr.onload = function () {
        if (this.readyState == 4 && (this.status == 200 || this.status == 201)) {
            console.log("Terminado.");
            div_conn.innerHTML = 
            "<h1> Conexion " + this.status + "</h1>" +
            "</<p>" + this.responseText + "</p>";
        } else {
            div_conn.innerHTML = 
            "<h1>"+this.status+" "+this.statusText+"</h1>";
            switch (this.status) {
                case 400:
                    div_conn.innerHTML += 
                    "<p> Lo enviado no cumple las reglas. <br> </p>"
                    break;
                case 403:
                    div_conn.innerHTML += 
                    "<p> No tienes permiso para hacer esta acción.<br> </p>"
                case 404:
                    div_conn.innerHTML += 
                    "<p> La pagina que se busca no existe. <br></p>"
                    break;
                case 500:
                    document.querySelector("#result-conn").innerHTML += 
                    "<p> No se puede procesar lo enviando.<br></p>";
                    break;
            }
            console.log("Error.");
        }
    }
    if (p_conn == "" || v_conn == "") {
        xhr.open("GET", "punto4.php?b=404");
        xhr.send();
        console.log("iniciado...")
    } else {
        p_conn = p_conn.toUpperCase();
        console.log(p_conn);
        xhr.open("GET", "punto4.php?a="+v_conn+"&b="+p_conn);
        xhr.send();
        console.log("iniciado...")
    }
}
    
