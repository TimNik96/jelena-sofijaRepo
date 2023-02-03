const divIspis = document.querySelector('.ispis')
let nizAutomobila = ['audi', 'volvo', 'mercedes', 'mazda']

function renderSelect(niz, container) {
    const select = document.createElement('select')
    select.id = 'automobili'

    const optionDefault = document.createElement('option')
    optionDefault.value = 'default'
    optionDefault.setAttribute('selected', '')
    optionDefault.setAttribute('disabled', '')
    optionDefault.textContent = 'Choose...'

    const optionGroupNemci = document.createElement('optgroup')
    optionGroupNemci.label = 'Nemci'

    const optionGroupSvedjani = document.createElement('optgroup')
    optionGroupSvedjani.label = 'Svedjani'

    const optionGroupJapanci = document.createElement('optgroup')
    optionGroupJapanci.label = 'Japanci'

    niz.forEach(car => {
        const optionCar = document.createElement('option')
        optionCar.value = car 
        optionCar.textContent = car.charAt(0).toUpperCase() + car.substring(1)

        if (car === 'audi' || car === 'mercedes')
            optionGroupNemci.appendChild(optionCar)
        if (car === 'volvo')
            optionGroupSvedjani.appendChild(optionCar)
        if (car === 'mazda')
            optionGroupJapanci.appendChild(optionCar)
    })

    select.append(optionDefault, optionGroupNemci, optionGroupSvedjani, optionGroupJapanci)
    container.appendChild(select)
}

renderSelect(nizAutomobila, divIspis)
