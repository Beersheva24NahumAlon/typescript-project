import Item from "./Item";
import Predicate from "./Predicate";

export default interface Store {
    addItem(item: Item): void;
    getItem(id: number): null | Item;
    removeItem(id: number): void;
    findByPredicate(predicate: Predicate): Item[];
    removeByPredicate(predicate: Predicate): void;
    getAllItems(): Item[];
}
