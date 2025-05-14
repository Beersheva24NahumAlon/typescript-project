import Item from "./Item";
import Predicate from "./Predicate";
import Store from "./Store";

export default class StoreArrayImpl implements Store {

    constructor(private _items: Item[]) {
    }

    addItem(item: Item): void {
        const id = item.id;
        if (this.getItem(id) != null) {
            throw Error(`item with id ${id} already exists in the store`);
        }
        this._items.push(item);
    }
    getItem(id: number): null | Item {
        const res = this._items.find((item) => item.id == id);
        return res == undefined ? null : res;
    }
    removeItem(id: number): void {
        if (this.getItem(id) == null) {
            throw Error(`item with id ${id} doesn't exist in the store`);
        }
        const index = this._items.findIndex((item) => item.id == id);
        this._items.splice(index, 1);
    }
    findByPredicate(predicate: Predicate): Item[] {
        return this._items.filter(predicate);
    }
    removeByPredicate(predicate: Predicate): void {
        const removeItems = this.findByPredicate(predicate);
        removeItems.forEach((item) => this.removeItem(item.id));
    }
    getAllItems(): Item[] {
        return this.findByPredicate((_item) => true);
    }
}

