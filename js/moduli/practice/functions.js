export function vratiVreme() {
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

export function cenaPizze(precnik) {
    // let cm2Pizze = .5 din
    return (Math.pow(precnik / 2, 2) * Math.PI * .5).toFixed(2)
}

export function dnevniPazar(nizPorudzbina) {
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

export const renderPorudzbina = (niz, container) => {
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