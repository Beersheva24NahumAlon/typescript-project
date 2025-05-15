import Item from "./Item";
import SimpleItem from "./SimpleItem";
//import StoreArrayImpl from "./StoreArrayImpl";
import StoreMapImpl from "./StoreMapImpl";

const item1 = new SimpleItem(1, "item1", 200);
const item2 = new SimpleItem(2, "item2", 250);
const item3 = new SimpleItem(3, "item3", 300);

//const arrayItems: Item[] = [item1, item2, item3];
const mapItems = new Map<number, Item>([
  [1, item1],
  [2, item2],
  [3, item3]
]);

//const store = new StoreArrayImpl(arrayItems);
const store = new StoreMapImpl(mapItems);

console.log("init items in store");
console.log(store.getAllItems());
console.log("adding new item with id 4");
store.addItem(new SimpleItem(4, "item4", 200));
console.log(store.getAllItems());
// console.log("adding new item with id 4");
// store.addItem(new SimpleItem(4, "item4", 200));
console.log("getting item with id 4");
console.log(store.getItem(4));
console.log("removing item with id 3");
store.removeItem(3);
console.log(store.getAllItems());
// console.log("removing item with id 3");
// store.removeItem(3);
console.log("getting items with price < 250");
console.log(store.findByPredicate(item => item.price < 250));
console.log("removing items with price < 250");
console.log(store.removeByPredicate(item => item.price < 250));
console.log(store.getAllItems());