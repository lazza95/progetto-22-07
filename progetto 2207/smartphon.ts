

// iterfaccia smatphon
interface Smartphone {
    //inserire propietà interfaccia
    carica: number;
    numeroChiamate: number;
    // dichiarare i metodi 
    ricarica(unaRicarica: number): void;
    chiamata(minutiDurata: number): void;
    numero404(): number;
    getNumeroChiamate(): void
    azzeraChiamate(): void;


}

// prima classe  
class FirstUser implements Smartphone {
    // modificatori di accesso sulle propietà 
    public carica: number;
    public numeroChiamate: number;


    // dichiarazione del costruttore 
    constructor(carica: number, numeroChiamate: number) {
        this.carica = carica
        this.numeroChiamate = numeroChiamate
    }


    // implementazione metodo ricarica 
    public ricarica(unaRicarica: number): void {
        this.carica += unaRicarica;
    }

    // implementazione metodo chiamata 
    public chiamata(minutiDurata: number): void {
        this.carica = this.carica - (minutiDurata * 0.20);
        this.numeroChiamate++;
    }


    // implementazione metodo numero404 (return)
    public numero404(): number {
        return this.carica;
    }

    // implementazione metodo getNumeroChiamate (return)
    public getNumeroChiamate(): number {
        return this.numeroChiamate;

    }

    // implementazione metodo azzera chiamate
    public azzeraChiamate() {
        this.numeroChiamate = 0;

    }
}






/*user 2*/

// seconda classe  
class SecondtUser implements Smartphone {
    // modificatori di accesso sulle propietà 
    public carica: number;
    public numeroChiamate: number;


    // dichiarazione del costruttore 
    constructor(carica: number, numeroChiamate: number) {
        this.carica = carica
        this.numeroChiamate = numeroChiamate
    }


    // implementazione metodo ricarica 
    public ricarica(unaRicarica: number): void {
        this.carica += unaRicarica;
    }

    // implementazione metodo chiamata 
    public chiamata(minutiDurata: number): void {
        this.carica = this.carica - (minutiDurata * 0.20);
        this.numeroChiamate++;
    }


    // implementazione metodo numero404 (return)
    public numero404(): number {
        return this.carica;
    }

    // implementazione metodo getNumeroChiamate (return)
    public getNumeroChiamate(): number {
        return this.numeroChiamate;

    }

    // implementazione metodo azzera chiamate
    public azzeraChiamate() {
        this.numeroChiamate = 0;

    }
}






/*user 3*/


// terza classe  
class ThirdUser implements Smartphone {
    // modificatori di accesso sulle propietà 
    public carica: number;
    public numeroChiamate: number;


    // dichiarazione del costruttore 
    constructor(carica: number, numeroChiamate: number) {
        this.carica = carica
        this.numeroChiamate = numeroChiamate
    }


    // implementazione metodo ricarica 
    public ricarica(unaRicarica: number): void {
        this.carica += unaRicarica;
    }

    // implementazione metodo chiamata 
    public chiamata(minutiDurata: number): void {
        this.carica = this.carica - (minutiDurata * 0.20);
        this.numeroChiamate++;
    }


    // implementazione metodo numero404 (return)
    public numero404(): number {
        return this.carica;
    }

    // implementazione metodo getNumeroChiamate (return)
    public getNumeroChiamate(): number {
        return this.numeroChiamate;

    }

    // implementazione metodo azzera chiamate
    public azzeraChiamate() {
        this.numeroChiamate = 0;

    }
}


// implementazione della classe 
let user1 = new FirstUser(40, 5);
user1.chiamata(10);
let user2 = new SecondtUser(35, 3);
user2.chiamata(15);
let user3 = new ThirdUser(50, 3);
user3.chiamata(20);





console.log('#######Primo user#######');
console.log('Valore della ricarica: ' + user1.carica);
console.log('Numero chiamate: ' + user1.numeroChiamate);
console.log('Valore carica disponibile: ' + user1.numero404());
console.log("dopo l'azzeramento delle chiamate:");
user1.azzeraChiamate()
console.log("Numero chiamare: " + user1.getNumeroChiamate());


console.log('#######Secondo user#######');
console.log('Valore della ricarica: ' + user2.carica);
console.log('Numero chiamate: ' + user2.numeroChiamate);
console.log('Valore carica disponibile: ' + user2.numero404());
console.log("dopo l'azzeramento delle chiamate:");
user2.azzeraChiamate()
console.log("Numero chiamare: " + user2.getNumeroChiamate());


console.log('#######Terzo user#######');
console.log('Valore della ricarica: ' + user3.carica);
console.log('Numero chiamate: ' + user3.numeroChiamate);
console.log('Valore carica disponibile: ' + user3.numero404());
console.log("dopo l'azzeramento delle chiamate:");
user3.azzeraChiamate()
console.log("Numero chiamare: " + user3.getNumeroChiamate());
