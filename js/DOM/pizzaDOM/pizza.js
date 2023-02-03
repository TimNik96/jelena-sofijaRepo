let nizPorudzbina = [
    {
        precnik: 20,
        cena: 234,
        vreme: '20:19:34'
    },
    {
        precnik: 20,
        cena: 234,
        vreme: '20:19:34'
    },
    {
        precnik: 20,
        cena: 234,
        vreme: '20:19:34'
    },
    {
        precnik: 20,
        cena: 234,
        vreme: '20:19:34'
    },
]

function cenaPizze (precnik) {
    return (Math.pow(precnik/2 ,2) * Math.PI * 0.5).toFixed(2)
}

function vratiVreme(){
    let sati = new Date().getHours()
    let minuti = new Date().getMinutes()
    let sekunde = new Date().getSeconds()

    if(sati < 10)
    sati = '0' + sati

    if(minuti < 10)
    minuti = '0' + minuti

    if(sekunde < 10)
    sekunde = '0' + sekunde

    let vreme = `${sati}:${minuti}:${sekunde}`

    return vreme
}

function dnevniPazar(nizPorudzbina){
    if(nizPorudzbina.length == 0){
        alert('kasa je prazna jer nije bilo porudzbina')
        return
    }
    let pazar = 0
    for(let i = 0; i< nizPorudzbina.length; i++){
        pazar += nizPorudzbina[i].cena
    }
    return `Dnevni pazar je ${pazar.toFixed(2)} dinara`
}

const renderPorudzbina = (niz, container) =>{

    container.textContent = ''
    
    const divHeaderTabelePrikaza = document.createElement('div')
    divHeaderTabelePrikaza.classList.add('headerTabele')
    
    const pRedniBrojPorudzbine = document.createElement('p')
    pRedniBrojPorudzbine.textContent = 'Broj Porudzbine'
    
    const pVelicinaPizze = document.createElement('p')
    pVelicinaPizze.textContent = 'Velicina'
    
    const pCenaPizze = document.createElement('p')
    pCenaPizze.textContent = 'Cena'
    
    const pVremePorucivanja = document.createElement('p')
    pVremePorucivanja.textContent = 'Vreme porucivanja'
    
    const pBrisanje = document.createElement('p')
    pBrisanje.textContent = 'Brisanje'
    pBrisanje.style.color = '#fff'
    
    divHeaderTabelePrikaza.append(pRedniBrojPorudzbine, pVelicinaPizze, pCenaPizze, pVremePorucivanja, pBrisanje)
    container.appendChild(divHeaderTabelePrikaza)
    
    niz.forEach((porudzbina, index) => {
        
        const divIspisPorudzbina = document.createElement('div')
        divIspisPorudzbina.classList.add('prikazPorudzbine')
        
        const pRedniBrojPorudzbine = document.createElement('p')
        pRedniBrojPorudzbine.textContent = `${index + 1}`
        
        const pVelicinaPizze = document.createElement('p')
        pVelicinaPizze.textContent = `${porudzbina.precnik} cm`
        
        const pCenaPizze = document.createElement('p')
        pCenaPizze.textContent = `${porudzbina.cena} dinara`
        
        const pVremePorucivanja = document.createElement('p')
        pVremePorucivanja.textContent = porudzbina.vreme
        
        const btnObrisiPorudzbinu = document.createElement('button')
        btnObrisiPorudzbinu.textContent = 'Obrisi'
        
        btnObrisiPorudzbinu.addEventListener('click',() =>{
            niz.splice(index,1)
            renderPorudzbina(niz,container)
        })
        divIspisPorudzbina.append(pRedniBrojPorudzbine, pVelicinaPizze, pCenaPizze, pVremePorucivanja, btnObrisiPorudzbinu)
        container.appendChild(divIspisPorudzbina)
    })
}

const inputPrecnikPizze = document.querySelector('#precnikPizze')
const pPoruka = document.querySelector('.poruka')
const btnPoruciPizzu = document.querySelector('#poruci')
const btnIspisiSvePorudzbine = document.querySelector('#ispisiSvePorudzbine')
const btnIzracunajDnevniPazar = document.querySelector('#izracunajDnevniPazar')
const divIspisPorudzbina = document.querySelector('.ispisPorudzbina')

btnPoruciPizzu.addEventListener('click', () =>{
    
    if(inputPrecnikPizze.value.trim() === '' || +inputPrecnikPizze.value === NaN){
        alert('nepravilan unos za velicinu')
        return
    }

    let precnikPizze = +inputPrecnikPizze.value

    let porudzbina = {
        precnik: precnikPizze,
        cena: +cenaPizze(precnikPizze),
        vreme: vratiVreme()
    }
    nizPorudzbina.push(porudzbina)

    pPoruka.innerHTML = `Cena vase porudzbine je ${porudzbina.cena} i porucena je u ${porudzbina.vreme} sati <br>i bice na vasoj adresi za 30 minuta`

    setTimeout(() =>{
        pPoruka.textContent = ''
        inputPrecnikPizze.value = ''
    },5000

    )
})
btnIspisiSvePorudzbine.addEventListener('click', () => {
    //ispis u konzolu
    // nizPorudzbina.forEach(pizza => {
    //     console.log(pizza)
    // })

    // prikaz na stranici
    renderPorudzbina(nizPorudzbina, divIspisPorudzbina)
})

btnIzracunajDnevniPazar.addEventListener('click', () =>{
    console.log(dnevniPazar(nizPorudzbina))
})