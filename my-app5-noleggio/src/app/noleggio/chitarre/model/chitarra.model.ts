export class Chitarra{
    constructor(
        public id: number,
        public marca:string,
        public modello:string,
        public prezzo:number,
        public immagine:string,
        public acquistabile: boolean
    ){}
}