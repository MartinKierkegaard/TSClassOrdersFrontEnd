import {IOrdreLinie} from "./IOrdreLinie"
import {OrdreLinie} from "./OrdreLinie";

function greeter(ol: OrdreLinie): string {
    return "<h3>" + ol.orderQty + " " + ol.productID + "</h3>";
}
// let user: Person = { firstName: "John", lastName: "Doe" };
let ol1 : IOrdreLinie = {ProductID:"123", 
                         OrderQty:3,
                        UnitPrice:34,
                        UnitPriceDiscount:1}
let orderLinie : OrdreLinie = new OrdreLinie(ol1);

let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
element.innerHTML = greeter(orderLinie);