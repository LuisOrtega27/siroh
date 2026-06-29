"use strict"

import Toast from "../components/toast";

async function sighil_login(formObj){

    try{
        const fetchConfig = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formObj)
        }
    
        let result = await fetch("./php/api/sighil_login.php", fetchConfig);
        if(!result.ok) throw new Error(result.statusText);
        
        let data = await result.json();
        return data;
    
    }catch(error){
        const toast = new Toast();
        toast.newToast("error", `<b>error trying to login</b> <br> ${error}`)
    }

}

export default sighil_login