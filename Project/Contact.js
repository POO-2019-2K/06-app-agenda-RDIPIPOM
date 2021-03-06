export default class Contact{
    constructor(objectContact){
        this._name = objectContact.name;
        this._age = objectContact.age;
        this._phone = objectContact.phone;
        this._address = objectContact.address;
        this._email = objectContact.email;    
    }
    
    get name(){
        return this._name;
    }

    get age(){
        return this._age;
    }

    get phone(){
        return this._phone;
    }

    get address(){
        return this._address;
    }

    get email(){
        return this._email;
    }
}