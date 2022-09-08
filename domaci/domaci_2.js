// 1.

// let str = 'ImeIPrezime'
// let strUObrnutomRedosledu = ''

// for(let i = str.length - 1; i >= 0; i--) {
//     strUObrnutomRedosledu += str.charAt(i)
// }

// console.log(strUObrnutomRedosledu)

// 3.

// let niz = [
//     {
//         ime: 'Nikola',
//         prezime: 'Jokic',
//         zanimanje: 'kosarkas'
//     },
//     {
//         ime: 'Novak',
//         prezime: 'Djokovic',
//         zanimanje: 'teniser'
//     },
//     {
//         ime: 'Miroslav',
//         prezime: 'Miskovic',
//         zanimanje: 'serijski preduzetnik/biznismen'
//     }
// ]

// console.log(niz[0].ime, niz[0].prezime, niz[0].godine);

// 4.

// let niz = [1, 2, 3, 4, 5]
// let niz_1 = []

// for(let i = 0; i < niz.length; i += 2) {
//     niz_1.push(niz[i])
// }

// console.log(niz_1);

// 5.

// let str = 'Danas je divan dan za rad JS-a.'

// if(str.charAt(str.length - 1) === '.' ||    
//    str.charAt(str.length - 1) === '!' || 
//    str.charAt(str.length - 1) === '?') 
// {
//     console.log("Recenica adekvatno terminisana")
// } else {
//     console.log("Proverite da li ste dobro zavrsili recenicu.")
// }

// let n = 5
// let str = ''

// for(let i = 0; i < n; i++){
//     str = ''
//     for(let j = 0; j < n; j++) {
//         if(j <= i)
//             str += '* '
//     }
//     console.log(str)
// }