import Item from "./Item";
import SimpleItem from "./SimpleItem";
import StoreArrayImpl from "./StoreArrayImpl";

const items: Item[] = [
  new SimpleItem(1, "item1", 200),
  new SimpleItem(2, "item2", 250),
  new SimpleItem(3, "item3", 300),
];
const store1 = new StoreArrayImpl(items);
console.log(store1.findByPredicate((item => item.name.includes("1"))));