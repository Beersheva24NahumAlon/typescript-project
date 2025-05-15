import Item from "./Item";
import Predicate from "./Predicate";
import Store from "./Store";

export default abstract class StoreAbstract implements Store {

    abstract addItem(item: Item): void;
    abstract getItem(id: number): null | Item;
    abstract removeItem(id: number): void;
    abstract findByPredicate(predicate: Predicate): Item[];

    removeByPredicate(predicate: Predicate): void {
        const removeItems = this.findByPredicate(predicate);
        removeItems.forEach(item => this.removeItem(item.id));
    }

    getAllItems(): Item[] {
        return this.findByPredicate(_item => true);
    }
    
}