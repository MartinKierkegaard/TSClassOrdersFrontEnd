import {OrdreLinie} from "./OrdreLinie";

export class Ordre {
    
    private _ordreList : [OrdreLinie];
    public get ordreList() : [OrdreLinie] {
        return this._ordreList;
    }
    public set ordreList(v : [OrdreLinie]) {
        this._ordreList = v;
    }
    
    
    constructor(liste:[OrdreLinie]) {
        
        this._ordreList = liste;

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


}