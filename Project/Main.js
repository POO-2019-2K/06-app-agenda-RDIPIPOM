import Table from "./Table.js";
import Contacts from "./Contacts.js";

export default class Main {
    constructor() {
        //localStorage.removeItem('contacts');
        this._contacts = new Contacts();
        this._table = new Table(document.querySelector("#table"), this._contacts);
        //Update table
        this._table.update(this._contacts.getContactsSaved());
    }

    activeListenners() {
        document.querySelector("#btnAdd").addEventListener("click", () => {
            if (document.querySelector("#form").checkValidity()) {
                //Doesn't exist this contact?
                if (!this._contacts.isContactRegistered(document.querySelector("#email").value)) {
                    //Create and save contact
                    this._contacts.saveContact(this._createObjectContact());
                    //Update table
                    this._table.update(this._contacts.getContactsSaved());
                }else{
                    window.swal.fire({
                        type: "warning",
                        title: "Advertencia",
                        text: "Este correo ya ha sido registrado anteriormente, cámbielo para continuar"
                    });
                }
            } else {
                window.swal.fire({
                    type: "warning",
                    title: "Advertencia",
                    text: "Complete los datos para poder registrar un nuevo contacto"
                });
            }
        });

        document.querySelector("#sort").addEventListener("change", () => {
            if(document.querySelector("#sort").value === "tname"){
                this._table.sortByName();
            }else{
                this._table.sortByAge();
            }
        });
    }

    _createObjectContact() {
        let objContact = {
            name: document.querySelector("#name").value,
            age: document.querySelector("#age").value,
            phone: document.querySelector("#phone").value,
            address: document.querySelector("#address").value,
            email: document.querySelector("#email").value
        };

        return objContact;
    }
}

let main = new Main();

main.activeListenners();