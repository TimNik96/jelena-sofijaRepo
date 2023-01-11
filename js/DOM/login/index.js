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

const forma = document.querySelector('form')
const inputUser = document.querySelector('#username')
const inputPass = document.querySelector('#password')

forma.addEventListener('submit', (event) => {
    event.preventDefault()
    // console.log(inputUser.value, inputPass.value)
    if(inputUser.value.trim() === '' || inputPass.value.trim() === '') {
        alert('Polja ne smeju biti prazna')
        return
    }
    // let ulogovaoSe = false
    // for (let i = 0; i < korisnici.length; i++) {
    //     if (inputUser.value === korisnici[i].user) {
    //         if (inputPass.value === korisnici[i].pass) {
    //             console.log('Ulogovali ste se')
    //             ulogovaoSe = true
    //             break
    //         }
    //         break
    //     }
    // }
    // if (!ulogovaoSe)
    //     console.log('Proverite unos za vas user i password')

    // drugi nacin

    //trim()
    // let str = '    123     abc     '
    // str.trim()

    let korisnik = korisnici.filter(el => inputUser.value.trim() === el.user)
    console.log(korisnik)
    if(korisnik.length == 0) {
        console.log('Proverite Vas unos!')
        return
    }

    if(korisnik[0].pass === inputPass.value.trim()) {
        console.log('Ulogovali ste se!')
        return
    }

    console.log('Proverite Vas unos!')
})

// let ime = prompt('Unesite vase ime: ')
// console.log(ime)