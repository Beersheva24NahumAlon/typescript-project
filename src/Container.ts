import Shape from "./Shape";

export default class Container implements Shape {
    
    constructor(private _shapes: Shape[], private _direction: "row"|"column") {
    }

    square(): number {
        return this._shapes.reduce((sum, cur) => sum + cur.square(), 0);
    }

    perimeter(): number {
        return this._shapes.reduce((sum, cur) => sum + cur.perimeter(), 0);
    }

    get width() {
        return this._direction === "row" 
            ? this._shapes.reduce((sum: number, cur) => sum += cur.width, 0) 
                : this._shapes.reduce((max: number, cur) => Math.max(max, cur.width), 0)
    }

    get height() {
        return this._direction === "column" 
            ? this._shapes.reduce((sum: number, cur) => sum += cur.height, 0) 
                : this._shapes.reduce((max: number, cur) => Math.max(max, cur.height), 0)
    }

    count(): number {
        return this._shapes.reduce((sum, cur) => 
            sum + (cur instanceof Container ? cur.count() : 1), 0);
    }
    
}