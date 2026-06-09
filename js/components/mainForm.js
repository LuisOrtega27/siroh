"use strict";

import { setRegistry } from "../services/ficha_eoh.js"
import mainNav from "./mainNav.js";
import toast from "./toast.js";

class MainForm{


    constructor( form ){
        this.mainForm = document.getElementById(form);

        this.handleSubmit()

        document.querySelector("#map-btn").addEventListener("click", this.handleMapBtn)

        // this.disableRequired();

    }

    async handleSubmit(){
        this.mainForm.addEventListener("submit", async(event)=>{
            event.preventDefault()
            const formData = new FormData(event.target)
            const dataObj = Object.fromEntries(formData)

            console.log(dataObj["cod_n"])

            if(dataObj["cod_n"] === "") return toast.newToast("error", "Numero de Ficha no puede estar vacio"); 

            const result = await setRegistry(dataObj);

            if( await result?.status === "success"){
                console.log(result)
                toast.newToast("success", "Nuevo registro agregado!");
                this.resetForm();
            }else{
                toast.newToast("error", "Error al agregar registro!");
            }
        })
    }

    handleMapBtn(){
        toast.newToast("error", "Funcionalidad No Implementada Todabia :p")
    }

    set_Id(id){
        const idInput = this.mainForm.querySelector("#cod_n")
        idInput.value = String(id).padStart(6, "0")
    }

    fillForm(formData){

    }

    resetForm(){
        this.mainForm.reset()
        window.scrollTo({
            top: 0,
            left: 0,  
            behavior: 'smooth'
        });
        mainNav.enableBtns()
    }

    disableRequired(){
        const inputList = this.mainForm.querySelectorAll("input")
        inputList.forEach(input => input.removeAttribute("required"))
    }
}



const form = new MainForm("form-siroh");

export default form;