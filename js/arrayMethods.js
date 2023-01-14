// let obj = {
//     ime: 'Nekoime',
//     ispisiIme: function(){
//         console.log(this.ime)
//     }
// }

// PUSH

// let niz = [1, 2, 3]
// console.log(niz.push(4))
// console.log(niz)

// POP

// function pop() {
//     return niz[niz.length - 1]
// }

// let niz = [1, 2, 3]

// let izbaceniElement = niz.pop()
// console.log(izbaceniElement)
// console.log(niz)

// SHIFT

// let niz = [1, 2, 3]
// console.log(niz.shift())
// console.log(niz);

// UNSHIFT

// let niz = [1, 2, 3]
// console.log(niz.unshift(0))
// console.log(niz);

// FINDINDEX (returns -1 if not found)

// let niz = [1, 2, 3]
// console.log(niz.findIndex(el => el % 2 == 0))

// function trazi(niz, el) {
    // for(let i = 0; i < niz.length;i++) {
    //     if(niz[i] % 2 == 0)
    //         return i
    // }
// }

// FIND (returns undefined if not found)

// let niz = [1, 5, 3]
// console.log(niz.find(el => el % 2 == 0))

// JOIN

// let niz = ['a', 'b', 'c']
// console.log(niz.join('-'))

// FOREACH

// let niz = [1, 2, 3, 'nekiStr', {ime: 'Sofija'}]
// niz.forEach((broj, index) => {
//     if(index % 2 == 0)
//         return
    
//     console.log(broj)
// })

// MAP

// let osobe = [
//     {
//         ime: 'Marko',
//         godine: 25
//     },
//     {
//         ime: 'Uros',
//         godine: 35
//     },
//     {
//         ime: 'Sofija',
//         godine: 28
//     },
//     {
//         ime: 'Milica',
//         godine: 15
//     }
// ]

// let nizImenaObj = osobe.map(el => {
//     let obj = {
//         ime: el.ime
//     }

//     return obj
// })

// console.log(nizImenaObj, osobe);

// let niz = [1, 2, 3, 4]
// console.log(niz.map(el => el ** 2), niz)

// FILTER

// let niz = [1, 2, 3, 4, 5]

// let nasNiz = niz.filter(staGod => staGod % 2 == 1)
// // niz.filter(staGod => staGod % 2 == 1).map(el => el ** 2)

// console.log(nasNiz)

// SLICE

// let niz = [1, 2, 3]

// console.log(niz.slice(1), niz)

// SPLICE

// let niz = [1, 2, 3, 4]

// console.log(niz.splice(1, 2, 10, 11, 12))

// console.log(niz)

// let osobe = [
//     {
//         ime: 'Marko',
//         prezime: 'Markovic',
//         godine: 25
//     },
//     {
//         ime: 'Uros',
//         prezime: 'Petrovic',
//         godine: 35
//     },
//     {
//         ime: 'Sofija',
//         prezime: 'Jovanovic',
//         godine: 28
//     },
//     {
//         ime: 'Milica',
//         prezime: 'Mitrovic',
//         godine: 15
//     }
// ]

// let novoPrezime = 'Markovic'
// let ime = 'Milica'

// let trazenaOsoba = osobe.find(el => el.ime === ime)
// console.log(trazenaOsoba)

// trazenaOsoba.prezime = novoPrezime

// osobe.splice(osobe.findIndex(el => el.ime === ime) , 1, trazenaOsoba)

// console.log(osobe)

// REVERSE

// let niz = [1, 2, 3]

// niz.reverse()

// console.log(niz)

// SOME

// let niz = [1, 2, 3]

// console.log(niz.some(el => el % 2 == 0))

// EVERY

// let niz = [0, 2, 4]

// console.log(niz.every(el => el % 2 == 0))

// INCLUDES

// let niz = [1, 2, 3]
// let trazeni = 2

// console.log(niz.includes(trazeni))

// if(niz.includes(trazeni)) 
//     console.log(niz.findIndex(el => el == trazeni))

// REDUCE

// let nizPlata = [1, 2, 3, 4, 5]

// console.log(nizPlata.reduce((a, b) => a + b, 0))