"use strict"
class Toast{

    constructor(){
        this.toastContainer = this.createToastContainer()
        this.toast = document.createElement("DIV");
    }

    createToastContainer(){
        const toastContainer = document.createElement("div");
        toastContainer.classList.add("toast-container");
        toastContainer.id = "toast-container";
        document.body.appendChild(toastContainer);
        return toastContainer;
    }

    newToast(context, message, fade = true){

        const icon = context === "loading" ? document.createElement("div") : document.createElement("img");

        let src = "";

        switch(context){

            case "success":
                src = "./imgs/icons/[]";
                break;
                
                case "warning":
                src = "./imgs/icons/[]";
                break;
                
                case "error":
                src = "./imgs/icons/[]";
                break;
                
                // case "loading":
                // src = "./imgs/icons/[]";
                // break;
        }

        icon.classList.add("toast-icon");
        
        
        this.toast.className = `toast ${context}`;
        this.toast.innerHTML = `
            <div class="icon"></div>
            <p class="message">${message}</p>
        `;

        // fade == true, the element disapears automaticaly. If false, manipulate te element manualy
        if(fade) setTimeout( () => this.toastContainer.removeChild(toast), 10000);
        
        this.toastContainer.appendChild(this.toast);

    }

    remove(){
        console.log("toast manualy removed");
        this.toast.remove()
    }
    
}

export default Toast;