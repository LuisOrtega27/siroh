"use strict"
class Toast{

    constructor(toastContainer){
        // this.toastContainer = document.getElementById(toastContainer);
        this.toastContainer = this.createToastContainer()
    }

    createToastContainer(){
        const toastContainer = document.createElement("div");
        toastContainer.classList.add("toast-container");
        toastContainer.id = "toast-container";
        document.body.appendChild(toastContainer);
        return toastContainer;
    }

    newToast(context, message){
        const toast = document.createElement("DIV");
        toast.className = `toast ${context}`;
        toast.innerHTML = `
            <div class="icon"></div>
            <p class="message">${message}</p>
        `;

        setTimeout(()=>{
            this.toastContainer.removeChild(toast);
        },3000)

        this.toastContainer.appendChild(toast);

    }
    
}

const toast = new Toast("toast-container");

export default toast;