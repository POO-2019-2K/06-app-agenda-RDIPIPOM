export default class Table {
    constructor(table) {
        this._table = table;
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
        for (let i = this._table.rows.lenght; i > 1; i--) {
            this._table.deleteRow(i);
        }
    }

    _addToTable(objContact){
        let row = this._table.insertRow(-1);
        let cell = row.insertCell(0);
        cell.innerHTML = objContact.name;
        cell = row.insertCell(1);
        cell.innerHTML = objContact.phone;
        cell = row.insertCell(2);
        cell.innerHTML = objContact.address;
        cell = row.insertCell(3);
        cell.innerHTML = objContact.email;        
    }
}