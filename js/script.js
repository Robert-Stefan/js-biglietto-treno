/**
 * CALCOLO TARIFFA TRENO
 * 
 * PREZZO BIGLIETTO 0.21 KM
 * 
 * SCONTO MINORENNI 20%
 * 
 * SCONTO OVER 65 DI 40%
 * 
 */

var km = parseInt( prompt('Quanti km devi percorrere?') );
console.log(km);
var age = parseInt( prompt('Quanti anni hai?') );
console.log(age);
var prezzokm = km * 0.21;
var sconto20 = (20 / 100) * prezzokm;
var sconto40 = (40 / 100) * prezzokm;
var totale1 = prezzokm - sconto20;
var totale2 = prezzokm - sconto40; 


if ( isNaN(km)) {
    alert('(Error 404 Not Found) Riprova! Dovete inserire un numero senza lettere!');
} else if ( isNaN(age)) { 
    alert('(Error 404 Not Found) Riprova! Dovete inserire un numero senza lettere!');
} else if( age <= 18 ) {
    var tariffa = totale1
    var risultatoeuro = tariffa.toFixed(2) + '€';
    console.log('La vostra tariffa è di: ' + risultatoeuro + ' ! Sconto applicato del 20%!');  
    document.getElementById('tariffa').innerHTML = 'La vostra tariffa è di: ' + risultatoeuro + ' ! Sconto applicato del 20%!';
} else if ( age >= 65) {
    var tariffa = totale2;
    var risultatoeuro = tariffa.toFixed(2) + '€';
    console.log('La vostra tariffa è di: ' + risultatoeuro + ' ! Sconto applicato del 40%!');  
    document.getElementById('tariffa').innerHTML = 'La vostra tariffa è di: ' + risultatoeuro + ' ! Sconto applicato del 40%!';
} else {
    var tariffa = prezzokm;
    var risultatoeuro = tariffa.toFixed(2) + '€';
    console.log('La vostra tariffa è di: ' + risultatoeuro + ' !');
    document.getElementById('tariffa').innerHTML = 'La vostra tariffa è di: ' + risultatoeuro + ' !';
}