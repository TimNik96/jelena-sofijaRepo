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

let str = 'nekiStringZaProveruKaraktera'
let karakterZaProveru = '!'
let brojPonavljanja = 0

for(let i = 0; i < str.length; i++) {
    if(str.charAt(i) === karakterZaProveru) {
        brojPonavljanja++
    }
}

console.log(brojPonavljanja);