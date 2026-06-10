"use strict"

import  {reserveID} from "../services/ficha_eoh.js"

import form from "./mainForm.js"
import toast from "./toast.js"
import { modalSearch } from "./modals.js"

class MainNav{
    constructor(nav, nuevo, ver){
        this.main_nav = document.getElementById(nav)
        this.link_nuevo = document.getElementById(nuevo)
        this.link_ver = document.getElementById(ver)

        if (this.link_nuevo) {
            this.link_nuevo.addEventListener("click", (e)=>{
                if(e.target === this.link_nuevo){
                    this.disableBtns()

                    reserveID().then(ID =>{

                        // alert("Nuevo ID reservado")
                        toast.newToast("success", `ID: ${ID} reservado!`)
                        form.set_Id(ID)
                        // console.log(ID)
                    })

                }
            })
        }else console.log("El elemento link_nuevo no existe")

        if(this.link_nuevo){
            this.link_ver.addEventListener("click",()=>{
                toast.newToast("warning", "Funcionalidad en progreso")
                modalSearch.open()
            })
        }else console.log("El elemento link_ver no existe")
    }

    disableBtns(){
        if (this.link_nuevo){
            this.link_nuevo.classList.add("input-disabled");
            this.link_nuevo.setAttribute("tabIndex", "-1");
        } 
        if (this.link_ver){
            this.link_ver.classList.add("input-disabled");
            this.link_nuevo.setAttribute("tabIndex", "-1");
        }
    }
    enableBtns(){
        if (this.link_nuevo){
            this.link_nuevo.classList.remove("input-disabled");
            this.link_nuevo.removeAttribute("tabIndex");
        } 
        if (this.link_ver){
            this.link_ver.classList.remove("input-disabled");
            this.link_nuevo.removeAttribute("tabIndex");
        } 
    }

}

const mainNav = new MainNav("main-menu" ,"sub-link-nuevo", "sub-link-ver")

export default mainNav;