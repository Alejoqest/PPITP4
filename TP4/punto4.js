const xhr = new XMLHttpRequest();
function myFunction_conn_get(){    
    xhr.onload = function () {
        if (this.readyState == 4 && (this.status == 200 || this.status == 201)) {
            console.log("Terminado.");
            console.log(this.readyState+" "+this.status);
            document.querySelector("#result-conn").innerHTML = 
            "<h1> Conexion " + this.status + "</h1>" +
            "</<p>" + this.responseText + "</p>";
        } else {
            document.querySelector("#result-conn").innerHTML = 
            "<h1> ERROR "+this.status+"</h1>";
            switch (this.status) {
                case 404:
                    document.querySelector("#result-conn").innerHTML += 
                    "<p> La pagina que se busca no existe. <br>" + this.statusText + "<p>"
                    break;
                case 500:
                    document.querySelector("#result-conn").innerHTML +=
                    this.statusText;
                    break;
            }
            console.log("Error.");
        }
    }
    xhr.open("GET", "punto4.php?a=1");
    xhr.send();
    console.log("iniciado...")
}
    
