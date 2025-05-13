let a: number;
a = 10;
// a = 'abc'; //not work

let s = "some text";
s = "another text";
// s = 10; //not work

let b = true;
b = false;
b = !!a;

const c = 15; //type of c is 15
// c = 16 //not work 

const array = [1, 2, 3];
array.push(4);
// array.push("5"); //not work

const array1 = [1, 2, "3"];
array1.push(4);
array1.push("5");
// array2.push(true); //not work

const array2: number[] = [];

const array3: number[][] = [];

function functionName(a: number[][]): number {
  return 0;
}

const person: { id: number, name: string } = { id: 123, name: "Vasya" };
type Person = {
  id: number,
  name: string,
  age?: number, //? - optional field
  address?: { city: string, street: string }
};
const person2: Person = { id: 124, name: "Petya" };
// person2.age++; // not work, age is undefined 
person2.age && person2.age++; //check field exists

person2.address?.city; //: string | undefined
person2.address && person2.address.city; //: string 
person2.address!.city; //: string (I am sure, my responsibility!)