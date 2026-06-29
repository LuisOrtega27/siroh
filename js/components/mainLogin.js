"use strict"

import sighil_login from "../services/sighil_login";
import Toast from "../components/toast"


const form = document.getElementById("sighil-login");


if (!form) {
    
    console.warn('Formulario #sighil-login no encontrado en el DOM');
    
} else {
    
    form.addEventListener("submit", async (event)=>{
        event.preventDefault();

        let loginToast = new Toast();
        loginToast.newToast("loading", "Trying to login!", false);
        
        try {

            const formData = new FormData(event.target);
            const formObj = Object.fromEntries(formData);

            let result = await sighil_login(formObj)

            const resultToast = new Toast()
            if(!result.success) resultToast.newToast("error", result.message)
            else{
                resultToast.newToast("success", result.message)
            }   
            
            loginToast.remove();

        } catch (error) {
            console.error('Error procesando el envío del formulario:', error);
        }
        
    })

}