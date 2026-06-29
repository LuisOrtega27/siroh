<?php
// verificar_sesion.php
// header("Content-Type: application/json; charset=UTF-8");
session_start();

// Comprobamos si la variable de sesión existe y no está vacía
if (isset($_SESSION['usuario_id'])) {
    echo json_encode([
        "autenticado" => true,
        "usuario" => $_SESSION['nombre'],
        "rol" => $_SESSION['rol_id'] ?? 3
    ]);
} else {
    echo json_encode([
        "autenticado" => false,
        "message" => "No hay una sesión activa."
    ]);
}