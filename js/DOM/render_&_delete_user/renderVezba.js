const users = [
    {
        name: 'John',
        surname: 'Doe',
        age: 30,
        mail: 'johndoe@gmail.com',
    },
    {
        name: 'James',
        surname: 'Harden',
        age: 33,
        mail: 'jamesh123@gmail.com',
    },
    {
        name: 'Steve',
        surname: 'Nash',
        age: 45,
        mail: 'nashst@yahoo.com',
    },
    {
        name: 'Jordan',
        surname: 'Peterson',
        age: 58,
        mail: 'askjordan58@gmail.com',
    },
    {
        name: 'Jacob',
        surname: 'Stevenson',
        age: 28,
        mail: 'jacobs@gmail.com',
    }
]

const renderUsers = (users) => {
    users.forEach(user => {
        const divUser = document.createElement('div')
        divUser.className = 'user'

    const pUserName = document.createElement('p')
    pUserName.textContent = user.name

    const pUserSurname = document.createElement('p')
    pUserSurname.textContent = user.surname

    const pUserAge = document.createElement('p')
    pUserAge.textContent = user.age

    const pUserEmail = document.createElement('p')
    pUserEmail.textContent = user.mail

    const buttonDelete = document.createElement('button')
    buttonDelete.textContent = 'obrisi'

    buttonDelete.addEventListener('click', () => {
        // divUser.style.display = 'none'
        users.splice(users.findIndex(element => element.mail === user.mail), 1)
        divRenderUsers.textContent = ''
        renderUsers(users)
    })

    divUser.append(pUserName, pUserSurname, pUserAge, pUserEmail, buttonDelete)
    divRenderUsers.appendChild(divUser)
    // return divUser
})
}

const forma = document.querySelector('form')
const inputName = document.querySelector('#name')
const inputSurname = document.querySelector('#surname')
const inputAge = document.querySelector('#age')
const inputEmail = document.querySelector('#email')
const divRenderUsers = document.querySelector('.renderUsers')
const btnAllUsers = document.querySelector('.allUsers')

forma.addEventListener('submit', (e) => {
    e.preventDefault()

    if(inputName.value.trim() === '') {
        alert('Unesite Vase ime!')
        return
    }

    if(inputSurname.value.trim() === '') {
        alert('Unesite Vase prezime!')
        return
    }

    if(inputAge.value.trim() === '' && inputAge.value === '0') {
        alert('Proverite unos za Vase godine!')
        return
    }

    if(inputEmail.value.trim() === '') {
        alert('Proverite Vas email!')
        return
    }

    let newUser = {
        name: inputName.value,
        surname: inputSurname.value,
        age: Math.abs(+inputAge.value),
        mail: inputEmail.value
    }

    users.push(newUser)
    // console.log(users)
    divRenderUsers.textContent = ''
    renderUsers(users)
})
renderUsers(users)

btnAllUsers.addEventListener('click', () => {
    console.log('users')
})








