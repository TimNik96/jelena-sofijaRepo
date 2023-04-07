// 1. Izracunati stepen broja

// const racunajStepen = (osnova, eksponent) => {
//     // return Math.pow(osnova, eksponent)
//     let resenje = 1
//     for(let i = 1; i <= eksponent; i++) {
//         resenje *= osnova
//     }

//     return resenje
// }

// const inputOsnova = document.createElement('input')
// inputOsnova.setAttribute('type', 'number')

// const inputEksponent = document.createElement('input')
// inputEksponent.setAttribute('type', 'number')

// const inputResenje = document.createElement('input')
// inputResenje.setAttribute('type', 'number')

// const btn = document.createElement('button')
// btn.textContent = 'Izracunaj'

// document.body.append(inputOsnova, inputEksponent, inputResenje, btn)

// btn.addEventListener('click', () => {
//     inputResenje.value = racunajStepen(+inputOsnova.value, +inputEksponent.value)
// })

// 2. Izracunati faktorijel.
//      5! = 5 * 4 * 3 * 2 * 1

// const inputFaktorijel = document.querySelector('#f')
// const inputResenje = document.querySelector('#r')
// const btn = document.querySelector('button')

// const faktorijel = (vrednost) => {
//     let resenje = 1
//     for(let i = vrednost; i > 1; i--) {
//         resenje *= i
//     }
//     return resenje
// }

// btn.addEventListener('click', () => {
//     inputResenje.value = faktorijel(+inputFaktorijel.value)
// })

// 3. Proveriti da li postoji user u bazi.

// const inputUser = document.querySelector('#user')
// const btn = document.querySelector('button')

// const checkUser = (user) => {
//     let nizUsera = ['Marko', 'Sanja', 'Magdalena', 'Stefan']
//     let provera = nizUsera.find(el => el === user.value) !== undefined ? true : false

//     if(provera) {
//         user.style.border = '2px solid green'
//     } else {
//         user.style.border = '2px solid red'
//     }
// }

// btn.addEventListener('click', () => {
//     checkUser(inputUser)
// })

// 4. Refaktorisati paragraf tako da posle tacke uvek dodje razmak.

const p = document.querySelector('p')
let refaktorisanTekst = ''
// let nizRecenica = p.textContent.split('.')
for(let i = 0; i < p.textContent.length; i++) {
    refaktorisanTekst += p.textContent.charAt(i)
    if(p.textContent.charAt(i) === '.')
        refaktorisanTekst += ' ' 
}

p.textContent = refaktorisanTekst