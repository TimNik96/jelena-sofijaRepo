const inputCompanyName = document.querySelector('#companyName')
const inputCompanyPib = document.querySelector('#companyPib')
const inputDate = document.querySelector('#date')
const inputCena = document.querySelector('#cena')
const forma = document.querySelector('form')
const inputLogin = document.querySelector('#login')
const divIspis = document.querySelector('.ispis')


const renderFaktura = (nizFaktura) =>{
    divIspis.textContent = ''
    nizFaktura.forEach((faktura) =>{
        
        const newDiv = document.createElement('div')
        newDiv.classList.add('logujFakture')
    
        const pCompanyName = document.createElement('p')
        pCompanyName.textContent = faktura.company_name
    
        const pCompanyPib = document.createElement('p')
        pCompanyPib.textContent = faktura.company_pib
    
        const pDate = document.createElement('p')
        pDate.textContent = faktura.date
    
        const pCena = document.createElement('p')
        pCena.textContent = faktura.cena
    
        const btnDelete = document.createElement('button')
        btnDelete.textContent = 'Obrisi'

        btnDelete.addEventListener('click', () =>{
            nizFaktura.splice(nizFaktura.findIndex(element => element.company_pib === faktura.company_pib),1)
            divIspis.textContent = ''
            renderFaktura(nizFaktura)
        })
    
        // btnDelete.addEventListener('click',()=>{
        //     niz.splice(index,1)
        //     renderFaktura(niz,container)
        // })
            newDiv.append(pCompanyName,pCompanyPib,pDate,pCena,btnDelete)
            divIspis.appendChild(newDiv)
    })
}

let nizFaktura = [

]

forma.addEventListener('submit', (event) =>{
    event.preventDefault()
    if(inputCompanyPib.value.length !== 8){
        alert('ne moze se uneti vise od 8 karaktera u PIB')
        return
    }

    let faktura = {
        company_name: inputCompanyName.value,
        company_pib: inputCompanyPib.value,
        date: inputDate.value,
        cena: inputCena.value
    }
    nizFaktura.push(faktura)
    setTimeout(()=>{
        inputCompanyName.value = ''
        inputCompanyPib.value = ''
        inputDate.value = ''
        inputCena.value = ''
    },3000

    )
    // console.log(nizFaktura)
})

inputLogin.addEventListener('click', ()=>{
    // nizFaktura.forEach(faktura=>{
        //     console.log(faktura)
        // })
        renderFaktura(nizFaktura)
})

