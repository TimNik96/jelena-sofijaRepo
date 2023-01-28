const inputPrecnikPizze = document.querySelector('#precnikPizze')
const btnPoruciPizzu = document.querySelector('#poruci')
const btnIspisiSvePorudzbine = document.querySelector('#ispisiSvePorudzbine')
const btnIzracunajDnevniPazar = document.querySelector('#izracunajDnevniPazar')
const pPoruka = document.querySelector('.poruka')
const divRender = document.querySelector('.divRender')

function cenaPizze(precnik) {
    // let cm2Pizze = .5 din
    return (Math.pow(precnik / 2, 2) * Math.PI * .5).toFixed(2)
}

function vratiVreme() {
    let sati = new Date().getHours()
    let minuti = new Date().getMinutes()
    let sekunde = new Date().getSeconds()

    if (sati < 10)
        sati = '0' + sati
    if (minuti < 10)
        minuti = '0' + minuti
    if (sekunde < 10)
        sekunde = '0' + sekunde

    let vreme = `${sati}:${minuti}:${sekunde}`

    return vreme
}

function dnevniPazar(nizPorudzbina) {
    let pazar = 0
    
    for(let i = 0; i < nizPorudzbina.length; i++) {
        pazar += nizPorudzbina[i].cena
    }

    // nizPorudzbina.forEach(pizza => {
    //     pazar += pizza.cena
    // })

    return `Dnevni pazar je ${pazar.toFixed(2)} dinara.`
}

// ostale funkcije
const render = (nizPorudzbina) => {
    nizPorudzbina.forEach(pizza => {
        const newDiv = document.createElement('div')
        newDiv.className = 'pizza'

        const pPrecnik = document.createElement ('p')
        pPrecnik.textContent = pizza.precnik

        const pCena = document.createElement('p')
        pCena.textContent = pizza.cena

        const pVrema = document.createElement('p')
        pVrema.textContent = pizza.vreme

        const buttonDelete = document.createElement('button')
        buttonDelete.textContent = 'obrisi'

        buttonDelete.addEventListener('click' , () => {
            nizPorudzbina.splice(nizPorudzbina.findIndex(element => element.cena === pizza.cena),1)
            divRender.textContent = ''
            render(nizPorudzbina)
        })
        newDiv.append(pPrecnik, pCena, pVrema, buttonDelete)
        divRender.appendChild(newDiv)

    })
}



let nizPorudzbina = [
    {
        precnik: 50,
        cena: 981.80,
        vreme: '18:55:00'
    },
    {
        precnik: 50,
        cena: 981.80,
        vreme: '18:57:00'
    },
    {
        precnik: 50,
        cena: 981.80,
        vreme: '18:59:00'
    },
    {
        precnik: 50,
        cena: 981.80,
        vreme: '19:00:00'
    },
]

btnPoruciPizzu.addEventListener('click', () => {
    // console.log(typeof +inputPrecnikPizze.value, +inputPrecnikPizze.value);
    
    if(+inputPrecnikPizze.value === NaN) {
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
    nizPorudzbina.forEach(pizza => {
        console.log(pizza)
    })
    // prikaz na stranici
})

btnIzracunajDnevniPazar.addEventListener('click', () => {
    console.log(dnevniPazar(nizPorudzbina))
})