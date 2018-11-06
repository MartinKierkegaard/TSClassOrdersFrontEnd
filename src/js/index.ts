import {IOrdreLinie} from "./IOrdreLinie"
import {OrdreLinie} from "./OrdreLinie";
import { Ordre } from "./Ordre";
let liste : OrdreLinie[] = [];

function greeter(ol: OrdreLinie): string {
    return "<h3> en ordrelinie:" + ol.orderQty + " " + ol.productID + "</h3>";
}

function printOut(liste : Ordre): string {
   let res : string = "";
   
   res += "<ol>";

   liste.ordreList.forEach(element => {
       res += "<li> productid:" +element.productID + " sum inkl. moms" +element.BeregnSumInklMoms().toString() + "</li>"
   });
   res += "</ol>";

   return res;
}

// let user: Person = { firstName: "John", lastName: "Doe" };
let ol1 : IOrdreLinie = {ProductID:"123", 
                         OrderQty:3,
                        UnitPrice:34,
                        UnitPriceDiscount:1};

let ol2 : IOrdreLinie = {ProductID:"1234", 
                        OrderQty:3,
                       UnitPrice:34,
                       UnitPriceDiscount:1}

                       
let orderLinie : OrdreLinie = new OrdreLinie(ol1);
let orderLinie2 : OrdreLinie = new OrdreLinie(ol2);


liste.push(orderLinie);
liste.push(orderLinie2);

let nyOrdre : Ordre = new Ordre("3",liste);


let e_oneorder: HTMLDivElement = <HTMLDivElement> document.getElementById("contentoneorder");

let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
e_oneorder.innerHTML = greeter(orderLinie);

element.innerHTML = printOut(nyOrdre);
