import {IOrdreLinie} from "./IOrdreLinie"
import {IOrdreLinieGet} from "./IOrdreLinieGet"
import {OrdreLinie} from "./OrdreLinie";
import { Ordre } from "./Ordre";
import axios, {
    AxiosResponse,
    AxiosError} from "../../node_modules/axios/index";

let liste : OrdreLinie[] = [];

let divElement : HTMLDivElement = <HTMLDivElement> document.getElementById("content");

let uri = "https://restservicecoreorders20181107095954.azurewebsites.net/api/orders/";

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


function getOneOrder(ordreId : string ): void {

    let liste : OrdreLinie[] = [];
    let content : HTMLInputElement = <HTMLInputElement> document.getElementById("content");
    // let oneCustomerValue : string = showOneCustomer1.value;
    let newUri = uri + ordreId;

    console.log("Uri: " + newUri);
     axios.get<IOrdreLinie[]>(newUri)
    .then(function (response:AxiosResponse<IOrdreLinie[]>):void{

        response.data.forEach((orderline: IOrdreLinie) => {

            let nyLinie : OrdreLinie = new OrdreLinie(orderline);
            console.log(" i foreach " + nyLinie.Print());
           
            liste.push(nyLinie);  
        });

        let ordre : Ordre = new Ordre(ordreId, liste);

    console.log ("før return i ordre : " + ordre.AntalLinier());

    let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
    element.innerHTML = printOut(ordre);
    

    }
    )
    .catch(function (error:AxiosError):void{
            divElement.innerHTML= error.message;        
    })
}


// let user: Person = { firstName: "John", lastName: "Doe" };
let ol1 : IOrdreLinie = {
                         productID:"123", 
                         orderQty:3,
                         unitPrice:34,
                         unitPriceDiscount:1};

let ol2 : IOrdreLinie = {
                         productID:"1234", 
                         orderQty:3,
                         unitPrice:34,
                         unitPriceDiscount:1}

                       
// let orderLinie : OrdreLinie = new OrdreLinie(ol1);
// let orderLinie2 : OrdreLinie = new OrdreLinie(ol2);


// liste.push(orderLinie);
// liste.push(orderLinie2);

 
function main() {
 
 getOneOrder("71774");
 
}

main();