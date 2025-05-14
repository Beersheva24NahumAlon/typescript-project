import Item from "./Item";

export default interface Predicate {
    (x: Item): boolean;
  }