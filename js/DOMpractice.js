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

// const p = document.querySelector('p')
// let refaktorisanTekst = ''
// // let nizRecenica = p.textContent.split('.')
// for(let i = 0; i < p.textContent.length; i++) {
//     refaktorisanTekst += p.textContent.charAt(i)
//     if(p.textContent.charAt(i) === '.')
//         refaktorisanTekst += ' ' 
// }

// p.textContent = refaktorisanTekst
// let i = 2
// while(i <= 20) {
//     console.log(i)
//     i+=2
// }

// for(let i = 2; i <= 20; i+=2) {
//     console.log(i)
// }

// let n = 10
// let m = 20
// let a = 3
// let suma = 0
// while(n <= m) {
//     if(n % a !== 0) {
//         suma += n
//     }
//     n++
// }
// console.log(suma)

let brojRedova = 6
const table = document.createElement('table')
table.setAttribute('border', '1')
for(let i = 0; i < brojRedova; i++) {
    const tr = document.createElement('tr')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    td1.textContent = 'Tekst'
    td2.textContent = 'Tekst'
    td1.classList.add('cls')
    td2.classList.add('cls')
    if(i % 2 !== 0){
        td1.style.background = 'pink'
        td2.style.background = 'pink'
    }
    tr.append(td1, td2)
    table.appendChild(tr)
}

document.body.appendChild(table)

const lista = document.createElement('ul')
for(let i = 1; i <= 10; i++) {
    if(i % 3 === 0) {
        const lista1 = document.createElement('ul')
        lista1.style.listStyleType = 'circle'
        const li = document.createElement('li')
        li.textContent = `Element ${i}`
        li.style.color = 'purple'
        lista1.appendChild(li)
        lista.appendChild(lista1)
        continue
    }
    const li = document.createElement('li')
    li.textContent = `Element ${i}`
    lista.appendChild(li)
}

document.body.appendChild(lista)

let n = 0

for(let i = 1; i <= 8; i++) {
    const divRed = document.createElement('div')
    divRed.style.display = 'flex'
    for(let j = 1; j <= 8; j++) {
        const span = document.createElement('span')
        span.style.border = '1px solid #000'
        span.style.padding = '.5rem'
        span.style.width = '30px'
        span.style.textAlign = 'center'
        span.textContent = j + n
        if(i % 2 == 0) {
            if(j % 2 !== 0) {
                span.style.color = '#fff'
                span.style.backgroundColor = '#000'
            }

        } else {
            if(j % 2 === 0) {
                span.style.color = '#fff'
                span.style.backgroundColor = '#000'
            }
        }
        divRed.appendChild(span)
    }
    document.body.appendChild(divRed)
    n += 8
}
