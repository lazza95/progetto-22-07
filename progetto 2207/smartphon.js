// prima classe  
var FirstUser = /** @class */ (function () {
    // dichiarazione del costruttore 
    function FirstUser(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    // implementazione metodo ricarica 
    FirstUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    // implementazione metodo chiamata 
    FirstUser.prototype.chiamata = function (minutiDurata) {
        this.carica = this.carica - (minutiDurata * 0.20);
        this.numeroChiamate++;
    };
    // implementazione metodo numero404 (return)
    FirstUser.prototype.numero404 = function () {
        return this.carica;
    };
    // implementazione metodo getNumeroChiamate (return)
    FirstUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    // implementazione metodo azzera chiamate
    FirstUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return FirstUser;
}());
/*user 2*/
// seconda classe  
var SecondtUser = /** @class */ (function () {
    // dichiarazione del costruttore 
    function SecondtUser(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    // implementazione metodo ricarica 
    SecondtUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    // implementazione metodo chiamata 
    SecondtUser.prototype.chiamata = function (minutiDurata) {
        this.carica = this.carica - (minutiDurata * 0.20);
        this.numeroChiamate++;
    };
    // implementazione metodo numero404 (return)
    SecondtUser.prototype.numero404 = function () {
        return this.carica;
    };
    // implementazione metodo getNumeroChiamate (return)
    SecondtUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    // implementazione metodo azzera chiamate
    SecondtUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return SecondtUser;
}());
/*user 3*/
// terza classe  
var ThirdUser = /** @class */ (function () {
    // dichiarazione del costruttore 
    function ThirdUser(carica, numeroChiamate) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    // implementazione metodo ricarica 
    ThirdUser.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    // implementazione metodo chiamata 
    ThirdUser.prototype.chiamata = function (minutiDurata) {
        this.carica = this.carica - (minutiDurata * 0.20);
        this.numeroChiamate++;
    };
    // implementazione metodo numero404 (return)
    ThirdUser.prototype.numero404 = function () {
        return this.carica;
    };
    // implementazione metodo getNumeroChiamate (return)
    ThirdUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    // implementazione metodo azzera chiamate
    ThirdUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return ThirdUser;
}());
// implementazione della classe 
var user1 = new FirstUser(40, 5);
user1.chiamata(10);
var user2 = new SecondtUser(35, 3);
user2.chiamata(15);
var user3 = new ThirdUser(50, 3);
user3.chiamata(20);
console.log('#######Primo user#######');
console.log('Valore della ricarica: ' + user1.carica);
console.log('Numero chiamate: ' + user1.numeroChiamate);
console.log('Valore carica disponibile: ' + user1.numero404());
console.log("dopo l'azzeramento delle chiamate:");
user1.azzeraChiamate();
console.log("Numero chiamare: " + user1.getNumeroChiamate());
console.log('#######Secondo user#######');
console.log('Valore della ricarica: ' + user2.carica);
console.log('Numero chiamate: ' + user2.numeroChiamate);
console.log('Valore carica disponibile: ' + user2.numero404());
console.log("dopo l'azzeramento delle chiamate:");
user2.azzeraChiamate();
console.log("Numero chiamare: " + user2.getNumeroChiamate());
console.log('#######Terzo user#######');
console.log('Valore della ricarica: ' + user3.carica);
console.log('Numero chiamate: ' + user3.numeroChiamate);
console.log('Valore carica disponibile: ' + user3.numero404());
console.log("dopo l'azzeramento delle chiamate:");
user3.azzeraChiamate();
console.log("Numero chiamare: " + user3.getNumeroChiamate());
