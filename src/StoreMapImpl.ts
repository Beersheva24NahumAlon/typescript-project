import Item from "./Item";
import Predicate from "./Predicate";
import Store from "./Store";

export default class StoreMapImpl implements Store {

    constructor(private _items: Map<number, Item>) {}

    addItem(item: Item): void {
        const id = item.id;
        if (this.getItem(id) != null) {
            throw Error(`item with id ${id} already exists in the store`);
        }
        this._items.set(id, item);
    }

    getItem(id: number): null | Item {
        const res = this._items.get(id);
        return res == undefined ? null : res;
    }

    removeItem(id: number): void {
        if (this.getItem(id) == null) {
            throw Error(`item with id ${id} doesn't exist in the store`);
        }
        this._items.delete(id);
    }

    findByPredicate(predicate: Predicate): Item[] {
        const items = this._items.values();
        return Array.from(items).filter(predicate);
    }

    removeByPredicate(predicate: Predicate): void {
        const removeItems = this.findByPredicate(predicate);
        removeItems.forEach(item => this.removeItem(item.id));
    }
    
    getAllItems(): Item[] {
        return this.findByPredicate(_item => true);
    }
    
}