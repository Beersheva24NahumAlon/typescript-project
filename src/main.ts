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

function update<T, K extends keyof T>(object: T, field: K, value: T[K]): void {
    object[field] = value;
}

const person: Person = {id: 123, name: "Vasya", age: 25};
console.log("before updating:");
console.log(person);
console.log("updating age to 26:");
update(person, "age", 26);
console.log("updating name to 'Petya':");
update(person, "name", "Petya");
console.log("after updating:");
console.log(person);
