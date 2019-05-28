export default class {
    constructor() {
        this._contacts = new Array();
    }

    _updateArrayContacts() {
        if (localStorage.getItem("contacts") != null) {
            this._contacts = JSON.parse(localStorage.getItem("contacts"));
        }
    }

    getContactsSaved() {
        this._updateArrayContacts();
        return this._contacts;
    }

    saveContact(objContact) {
        //Update array contacts
        this._updateArrayContacts();
        //Add to array
        this._contacts.push(objContact);
        //Save in Local Storange
        localStorage.setItem("contacts", JSON.stringify(this._contacts));
    }

    deleteContact(email) {
        //Update Array Contacts
        this._updateArrayContacts();
        //Find the object
        this._contacts.forEach((objectContact, index) => {
            if (objectContact.email === email) {
                //Delete
                this._contacts.splice(index, 1);
                //Save in local Storange
                localStorage.setItem('contacts', JSON.stringify(this._contacts));
                return;
            }
        });
    }

    isContactRegistered(email) {
        let registered = false;
        this._contacts.forEach((objContact) => {
            if (objContact.email === email) {
                registered = true;
                return;
            }
        });

        return registered;
    }

    sortByName() {
        this._contacts.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            } else {
                return -1;
            }
        });
        //Save in local Storange
        localStorage.setItem("contacts", JSON.stringify(this._contacts));
    }

    sortByAge() {
        this._contacts.sort(function (a, b) {
            return (a.age - b.age);
        });
        //Save in local Storange
        localStorage.setItem("contacts", JSON.stringify(this._contacts));
    }
}