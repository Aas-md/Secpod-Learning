//Interfaces
type orderType = { type: string; sugar: string; strong: boolean }

function makeTea(order: orderType) {
    console.log(order)
}

function serveTea(order: orderType) {
    console.log(order)
}

interface teaType {
    type: string; sugar: string; strong: boolean
}
class Tea implements teaType {

    type: string;
    sugar: string;
    strong: boolean;

    constructor(type: string, sugar: string, strong: boolean) {
        this.type = type;
        this.sugar = sugar;
        this.strong = strong;
    }
}

let tea = new Tea("Green","yes sugar",true)
console.log(tea)