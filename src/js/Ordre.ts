import {OrdreLinie} from "./OrdreLinie";

export class Ordre {
    
    private _ordreList : OrdreLinie[];
    public get ordreList() : OrdreLinie[] {
        return this._ordreList;
    }
    public set ordreList(v : OrdreLinie[]) {
        this._ordreList = v;
    }
    
    
    private _ordreID : string;
    public get ordreID() : string {
        return this._ordreID;
    }
    // public set ordreID(v : string) {
    //     this._ordreID = v;
    // }
    
    
    constructor(ordreID:string, liste:OrdreLinie[]) {
        
        this._ordreList = liste;
        this._ordreID = ordreID;

    }

    /**
     * TotalSum
     */
    public TotalSum() :number {
        let total : number = 0;
        this._ordreList.forEach(ol => {total+=ol.BeregnSumInklMoms()} )
        return total;
    }

    /**
     * HentData
     */
    public HentData() {
        

    }

    /**
     * AntalLinier
  : string    */
    public  AntalLinier() : string {

        return this.ordreList.length.toString();
        

    }


}