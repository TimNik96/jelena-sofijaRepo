// Primitive type
// -Number
// -String
// -Symbol
// -Undefined
// -Null
// -Boolean

// Complex
// -Object
// -Array
// -Function

// TERMINOLOGIJA        
// deklaracija (kreiranje promenljive i rezervisanje prostora u memoriji za skladistenje vrednosti; ukoliko ne dodelimo vrednost, onda je po default-u undefined)
// inicijalizacija (dodela vrednosti)
// inkrementacija (proces povecanja vrednosti za 1; unarni operator ++; prefiksni i postfiksni)
// dekrementacija (proces smanjenja vrednosti za 1; unarni operator --; prefiksni i postfiksni)
// iteracija (jedan ciklus; jedan prolaz kroz petlju)
// EcmaScript6(2015) (standardizacija)
// Hoisting
// Logicki operatori (&& i ||)

// let ime = 'Marta'

// let broj = 10

// var
// let 
// const

// const arr = [1, 2, 3]

// arr = ['ime', 'prezime']

// const osoba = {
//     ime: '',
//     prezime: ''
// }

// const Marko = {
//     zanimanje: 'ucenik'
// }

// osoba = Marko

// arr.push(4)

// console.log(broj++)

// console.log(broj)

// console.log(++broj)

// for (let i = 0; ;) {
//     break

// }

// console.log(i)

// if(broj == 10 && ime == 'Marta') {
//     console.log('Sve je ok')
// } else {
//     console.log('Nesto nije ok')
// }

// if(broj == 10 || ime == 'Marta') {
//     console.log('Sve je ok')
// } else {
//     console.log('Nesto nije ok')
// }

// if() {

// } else if () {

// } else if () {

// } else if () {

// } else if () {

// }

// if() {

// }

// if() {

// }

// if() {

// }

// if() {

// }

// let mesec = 'dan'

// switch (mesec) {
//     case 'januar':
//     case 'mart':
//     case 'maj':
//     case 'jul':
//     case 'avgust':
//     case 'oktobar':
//     case 'decembar':
//         console.log(31)
//         break
//     case 'april':
//     case 'jun':
//     case 'septembar':
//     case 'novembar':
//         console.log(30)
//         break
//     case 'februar':
//         console.log(28)
//         break
//     default:
//         console.log('Nije unet odgovarajuci mesec')
// }

// for(odakleKrece; dokleIde; stepenPomeranja) {

// }

// i = i + 2

// for(let i = 0; ; i++) {
//     if(arr.length === 0)
//         break
// }

// for(let i = 0; i < 10; i += 10) {
//     // blokKodaKojiSeIzvrsava
// }

// let i = 0

// while (i < 10) {
//     console.log(i)
//     i++
// }

// console.log(0 && 1)
// console.log('ime' || 0 || true)

// ternary operator

// prevora ? ifTrue : ifFalse

// if(provera) {
//     ifTrue
// } else {
//     ifFalse
// }

// let brojT = 1

// brojT == 10 ? console.log("sve je ok") : console.log('broj je pogresan')

// let broj = '1'

// console.log(brojT == broj)

// template string
// console.log(`Ovo broj ${brojT} je moj omiljeni broj`)

// function imeFunkcije(parametri) {
//     return povratnaVrednost
// }

// function saberi(prviSabirak = 100, drugiSabirak = 200) {
//     let zbir = 0
//     zbir = prviSabirak + drugiSabirak
//     return zbir
// }

// let broj = 1 
// let broj1 = 2 

// console.log(saberi())

// function obim(a, b = a) {
//     let o = 2*a + 2*b
//     return o
// }

// obim(10, 12)

// let niz = [1, 2, 3, 4, 'ime', [1,2,3], {ime: 'Marko'}, 10]

// for(let i = 0; i < niz.length; i++) {
//     niz.push(10)
//     break
// }

// niz.forEach((element) => {
//     console.log(element)
//     return
// })

// function imeFunkcije(parametar) {

// }

// const imeFunkcije = (parametar) => {

// }

// Napisati kod koji racuna cenu pice na osnovu unetog precnika, ako se zna da 1cm2 kosta 1 dinar.
// Napisati funkciju koja ispisuje zbir prvih 100 brojeva.
// Napisati kod koji za uneto slovo vraca njegovu poziciju u stringu.
// Napisati funkciju koja proverava da li element postoji u nizu. Ukoliko ne postoji, vraca false.
// Napisati kod koji racuna da li godina prestupna.
// Napisati funkciju koja proverava da li je broj prost.

// 1.
// function cenaPice(r) {
//     r = r / 2
//     let povrsina = r * r * Math.PI
//     return povrsina
// }

// let R = 52
// console.log(cenaPice(R))

// 3.
// let ime = 'Sofija'
// let charZaProveru = 'i'
// let pronadjenoSlovo = false

// for(let i = 0; i < ime.length; i++) {
//     if(ime.charAt(i) === charZaProveru){
//         console.log(i + 1)
//         pronadjenoSlovo = true
//         break
//     }
// }

// if(pronadjenoSlovo === false)   // !pronadjenoSlovo
//     console.log('Nema zadatog slova')


// 4.
// function elementUNizu(nekiNiz, element) {
//     for(let i = 0; i < nekiNiz.length; i++) {
//         if(nekiNiz[i] === element){
//             return true
//         }
//     }
//     return false
// }

// let niz = [1, 2, 3, 4, 5]
// let provera = 30

// console.log(elementUNizu(niz, provera))

// console.log(niz[2])

// 5.

// let godina = 1600

// if(godina % 4 === 0 && (godina % 100 !== 0 || godina % 400 === 0)) {
//     console.log('Godina je prestupna')
// } else {
//     console.log('Godina nije prestupna')
// }

// 6.
// function prostBroj(broj) {
//     for(let i = 2; i < Math.sqrt(broj); i++) {
//         if(broj % i === 0)
//             return false
//     }
//     return true
// }

// function logujBroj10() {
//     return console.log(10)
// }

// let broj = 73

// console.log(prostBroj(broj))


// 1. Ispisati poslednji element u nizu.

// let niz = [1, 2, 3, 4, 5]

// console.log(niz[niz.length-1]);

// for(let i = 0; i < niz.length; i++) {
//     if(i === niz.length - 1){
//         console.log(niz[i])
//     }
// // }

// if(0 === niz.length - 1){
//     console.log(niz[0])
// }

// if(1 === niz.length - 1){
//     console.log(niz[1])
// }

// if(2 === niz.length - 1){
//     console.log(niz[2])
// }

// if(3 === niz.length - 1){
//     console.log(niz[3])
// }

// if(4 === niz.length - 1){
//     console.log(niz[4])
// }

// 2. Proveriti da li niz ima paran ili neparan broj elemenata.

// let niz = [1, 2, 3]

// if(niz.length % 2 === 0) {
//     console.log('Niz ima paran broj elemenata')
// } else {
//     console.log('Niz ima neparan broj elemenata')
// }

// function imeFunkcije(parametri) {
//     return value
// }

// const imeFunkcije = function () {
//     return value
// }

// const imeFunkcije = (parametri) => {
//     return value
// }

// let niz = [1, 2, 3, 4, 5]

// console.log(niz)

// console.log(niz[0])
// console.log(niz[1])
// console.log(niz[2])
// console.log(niz[3])
// console.log(niz[4])

// for(let i = 0; i < niz.length; i++) {
//     console.log(niz[i])
// }

// niz.push()

// let noviNiz = [...niz, 10, 11]
// console.log(noviNiz, niz.push(7))

// const pozdrav = (ime) => {
//     console.log(`Pozdrav, ${ime}!`)
//     // return `Pozdrav, ${ime}!`
// }

// let str = 'Marko'
// pozdrav(str)
// console.log(pozdrav(str))

// let broj = 15
// if(broj > 10) {
//   console.log(true) 
// } else {
//   console.log(false)
// }

// let broj = 4
// let niz = [1, 2, 3, 4]
// for(let i = 0; i < niz.length; i++) {
//   if(niz[i] == broj) {
//     console.log(true)
//     break
//   }
// }

// for(let i = 0; i < 100; i++) {
//   if(i % 3 == 0)
// 	continue
//   console.log(i)
// }

// let osoba = {
//   firstName: 'Marko',
//   lastName: 'Markovic',
//   age: 30,
//   hobi: ['Kosarka']
// }

// console.log(osoba.firstName, osoba.lastName, osoba.age, osoba.hobi[0])
