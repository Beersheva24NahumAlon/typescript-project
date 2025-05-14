import Item from "./Item";

export default class SimpleItem implements Item {

    constructor(
        private _id: number, 
        private _name: string, 
        private _price: number,
        private _description?: string
    ) {
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

    get description() {
        return this._description;
    }
}