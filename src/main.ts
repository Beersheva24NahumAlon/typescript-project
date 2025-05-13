type Color = "blue" | "red" | "green" | "yellow";
let color: Color = "blue";``
// let color: Color = "kuku"; //not work

enum DayOfWeek {
  Sunday, Monday, Tuesday, Wensday, Thursday, Frayday, Saturday, Sun = 0
}
console.log(DayOfWeek.Sun === DayOfWeek.Sunday);


let a: any = 10; //not recommended
a = "text";
a = true;

let b: unknown = 10; //very recommended
b = "text";
// b++; // not work
// b.startsWith("s"); //not work
typeof b === "number" && b++;
typeof b === "string" && b.startsWith("t");

const tuple: [number, string] = [10, "text"];
tuple[1].startsWith("t");
tuple[0]++;
tuple.push("kyku"); //issue, good to avoid it

type StringNumberObject = {[key: string]:number};
function getOccurrencesObject(array: string[]): StringNumberObject{
  return array.reduce((acc: StringNumberObject, cur) => ({...acc, [cur]: acc[cur] ? ++acc[cur] : 1}), {});
}
const occurrences = getOccurrencesObject(["a", "a", "b"]);
console.log(occurrences);