import Item from "./Item";
import SimpleItem from "./SimpleItem";
import StoreArrayImpl from "./StoreArrayImpl";

const items: Item[] = [
  new SimpleItem(1, "item1", 200),
  new SimpleItem(2, "item2", 250),
  new SimpleItem(3, "item3", 300),
];
const store = new StoreArrayImpl(items);
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
console.log("removibg items with price < 250");
console.log(store.removeByPredicate(item => item.price < 250));
console.log(store.getAllItems());