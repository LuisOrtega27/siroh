"use strict"

const appState = {
    isLogged: false,
    userInfo: null
}

async function verificarSesion(){

    try{
        const result = await fetch("./php/api/verificar_sesion.php");
        const datos = await result.json();

        if(datos.autenticado){
            appState.isLogged = true;
            appState.userInfo = {
                nombre: datos.nombre,
                rol_id: datos.id_rol 
            }
            console.log(appState)
            // Modificar vista 
        }
        else{
            appState.isLogged = false;
            appState.userInfo = null;
            
            location.href("./base.html")
            
            // Modificar vista 

        }

    }catch (error){
        console.log(error)
    }
    
}
document.addEventListener("DOMContentLoaded", verificarSesion);


async function cerrarSesion() {
    try {
        // Hacemos la petición al endpoint de PHP
        const respuesta = await fetch('./php/api/cerrar_sesion.php');
        const datos = await respuesta.json();

        if (respuesta.ok && datos.success) {
            // 1. Limpiamos el estado global de la SPA
            appState.usuarioLogueado = false;
            appState.datosUsuario = null;

            // 2. Redirigimos visualmente al usuario al login
            alert(datos.message); // O una notificación más estética
            window.location.replace("http://localhost/SIROH/index.html")

        } else {
            console.error("No se pudo cerrar la sesión en el servidor.");
        }
    } catch (error) {
        console.error("Error de red al intentar cerrar sesión:", error);
    }
}

// DOMContentLoaded