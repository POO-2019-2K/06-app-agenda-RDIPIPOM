import Table from "./Table.js";
import Contacts from "./Contacts.js";
export default class Main {
    constructor() {
        //localStorage.removeItem('contacts');
        this._table = new Table(document.querySelector('#table'));
        this._contacts = new Contacts();
    }

    activeListenners() {
        document.querySelector('#btnAdd').addEventListener('click', () => {
            if (document.querySelector('#form').checkValidity()) {
                //Create and save contact
                this._contacts.saveContact(this._createObjectContact());
                //Update table
                this._table.update(this._contacts.getContactsSaved());
            } else {
                swal.fire({
                    type: 'warning',
                    title: 'Advertencia',
                    text: 'Complete los datos para poder registrar un nuevo contacto'
                })
            }
        });
    }

    _createObjectContact() {
        let objContact = {
            name: document.querySelector('#name').value,
            phone: document.querySelector('#phone').value,
            address: document.querySelector('#address').value,
            email: document.querySelector('#email').value
        }

        return objContact;
    }
}

let main = new Main();

main.activeListenners();