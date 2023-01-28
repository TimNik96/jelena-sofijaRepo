const inputPrecnikPizze = document.querySelector('#precnikPizze')
const btnPoruciPizzu = document.querySelector('#poruci')
const btnIspisiSvePorudzbine = document.querySelector('#ispisiSvePorudzbine')
const btnIzracunajDnevniPazar = document.querySelector('#izracunajDnevniPazar')
const pPoruka = document.querySelector('.poruka')

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

// ostale funkcije

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
render(nizPorudzbina)

btnIzracunajDnevniPazar.addEventListener('click', () => {
    console.log(dnevniPazar(nizPorudzbina))
})