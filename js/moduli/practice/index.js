import { nizPorudzbina } from "./porudzbine.js"
import { vratiVreme, cenaPizze, dnevniPazar, renderPorudzbina } from "./functions.js"

const inputPrecnikPizze = document.querySelector('#precnikPizze')
const btnPoruciPizzu = document.querySelector('#poruci')
const btnIspisiSvePorudzbine = document.querySelector('#ispisiSvePorudzbine')
const btnIzracunajDnevniPazar = document.querySelector('#izracunajDnevniPazar')
const pPoruka = document.querySelector('.poruka')
const divIspisPorudzbina = document.querySelector('.ispisPorudzbina')

btnPoruciPizzu.addEventListener('click', () => {
    // console.log(typeof +inputPrecnikPizze.value, +inputPrecnikPizze.value);

    if (+inputPrecnikPizze.value === NaN || inputPrecnikPizze.value.trim() === '') {
        alert('Nepravilan unos za velicinu!')
        return
    }

    let precnikPizze = +inputPrecnikPizze.value
    // cenaPizze(precnikPizze)
    let porudzbina = {
        precnik: precnikPizze,
        cena: +cenaPizze(precnikPizze),
        vreme: vratiVreme()
    }
    nizPorudzbina.push(porudzbina)
    pPoruka.innerHTML = `Cena Vase porudzbine je ${porudzbina.cena} i porucena je u ${porudzbina.vreme} sati, <br> a bice na Vasoj adresi za 30 minuta.`

    setTimeout(() => {
        pPoruka.textContent = ''
        inputPrecnikPizze.value = ''
    }, 5000)
})

btnIspisiSvePorudzbine.addEventListener('click', () => {
    //ispis u konzolu
    // nizPorudzbina.forEach(pizza => {
    //     console.log(pizza)
    // })

    // prikaz na stranici
    renderPorudzbina(nizPorudzbina, divIspisPorudzbina)
})


btnIzracunajDnevniPazar.addEventListener('click', () => {
    console.log(dnevniPazar(nizPorudzbina))
})