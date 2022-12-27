// Arrow function
// function imeF(parametri) {
//     return value
// }

// const promenljiva = (parametri) => {
//     return value
// }

// promenljiva(parametri)

// zadatak 1.
// const inputMojBroj = document.querySelector('#mojBroj')
// const inputResenje = document.querySelector('#resenje')
// const btn = document.querySelector('button')

// inputMojBroj.value = '789'
// console.log(inputMojBroj.value)

// const saberiCifre = (broj) => {
//     let cifra
//     let suma = 0
//     while (broj > 0) {
//         cifra = broj % 10
//         suma += cifra
//         broj = Math.floor(broj / 10)
//     }
//     return suma
// }

// btn.addEventListener('keyup', () => {
//     inputResenje.value = saberiCifre(+inputMojBroj.value)
// })

// zadatak 2.
// const inputOsnova = document.querySelector('#osnova')
// const inputEksponent= document.querySelector('#eksponent')
// const inputResenje = document.querySelector('#resenje')
// const btn = document.querySelector('button')

// Math.floor() // zaokruzuje na donju vrednost (celobrojnu)
// Math.ceil() // zaokruzuje na gornju vrednost (celobrojnu)
// Math.round() // zaokruzuje vrednost po matematickim principima
// Math.max() 
// Math.min() 
// Math.random() // slucajna vrednost izmedju 0 i 1, ali nikad ne vraca 1
// Math.sqrt() // kvadratni koren
// Math.pow() // stepen broja (osnova, eksponent)
// Math.abs() // apsolutna vrednost

// const stepenBroja = (osnova, eksponent) => {
//     // return Math.pow(osnova, eksponent)
//     let suma = 1
//     for(let i = 0; i < eksponent; i++) {
//         suma *= osnova
//     }
//     return suma
// }

// btn.addEventListener('mouseover', () => {
//     inputResenje.value = stepenBroja(+inputOsnova.value, +inputEksponent.value )
// })

// zadatak 3.

const inputBroj = document.querySelector('#broj')
const pResenje = document.createElement('p')
const body = document.body
body.appendChild(pResenje)

const prostBroj = (num) => {
    for(let i = 2; i < Math.sqrt(num); i++) {
        if(num % i == 0)
            return false
    }
    return true
}   

inputBroj.addEventListener('keypress', (event) => {
    console.log(event)
    if(event.key === 'Enter') {
        let resenje = prostBroj(+inputBroj.value)
        if(resenje)
            pResenje.textContent = 'Broj je prost'
        else
            pResenje.textContent = 'Broj nije prost'
    }
})