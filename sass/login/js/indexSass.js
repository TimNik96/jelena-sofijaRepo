const form = document.querySelector('.myForm')
const inputUsername = document.querySelector('.myForm-username')
const inputPassword = document.querySelector('.myForm-password')
const poruka = document.querySelector('.poruka')

let korisnici = [
    {
        user: 'admin',
        pass: 'admin'
    },
    {
        user: 'mojUser',
        pass: 'jakodobrasifra123'
    },
    {
        user: 'biblioteka12',
        pass: 'citamdostaknjiga'
    },
    {
        user: '123',
        pass: '123'
    }
]

form.addEventListener('submit', (el) => {
    el.preventDefault()

    if (inputUsername.value.trim() === '') {
        alert('morate uneti vas username')
        return
    }
    if (inputPassword.value.trim() === '') {
        alert('morate uneti vas password')
        return
    }

    let ulogovati = false
    for (let i = 0; i < korisnici.length; i++) {
        if (inputUsername.value === korisnici[i].user) {
            if (inputPassword.value === korisnici[i].pass) {
                inputUsername.style.border = '2px solid green'
                inputPassword.style.border = '2px solid green'
                poruka.textContent = 'Uspesno ste se ulogovali'
                poruka.style.color = 'white'

                setTimeout(() => {
                    inputUsername.value = ''
                    inputPassword.value = ''
                    inputUsername.style.border = '2px solid white'
                    inputPassword.style.border = '2px solid white'
                    poruka.textContent = ''
                }, 3000)
                ulogovati = true
                break

                
            }
        }
        if (!ulogovati) {
            inputUsername.style.border = '2px solid red'
            inputPassword.style.border = '2px solid red'
            poruka.textContent = 'Proverite unos za vas username ili password'
            poruka.style.color = 'red'

            setTimeout(() => {
                inputUsername.value = ''
                inputPassword.value = ''
                inputUsername.style.border = '2px solid white'
                inputPassword.style.border = '2px solid white'
                poruka.textContent = ''
            }, 3000)
        }
    }
})
