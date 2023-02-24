function parsirajBrojTelefona(brojTelefona) {
    return '+381' + brojTelefona.substring(1)
}

function checkUser(nizKorisnika, inputUsername, zauzetUser) {
    for(let i = 0; i < nizKorisnika.length; i++) {
        if(inputUsername.value === nizKorisnika[i].username) {
            zauzetUser = true
            break
        }
    }

    if(inputUsername.value.trim() === '' || zauzetUser) {
        inputUsername.style.border = '2px solid #f00'
    } else {
        inputUsername.style.border = '2px solid #0f0'
    }
}

const forma = document.querySelector('form')
const inputFirstName = document.querySelector('#firstName')
const inputLastName = document.querySelector('#lastName')
const inputDateOfBirth = document.querySelector('#dateOfBirth')
const inputPhoneNumber = document.querySelector('#phoneNumber')
const inputUsername = document.querySelector('#username')
const inputEmail = document.querySelector('#email')
const inputPassword = document.querySelector('#password')
const inputConfirmPassword = document.querySelector('#confPassword')

let nizKorisnika = []
let zauzetUser = false

console.log(localStorage.getItem('korisnici_projekat'))

if(localStorage.getItem('korisnici_projekat') == null) {
    nizKorisnika = [
        {
            isAdmin: true,
            username: 'admin',
            password: 'admin'
        }
    ]
    localStorage.setItem('korisnici_projekat', JSON.stringify(nizKorisnika))
} else {
    nizKorisnika = JSON.parse(localStorage.getItem('korisnici_projekat'))
}

inputUsername.addEventListener('focusout', checkUser.bind(null, nizKorisnika, inputUsername, zauzetUser))

forma.addEventListener('submit', (event) => {
    event.preventDefault()

    if(inputFirstName.value.trim() === '') {
        alert('Unesite ime!')
        return
    }

    if(inputLastName.value.trim() === '') {
        alert('Unesite prezime!')
        return
    }

    // provera datuma (max mora biti danasnji dan)
    // inputDateOfBirth.setAttribute()

    if(inputPhoneNumber.value.length !== 9 && inputPhoneNumber.value.length !== 10) {
        alert('Neodgovarajuci broj telefona!')
        return
    }

    if(inputUsername.value.trim() === '') {
        alert('Unesite username!')
        return
    }

    if(zauzetUser) {
        alert('Izaberite jedinstven username!')
        return
    }

    if(inputEmail.value.trim() === '') {
        alert('Unesite email!')
        return
    }

    if(inputPassword.value.trim() === '') {
        alert('Unesite password!')
        return
    }

    if(inputPassword.value !== inputConfirmPassword.value) {
        alert('Proverite unos za sifre!')
        return
    }

    let noviKorisnik = {
        isAdmin: false,
        firstName: inputFirstName.value,
        lastName: inputLastName.value,
        dateOfBirth: inputDateOfBirth.value,
        phoneNumber: parsirajBrojTelefona(inputPhoneNumber.value),
        username: inputUsername.value,
        email: inputEmail.value,
        password: inputPassword.value
    }

    nizKorisnika.push(noviKorisnik)

    localStorage.setItem('korisnici_projekat', JSON.stringify(nizKorisnika))
})