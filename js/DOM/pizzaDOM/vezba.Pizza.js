const inputPrecnikPizze = document.querySelector('#precnikPizze')
const btnPoruciPizzu = document.querySelector('#poruci')
const btnIspisiSvePorudzbine = document.querySelector('#ispisiSvePorudzbine')
const btnIzracunajDnevniPazar = document.querySelector('#izracunajDnevniPazar')
const pPoruka = document.querySelector('.poruka')
const divIspisPorudzbina = document.querySelector('.ispisPorudzbina')

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
    if(nizPorudzbina.length == 0) {
        alert('Kasa je prazna, jer nije bilo porudzbina')
        return
    }
        
    let pazar = 0

    for (let i = 0; i < nizPorudzbina.length; i++) {
        pazar += nizPorudzbina[i].cena
    }

    // nizPorudzbina.forEach(pizza => {
    //     pazar += pizza.cena
    // })

    return `Dnevni pazar je ${pazar.toFixed(2)} dinara.`
}

const renderPorudzbina = (niz, container) => {
    container.textContent = ''

    //prikaz naslovnih celija
    const divHeaderTabelePrikaza = document.createElement('div')
    divHeaderTabelePrikaza.classList.add('headerTabele')

    const pRedniBrojPorudzbine = document.createElement('p')
    pRedniBrojPorudzbine.textContent = 'Broj porudzbine'

    const pVelicinaPizze = document.createElement('p')
    pVelicinaPizze.textContent = 'Velicina'

    const pCenaPizze = document.createElement('p')
    pCenaPizze.textContent = 'Cena'

    const pVremePorucivanja = document.createElement('p')
    pVremePorucivanja.textContent = 'Vreme porucivanja'

    const pObrisi = document.createElement('p')
    pObrisi.textContent = 'Brisanje'
    pObrisi.style.color = '#fff'

    divHeaderTabelePrikaza.append(pRedniBrojPorudzbine, pVelicinaPizze, pCenaPizze, pVremePorucivanja, pObrisi)
    container.appendChild(divHeaderTabelePrikaza)

    niz.forEach((porudzbina, index) => {
        const divPrikazPorudzbine = document.createElement('div')
        divPrikazPorudzbine.classList.add('prikazPorudzbine')

        const pRedniBrojPorudzbine = document.createElement('p')
        pRedniBrojPorudzbine.textContent = `${index + 1}.`

        const pVelicinaPizze = document.createElement('p')
        pVelicinaPizze.textContent = `${porudzbina.precnik} cm`

        const pCenaPizze = document.createElement('p')
        pCenaPizze.textContent = `${porudzbina.cena} dinara`   // porudzbina.cena + ' dinara'

        const pVremePorucivanja = document.createElement('p')
        pVremePorucivanja.textContent = porudzbina.vreme

        const btnObrisiPorudzbinu = document.createElement('button')
        btnObrisiPorudzbinu.textContent = 'Obrisi'

        btnObrisiPorudzbinu.addEventListener('click', () => {
            niz.splice(index, 1)
            renderPorudzbina(niz, container)
        })

        divPrikazPorudzbine.append(pRedniBrojPorudzbine, pVelicinaPizze, pCenaPizze, pVremePorucivanja, btnObrisiPorudzbinu)
        container.appendChild(divPrikazPorudzbine)
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






