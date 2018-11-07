 import {IOrdreLinie} from "./IOrdreLinie"

export class OrdreLinie{

private _productID : string;
public get productID() : string {
    return this._productID;
}
public set productID(v : string) {
    this._productID = v;
}


private _orderQty : number;
public get orderQty() : number {
    return this._orderQty;
}
public set orderQty(v : number) {
    this._orderQty = v;
}


private _unitPrice : number;
public get unitPrice() : number {
    return this._unitPrice;
}
public set unitPrice(v : number) {
    this._unitPrice = v;
}


private _unitPriceDiscount : number;
public get unitPriceDiscount() : number {
    return this._unitPriceDiscount;
}
public set unitPriceDiscount(v : number) {
    this._unitPriceDiscount = v;
}


// constructor(ProductID:string ,OrderQty:number, UnitPrice:number, UnitPriceDiscount:number){
//     this.orderQty = OrderQty;
//     this.productID = ProductID;
//     this.unitPrice = UnitPrice;
//     this.unitPriceDiscount = UnitPriceDiscount;
// }

    constructor(linie:IOrdreLinie){
        this.orderQty = linie.orderQty;
        this.productID = linie.productID;
        this.unitPrice = linie.unitPrice;
        this.unitPriceDiscount = linie.unitPriceDiscount;
    }

/**
 * BeregnSum
 */
public BeregnSum() : number {
    return this.orderQty * (this.unitPrice-this.unitPriceDiscount);
}

/**
 * BeregnMoms
 */
public BeregnMoms() :number {
    return this.BeregnSum() * 0.25;
}

/**
 * BeregnSumInklMoms
 */
public BeregnSumInklMoms() :number {
    return this.BeregnSum() + this.BeregnMoms();
}

/**
 * Print
 */
public Print() : string {

    return "linie, id: " + this.productID + " qty:" + this.orderQty + " sum: " +this.BeregnSumInklMoms();
    
}

}