"use strict"

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
    
        let result = await fetch("./php/api/sighil.php", fetchConfig);
        let data = await result.json();

        console.log(data)
    
    
    }catch(error){
        console.log("error trying to login")
        console.log(error)
    }

}

export default sighil_login