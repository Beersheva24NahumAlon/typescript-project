type Person = {
  id: number,
  name: string,
  age: number,
  gender?: string,
  address?: {
    city: string,
    street: string
  }
}

type KeyValuePair<K, V> = {
  key: K,
  value: V
}

const kvp: KeyValuePair<string, number> = { key: "abc", value: 10 };
const kvp1: KeyValuePair<number, Person> = { key: 123, value: { id: 123, name: "Vasya", age: 25 } };

function findById<T extends {id: number}> (array: T[], id: number): T | undefined {
  return array.find(item => item.id === id);
}

function findByField<T> (array: T[], field: keyof T, value: unknown): T[] {
  return array.filter(item => item[field] == value);
}
const arr: Person[] = [
  {id: 123, name: "Vasya", age: 25},
  {id: 124, name: "Petya", age: 25},
];
console.log("array: ");
console.log(arr);
console.log("filter by id, witch exists (124):")
console.log(findByField(arr, "id", 124));
console.log("filter by id, witch doesn't exists (125):");
console.log(findByField(arr, "id", 125));
console.log("filter by age (25):");
console.log(findByField(arr, "age", 25));
console.log("filter by name (Vasya):");
console.log(findByField(arr, "name", "Vasya"));