"use strict"

import Toast from "../components/toast"

let toast = new Toast();

const form = document.getElementById("sighil-login");


if (!form) {
    
    console.warn('Formulario #sighil-login no encontrado en el DOM');
    
} else {
    
    form.addEventListener("submit", async (event)=>{
        event.preventDefault();

        toast.newToast("loading", "Trying to login!", false);
        
        try {
            

            const formData = new FormData(event.target);
            const formObj = Object.fromEntries(formData);

            console.log('FormData entries:');
            console.log(formObj);

            
            setTimeout(()=> toast.remove(), 10000)

        } catch (err) {
            console.error('Error procesando el envío del formulario:', err);
        }
        
    })

}