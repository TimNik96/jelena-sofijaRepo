// 1.
// let niz = [1, 2, 3, 4, 5]
// let zbir = 0

// for(let i = 0; i < niz.length; i += 3) {
//     // if (i % 3 === 2)
//         zbir += niz[i]
// }

// console.log(zbir)

// 2.

// function zbirCifaraUBroju(broj) {
//     let zbir = 0
//     let cifra = 0
    
//     while(broj > 0) {
//         cifra = broj % 10
//         broj = Math.floor(broj / 10)
//         zbir += cifra
//     }
    
//     return zbir
// }

// let num = 1054

// console.log(zbirCifaraUBroju(num))

// 3.

// function cifreUObrnutomRedosledu(broj) {
//     let prethodnoStanje = 0
//     let novaCifra = 0

//     while(broj > 0) {
//         novaCifra = broj % 10
//         prethodnoStanje = prethodnoStanje * 10 + novaCifra
//         broj = Math.floor(broj / 10)
//     }

//     return prethodnoStanje
// }

// let num = 1054

// console.log(cifreUObrnutomRedosledu(num))

// 4.

// let str = "ne!kiSt"

// for(let i = 0; i < str.length; i++) {
//     if(str.length > 7) {
//         console.log(str)
//         break
//     }

//     if(str.charAt(i) === '!') {
//         // let konacniString = ''
//         // for(let i = 0; i < Math.floor(str.length / 2); i++) {
//         //     konacniString += str.charAt(i)
//         // }
//         console.log(str.substring(0, Math.floor(str.length / 2)))
//         break
//     }
// }

// 5.

// function duzinaStringa(str) {
//     let brojac = 0
    
//     for(let i = 0; i < str.length; i++) {
//         brojac++
//     }

//     return brojac
//     // return str.length
// }

// let str = 'nekiStr'

// console.log(duzinaStringa(str))

// 6.

// let osnova = 10
// let eksponent = 3
// let resenje = 1
// // console.log(Math.pow(osnova, eksponent))

// for(let i = 1; i <= eksponent; i++) {
//     resenje *= osnova
// }

// console.log(resenje)

// 7.

// let str = 'nekiStringZaProveruKaraktera'
// let karakterZaProveru = '!'
// let brojPonavljanja = 0

// for(let i = 0; i < str.length; i++) {
//     if(str.charAt(i) === karakterZaProveru) {
//         brojPonavljanja++
//     }
// }

// console.log(brojPonavljanja);

// prvaRecIdeMalimSlovomSvakaSledecaVelikim
// prva_rec_ide

//Napisati f-ju koja proverava da li je broj paran.

// function imeFunkcije(broj) {
//     if(broj % 2 === 0)
//         return true
//     return false 
// }

// function name(param_1, param_2) {
//     return value
// }

// let num = 10
// console.log(imeFunkcije(num));

// if(broj > broj_1) {
//     console.log(broj)
// } else {
//     console.log(broj_1);
// }

// console.log('Broj ${num} je paran broj.');

// let prazanNiz = []

// prazanNiz.push(10)

// Math.pow(broj, 2)
// Math.pow(broj1, 2)

// function ime(prom_1, prom_2) {
//     let rezultat

//     return rezultat
// }

// let broj = 10
// let broj_2 = 20

// ime(broj, broj_2)

// Napisati sintakse za for, if, while, switch

// for(let i = 0; uslovPrekida; i++) {

// }

// if(uslov) {

// } else if() {

// } else {

// }

// let i = 0
// while (condition) {
       
//     i++
// }

// let str = 'lksanfljkasnfasdm'

// for(let i = 0; i < str.length; i++) {
//     if(i === Math.floor(str.length / 2)){
//         console.log(str.charAt(i))
//         break
//     }
// }

// console.log(str.charAt(Math.floor(str.length / 2)))

// let niz = [1, 2, 3, 4, 5]
// let postoji = false
// let trazeniElement = 1

// for(let i = 0; i < niz.length; i++) {
//     if(niz[i] = trazeniElement){
//         postoji = true
//         console.log(postoji)
//         break
//     }
// }

// if(postoji == false)
//     console.log(postoji)

// console.log(niz.find(element => element === trazeniElement))

// Sabrati poslednje cifre u datim brojevima. 

// let broj 
// let broj_2

// console.log(broj % 10 + broj_2 % 10)

// let niz = [10, 22, 308, 202]
// let zbir = 0

// for(let i = 0; i < niz.length; i++) {
//     zbir += niz[i] % 10
// }

// console.log(zbir)

// let osoba_1 = {
//     ime: 'Sofija',
//     prezime: 'Lukovic',
//     godine: '?'
// }

// let osoba_2 = {
//     ime: 'Jelena',
//     prezime: '/',
//     godine: '?'
// }

// console.log(osoba_1.ime + ' ' + osoba_1.prezime)
// console.log(osoba_2.ime + ' ' + osoba_2.prezime)

// 

// let str = 'jelana&sofija'

// for(let i = 0; i < str.length; i++) {
//     console.log(str.charAt(i))
// }

// 1  
// 1 1
// 1 1 1
// 1 1 1 1
// 1 1 1 1 1

// let n = 5
// let str = ''

// for(let i = 0; i < n; i++) {
//     str = ''
//     for(let j = 0; j < n; j++) {
//         if(j <= i)
//             str += '1 '
//     }
//     console.log(str)
// }

//         *
//       * *
//     * * *
//   * * * *
// * * * * *

let n = 5
let str = ''

for(let i = 1; i <= n; i++) {
    str = ''
    for(let j = 1; j <= n; j++) {
        if(j <= n - i)
            str += '  '
        else 
            str += '* '
    }
    console.log(str)
}