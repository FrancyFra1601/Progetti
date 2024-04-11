export class Pizza{
    constructor(
    public nome: string,
    public ingredienti : string[],
    public prezzo: number,
    public locandina: string,
    public tipologia?: string,
    ){}
}