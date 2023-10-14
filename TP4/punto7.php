<?php

class GestorEjemplo7 {
    private $conn;
    function __construct(String $db_server, String $db_username, String $db_password, String $db_name){
        try {
            $this->conn = mysqli_connect($db_server, $db_username,$db_password,$db_name);
        }
        catch (mysqli_sql_exception)
        {
            echo (mysqli_connect_errno() ." ". mysqli_connect_error());
        }
    }
    function __destruct() {
        mysqli_close($this->conn);
    }
    function Insert($val1, $val2, $val3, $val4) {
        $sql = "INSERT INTO Animal (nombre, edad, raza, tipo) VALUES ({$val1}, {$val2}, {$val3}, {$val4});";
        try {
            mysqli_query($this->conn, $sql);
            echo ("Se logro insertar los valores a la tabla Animal.");
        } catch (mysqli_sql_exception){
            die ("SQL dice: <br>"+$sql+"<br>".mysqli_errno($this->conn)." ".mysqli_error($this->conn));
        }
    }
}
/*
CREATE TABLE `ejemplo7`.
`animal` (`id` INT(100) NOT NULL AUTO_INCREMENT ,
 `nombre` VARCHAR(25) NOT NULL , `edad` INT(10) NOT NULL ,
 `raza` VARCHAR(25) NOT NULL ,
 `tipo` ENUM('mamifero','ave','reptil','anfibio','insecto') NOT NULL , 
 PRIMARY KEY (`id`)) ENGINE = InnoDB; 
 */

$animal = new GestorEjemplo7("localhost","root","","ejemplo7");
$name = $_POST["name"];
$age = $_POST["age"];
$race = $_POST["race"];
$type = $_POST["type"];
$animal->Insert($name, $age, $race, $type);

?>