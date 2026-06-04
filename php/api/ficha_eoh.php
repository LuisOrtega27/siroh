<?php
// Configurar cabeceras para responder en formato JSON
header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: *"); // Permite peticiones desde cualquier frontend
    
$host = '127.0.0.1';
$db   = 'siroh';
$user = 'root';
$pass = '1234';
$charset = 'utf8mb4';


// Configuración de la conexión
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, // Activa el reporte de errores
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,       // Devuelve los datos en arrays asociativos
    PDO::ATTR_EMULATE_PREPARES   => false,                  // Desactiva la emulación para mayor seguridad
];

$METHOD = $_SERVER['REQUEST_METHOD'];
// $METHOD = "POST";

try {
     $pdo = new PDO($dsn, $user, $pass, $options);
     
     // get last cod_n
     switch ($METHOD){
          case "GET":
               $query = "INSERT INTO `data_ficha_eoh` () VALUES ()";
               $pdo->exec($query);
               $reserved_id = $pdo->lastInsertId(); 
               
               http_response_code(200);
               echo json_encode([
                    "status"=> "success",
                    "data"=> $reserved_id 
               ]);
               break;
               
          case "POST":

               $json = file_get_contents('php://input');
               $formData = json_decode($json, true);

               if (json_last_error() !== JSON_ERROR_NONE) {
                    http_response_code(400);
                    echo json_encode(["status"=>"error","message"=>"Invalid JSON: " . json_last_error_msg()]);
                    break;
               }

               if (!isset($formData["cod_n"])) {
                    http_response_code(400);
                    echo json_encode(["status"=>"error","message"=>"Missing cod_n in payload"]);
                    break;
               }

               $ID = $formData["cod_n"];
               unset($formData["cod_n"]);

               if (empty($formData)) {
                    http_response_code(400);
                    echo json_encode(["status"=>"error","message"=>"No fields to update"]);
                    break;
               }

               $setParts = [];
               $params = [];
               foreach ($formData as $key => $value) {
                    $placeholder = ':' . preg_replace('/[^a-zA-Z0-9_]/', '_', $key);
                    $setParts[] = "`$key` = $placeholder";
                    $params[$placeholder] = $value === "" ? null : $value;
               }

               $params[':cod_n'] = $ID;
               $setSql = implode(', ', $setParts);

               $query = "UPDATE `data_ficha_eoh` SET $setSql WHERE `cod_n` = :cod_n AND `modification` IS NULL";
               $stmt = $pdo->prepare($query);
               $stmt->execute($params);

               http_response_code(200);
               echo json_encode([
                    "status"=>"success",
                    "rowsAffected"=> $stmt->rowCount(),
                    "message"=>"base de datos actualizada!"
               ]);
               break;

     }
     


} catch (\PDOException $e) {
     // Si hay un error, se captura aquí sin exponer datos sensibles
     http_response_code(500);
     echo json_encode([
          "status"=> "error",
          "message"=> $e->getMessage() 
     ]);
}
