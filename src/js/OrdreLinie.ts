import {IOrdreLinie} from "IOrdreLinie"

class OrdreLinie{

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


    constructor(linie:IOrdreLinie){
        this.orderQty = linie.OrderQty;
        this.productID = linie.ProductID;
        this.unitPrice = linie.UnitPrice;
        this.unitPriceDiscount = linie.UnitPriceDiscount;
    }

/**
 * BeregnSum
 */
public BeregnSum() {
    return this.orderQty * (this.unitPrice-this.unitPriceDiscount);
}

/**
 * BeregnMoms
 */
public BeregnMoms() {
    return this.BeregnSum() * 0.25;
}

/**
 * BeregnSumInklMoms
 */
public BeregnSumInklMoms() {
    return this.BeregnSum() + this.BeregnMoms();
}

}