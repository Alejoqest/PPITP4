<?php
$q = $_GET ["a"];
$s = $_GET["b"];

$space= "";

switch ($s) {
    case "PUNTO4":
        if (strlen($q)<10) {
            $space = "Conectado a php normalmente.";
            http_response_code(200);
        } else {
            http_response_code(400);
        }
    break;
    case "POST":
        if (strlen($q)<10) {
            if (preg_match('[<|>]', $q)) {
                http_response_code(500);
            } else {
                $space = "Conectado a php. Se ingreso ".$q.".";
                http_response_code(201);
            }
        } else {
            http_response_code(400);
        }
    break;
    case "404":
        http_response_code(404);
    break;
    default:
        http_response_code(403);
    break;
}

echo $space;
?>