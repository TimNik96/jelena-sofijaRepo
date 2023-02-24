const h1Odnos = document.querySelector('.odnosPrihodRashod')
const pPrihod = document.querySelector('.prihod').children[1]
const pRashod = document.querySelector('.rashod').children[1]
const select = document.querySelector('#unos')
const inputOpis = document.querySelector('#opis')
const inputIznos = document.querySelector('#iznos')
const btnUnesi = document.querySelector('#unesi')
const divIspisPrihod = document.querySelector('.ispisi_prihodi')
const divIspisRashod = document.querySelector('.ispisi_rashodi')

let prihodi 
let rashodi

if(localStorage.getItem('prihodi') === null) {
    prihodi = []
} else {
    prihodi = JSON.parse(localStorage.getItem('prihodi'))
}
if(localStorage.getItem('rashodi') === null) {
    rashodi = []
} else {
    rashodi = JSON.parse(localStorage.getItem('rashodi'))
}

// console.log(pRashod.innerText.substring(1, pRashod.innerText.indexOf(' ')))

function bilans(niz) {
    let zbir = 0
    niz.forEach(element => {
        zbir += element.iznos

    })
    return zbir
}

function preostaliNovac(prihodi, rashodi) {
    return bilans(prihodi) - bilans(rashodi)
}

function procenatRashoda(prihodi,rashodi){
    return ((bilans(rashodi) / bilans(prihodi)) * 100).toFixed(2)
}

const renderTransakcija = (niz1, niz2, container) => {
    container.textContent = ''
    niz1.forEach((transakcija, index) => {
        const newDivPrihodi = document.createElement('div')
        newDivPrihodi.classList.add('ispisPrihodi')
        const divCifraBtn = document.createElement('div')
        divCifraBtn.classList.add('divCifraBtn')

        const pOpisPrihod = document.createElement('p')
        pOpisPrihod.textContent = transakcija.opis

        const pIznosPrihod = document.createElement('p')
        if (container.classList.contains('ispisi_prihodi')) {
            pIznosPrihod.style.color = 'rgb(16, 213, 92)'
            pIznosPrihod.textContent = transakcija.iznos
        } else {
            pIznosPrihod.style.color = 'rgb(208, 13, 13)'
            pIznosPrihod.textContent = transakcija.iznos + ' ' + ((transakcija.iznos  / bilans(niz2)) * 100).toFixed(2) + '%'
        }

        const btnDelete = document.createElement('button')
        btnDelete.textContent = 'Obrisi'

        btnDelete.addEventListener('click', () => {
            niz1.splice(index, 1)
            renderTransakcija(niz1, niz2, container)
            let trenutniNovac

            if (container.classList.contains('ispisi_prihodi')) {
                let rashodiUProcentima = procenatRashoda(niz1,niz2)
                trenutniNovac = preostaliNovac(niz1, niz2)
                renderTransakcija(niz2, niz1, divIspisRashod)

                if (bilans(niz1) > 0)
                    pPrihod.textContent = '+' + bilans(niz1)
                else
                    pPrihod.textContent = bilans(niz1)

                if (bilans(niz2) > 0)
                    pRashod.textContent = '-' + bilans(niz2) + '  ' + rashodiUProcentima + '%'
                else
                    pRashod.textContent = bilans(niz2) + '  ' + rashodiUProcentima + '%'
            } else {
                trenutniNovac = preostaliNovac(niz2, niz1)
                let rashodiUProcentima = procenatRashoda(niz2,niz1)

                if (bilans(niz2) > 0)
                    pPrihod.textContent = '+' + bilans(niz2)
                else
                    pPrihod.textContent = bilans(niz2)

                if (bilans(niz1) > 0)
                    pRashod.textContent = '-' + bilans(niz1) + '  ' + rashodiUProcentima + '%'
                
                else
                    pRashod.textContent = bilans(niz1) + '  ' + rashodiUProcentima + '%'
            }

            if(+pPrihod.innerText.substring(1) - +pRashod.innerText.substring(1, pRashod.innerText.indexOf(' ')) > 0)
                h1Odnos.textContent = '+' + trenutniNovac
            else 
                h1Odnos.textContent = trenutniNovac

        })
        divCifraBtn.append(pIznosPrihod, btnDelete)
        newDivPrihodi.append(pOpisPrihod, divCifraBtn)
        container.appendChild(newDivPrihodi)
    })
}

renderTransakcija(prihodi, rashodi, divIspisPrihod)
renderTransakcija(rashodi, prihodi, divIspisRashod)

btnUnesi.addEventListener('click', () => {
    if (select.value === 'default') {
        alert('mora se izabrati iz padajuceg menija')
        return
    }

    if (inputIznos.value.trim() === '') {
        alert('polje ne sme biti prazno')
        return
    }

    if (inputOpis.value.trim() === '') {
        alert('polje ne sme biti prazno')
    }

    let transakcija = {
        opis: inputOpis.value,
        iznos: +inputIznos.value
    }

    if (select.value === 'plus') {
        prihodi.push(transakcija)
        localStorage.setItem('prihodi', JSON.stringify(prihodi))
        divIspisPrihod.textContent = ''
        renderTransakcija(prihodi, rashodi, divIspisPrihod)
        renderTransakcija(rashodi, prihodi, divIspisRashod)
        let bilansPrihoda = bilans(prihodi)

        if (bilansPrihoda === 0) {
            pPrihod.textContent = bilansPrihoda
        } else {
            pPrihod.textContent = '+' + bilansPrihoda
        }

        let rashodiUProcentima = procenatRashoda(prihodi,rashodi)
        let bilansRashoda = bilans(rashodi)

        if (bilansRashoda === 0) {
            pRashod.textContent = bilansRashoda + '  ' + rashodiUProcentima + '%'
        } else {
            pRashod.textContent = '-' + bilansRashoda + '  ' + rashodiUProcentima + '%'
        }
    }

    if (select.value === 'minus') {
        rashodi.push(transakcija)
        localStorage.setItem('rashodi', JSON.stringify(rashodi))
        divIspisRashod.textContent = ''
        renderTransakcija(rashodi, prihodi, divIspisRashod)
        let bilansRashoda = bilans(rashodi)
        let rashodiUProcentima = procenatRashoda(prihodi,rashodi)

        if (bilansRashoda === 0) {
            pRashod.textContent = bilansRashoda + '  ' + rashodiUProcentima + '%'
        } else {
            pRashod.textContent = '-' + bilansRashoda + '  ' + rashodiUProcentima + '%'
        }
    }

    let novac = preostaliNovac(prihodi, rashodi)

    if (novac > 0) {
        h1Odnos.textContent = '+' + novac
    } else {
        h1Odnos.textContent = novac
    }
})