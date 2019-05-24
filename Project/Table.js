import Contact from "./Contact.js";

export default class Table {
    constructor(table, contacts) {
        this._table = table;
        this._contacts = contacts;
    }

    update(contacts) {
        //Remove all rows
        this._RemoveRows();
        //Add all contacts
        contacts.forEach((objContact) => {
            this._addToTable(objContact);
        });
    }

    _RemoveRows() {
        for (let i = this._table.rows.length - 1; i > 2; i--) {
            this._table.deleteRow(i);
        }
    }

    _addToTable(objContact) {
        //Create object with class
        objContact = new Contact(objContact);
        //Show in table
        let row = this._table.insertRow(-1);
        let cell = row.insertCell(0);
        cell.innerHTML = objContact.name;
        cell = row.insertCell(1);
        cell.innerHTML = objContact.age;
        cell = row.insertCell(2);
        cell.innerHTML = objContact.phone;
        cell = row.insertCell(3);
        cell.innerHTML = objContact.address;
        cell = row.insertCell(4);
        cell.innerHTML = objContact.email;
        this._addButtonDelete(row, objContact);
    }

    _addButtonDelete(row, objContact) {
        //Create button delete
        let btnDelete = document.createElement('input');
        btnDelete.type = "button";
        btnDelete.value = "Eliminar";
        btnDelete.className = "btn btn-danger";
        //Add listenner
        btnDelete.addEventListener('click', () => {
            this._contacts.deleteContact(objContact.email);
            this.update(this._contacts.getContactsSaved());
        });
        //Show in HTML
        let cell = row.insertCell(5);
        cell.appendChild(btnDelete);
    }

    sortByName() {
        this._contacts.sortByName();
        this.update(this._contacts.getContactsSaved());
    }

    sortByAge() {
        this._contacts.sortByAge();
        this.update(this._contacts.getContactsSaved());
        /*
        //Ordenar descendentemente por value
        items = [{ id: 1, value: 3, perc: 0.5 }, { id: 2, value: 2, perc: 0.3 }, { id: 3, value: 1, perc: 0.2 }]
        items.sort(function (a, b) {
            return (b.value - a.value)
        })

        //Ordenar ascendentemente por perc
        items.sort(function (a, b) {
            return (a.perc - b.perc)
        })
        */
    }
}