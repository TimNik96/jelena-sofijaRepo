const inputMojBroj = document.querySelector('#mojBroj')
const inputResenje = document.querySelector('#resenje')
const btn = document.querySelector('button')

// inputMojBroj.value = '789'
// console.log(inputMojBroj.value)

const saberiCifre = (broj) => {
    let cifra
    let suma = 0
    while (broj > 0) {
        cifra = broj % 10
        suma += cifra
        broj = Math.floor(broj / 10)
    }
    return suma
}

btn.addEventListener('click', () => {
    inputResenje.value = saberiCifre(+inputMojBroj.value)
}
)