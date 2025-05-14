import Container from "./Container";
import Rectangle from "./Rectangle";
import Shape from "./Shape";
import Square from "./Square";

const shapes: Shape[] = [
  new Rectangle(3, 4),
  new Square(5),
  new Container([
    new Rectangle(5, 6),
    new Square(3)
  ], "row")
];

const mainContainer = new Container(shapes, "column");
console.log("square: " + mainContainer.square());
console.log("perimeter: " + mainContainer.perimeter());
console.log("count of shapes: " + mainContainer.count());