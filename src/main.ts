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

type ReadOnlyPerson = {
  readonly id: number,
  readonly name: string,
  readonly age: number,
  readonly gender?: string,
  readonly address?: {
    city: string,
    street: string
  }
}

type ReadOnlyPerson2 = {
  readonly [K in keyof Person]: Person[K]
}

type ReadOnlyType<T> = {
  readonly [K in keyof T]: T[K]
}

const person1: Person = { id: 123, name: "Vasya", age: 25 };
person1.name = "Petya";
const person2: ReadOnlyPerson = { id: 123, name: "Vasya", age: 25 };
// person2.name = "Petya"; //not work
const person3: ReadOnlyPerson2 = { id: 123, name: "Vasya", age: 25 };
// person3.name = "Petya"; //not work
const person4: ReadOnlyType<Person> = { id: 123, name: "Vasya", age: 25 };

