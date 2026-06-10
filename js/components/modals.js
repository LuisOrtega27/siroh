'use strict'

class Modal{
    constructor({id, title, content}){
        this.id = id;
        this.title = title;
        this.content = content;
        this.dialog = this.createModal();
    }

    createModal(){
        const dialog = document.createElement("dialog");
        dialog.classList.add("modal");
        dialog.id = this.id;

        dialog.innerHTML = 
        `
            <form action="#"  class="modal-form">

                <div class="modal-constrols-container">
                    <input type="button" class="modal-close-btn" value="X">
                </div>

                <h2 class="modal-title">${this.title}</h2>
                
                <div class="modal-body">${this.content}</div>
                
            </form>
        `;

        dialog.querySelector(".modal-close-btn").addEventListener("click",()=> this.close() );

        document.body.appendChild(dialog);

        return dialog;
    }

    open(){
        console.log("Modal Opened");
        this.dialog.showModal();
    }

    close(){
        console.log("Modal Closed");
        this.dialog.close();
    }
}


const modalMap = new Modal({
    id: "modal-map",
    title: "Integracion con GoogleMaps",
    content: `
        <div class="modal-map" id="map"></div>
        
        <div class="map_searchBlock">
            <input type="text" id="place-autocomplete" class="map_input">
            <gmpx-place-autocomplete id="place-autocomplete" ></gmpx-place-autocomplete>
            <input id="place-autocomplete" type="text" placeholder="Buscar dirección...">
        <!-- 
            -->
        </div>
    `
});

const modalSearch = new Modal({
    id: "modal-search", 
    title: "Buscar Ficha", 
    content: `
        <input type="number" id="modal-search">
        <input type="submit" value="Buscar">
    `
});


export {modalMap, modalSearch};