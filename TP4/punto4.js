const xhr = new XMLHttpRequest();
function myFunction_conn_get(){    
    
    xhr.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Terminado.");
            document.getElementById("result-conn").innerHTML = "<p>"+this.responseText+"</p>";
        } else {
            document.getElementById("result-conn").innerHTML = "<p> Error en la conexion: "+xhr.readyState +" "+ xhr.status +"</p>";
            console.log(typeof(xhr.readyState)+" "+typeof(xhr.status));
            console.log("Error.");
        }
    }
    xhr.open("GET", "punto4.php?a=1");
    xhr.send();
    console.log("iniciado...")
}
    
