export default class{
    constructor(){
        this._contacts = new Array();
    }

    _updateArrayContacts() {
        if (localStorage.getItem('contacts') != null) {
            this._contacts = JSON.parse(localStorage.getItem('contacts'));
        }
    }

    getContactsSaved(){
        this._updateArrayContacts();
        return this._contacts;
    }

    saveContact(objContact){
        //Update array contacts
        this._updateArrayContacts();
        //Add to array
        this._contacts.push(objContact);
        //Save in Local Storange
        localStorage.setItem('contacts', JSON.stringify(this._contacts));
    }
}