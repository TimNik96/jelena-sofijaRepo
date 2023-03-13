const tabelaKorisnici = document.querySelector('.korisnici')
const btnDelete = document.querySelector('button')


let nizKorisnici = JSON.parse(localStorage.getItem('korisnici_projekat'))

function ispisKorisnici(nizKorisnici) {
    nizKorisnici.forEach((user,index) => {
        if(index == 0)
            return
        const trUser = document.createElement('tr')
        trUser.className = 'korisnik'

        const pUsername = document.createElement('td')
        pUsername.textContent = user.username

        const pFirstName = document.createElement('td')
        pFirstName.textContent = user.firstName

        const pLastName = document.createElement('td')
        pLastName.textContent = user.lastName

        const pEmail = document.createElement('td')
        pEmail.textContent = user.email

        const pPassword = document.createElement('td')
        pPassword.textContent = user.password

        const pPhone = document.createElement('td')
        pPhone.textContent = user.phoneNumber

        const pBirthday = document.createElement('td')
        pBirthday.textContent = user.dateOfBirth


        trUser.append(pUsername, pFirstName, pLastName, pEmail, pPassword, pPhone, pBirthday)
        tabelaKorisnici.appendChild(trUser)

        trUser.addEventListener('click',(event) =>{
            event.preventDefault()
            trUser.style.backgroundColor = 'red'
        })
        btnDelete.addEventListener('click',()=>{
            nizKorisnici.splice(nizKorisnici.findIndex(element => element.mail === user.mail), 1)
            // ispisKorisnici(nizKorisnici)
        })
    })
}
ispisKorisnici(nizKorisnici)


