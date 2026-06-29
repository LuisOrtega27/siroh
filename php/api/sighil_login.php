<?php

include("./conexion.php");
header("Content-Type: application/json; charset=UTF-8");

// 1. Configuración de la base de datos
try {
    $pdo = new PDO("mysql:host=$host;dbname=$db_name;charset=utf8", $username, $password_db);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Error de conexión en el servidor."]);
    exit;
}

// 2. Leer los datos enviados por Fetch (JSON)
$inputJSON = file_get_contents('php://input');
// $inputJSON = '{"login_name":"Informatica","login_pass":"1234"}';

$inputs = json_decode($inputJSON, true);

$userName = $inputs['login_name'] ?? '';
$userPass = $inputs['login_pass'] ?? '';

// Validación básica de campos vacíos
if (empty($userName) || empty($userPass)) {
    http_response_code(400); // Bad Request
    echo json_encode(["success" => false, "message" => "Todos los campos son obligatorios."]);
    exit;
}

// 3. Consultar la base de datos
try {
    // Usamos sentencias preparadas para prevenir Inyección SQL
    $stmt = $pdo->prepare("SELECT id, rol_id, nombre, contrasena FROM usuarios WHERE nombre = :nombre LIMIT 1");
    $stmt->execute(['nombre' => $userName]);
    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

    // 4. Verificar usuario y contraseña
    if(!$usuario){
        http_response_code(200); // Unauthorized
        echo json_encode(["success" => false, "message" => "Usuario no encontrado."]);
    } 
    else if($userPass != $usuario['contrasena']){
        http_response_code(200); // Unauthorized
        echo json_encode(["success" => false, "message" => "Contraseña incorrecta."]);
    }
    else{
        // ¡Login correcto! Aquí iniciarías la sesión si lo deseas:
        session_start();
        $_SESSION['autenticado'] = true;
        $_SESSION['usuario_id'] = $usuario['id'];
        $_SESSION['nombre'] = $usuario['nombre'];
        $_SESSION['rol_id'] = $usuario['rol_id'];
        
        http_response_code(200); // Authorized
        echo json_encode([
            "success" => true,
            "message" => "¡Inicio de sesión exitoso! Bienvenido " . htmlspecialchars($usuario['nombre'])
        ]);

    }

} catch (PDOException $e) {
    http_response_code(500);
    echo $e;
    echo json_encode(["success" => false, "message" => "Error al procesar la solicitud. \n {$e}"]);
}

?>