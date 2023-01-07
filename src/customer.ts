/* Entity focused on business, to use an ORM we need create other "entity" (model) focused on persistence */

/*
   > Domain: business complexity
        Entity (core business)
   
   > Infra: accidental complexity 
        Model/ORM

*/

class Customer {

    _id: string;
    _name: string = "";
    _address: string = "";
    _active: boolean = false;

    constructor(id: string, name: string, address: string) {
        this._id = id;
        this._name = name;
        this.validate()
    }

    /* an entity must self-validate */
    validate() {
        if(this._name.length === 0) {
            throw new Error("Name is required")
        }

        if(this._id.length === 0) {
            throw new Error("Id is required")
        }
    }

    /* expressive actions, not set and get */
    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    activate() {
        if(this._address.length === 0) {
            throw new Error("Address is mandatory to acticate a customer")
        }
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }
}