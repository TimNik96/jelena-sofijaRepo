const form = document.querySelector(".myForm")
const inputUsername = document.querySelector(".myForm-username")
const inputPassword = document.querySelector(".myForm-password")
const poruka = document.querySelector(".poruka")

let korisnici = [
  {
    user: "admin",
    pass: "admin",
  },
  {
    user: "mojUser",
    pass: "jakodobrasifra123",
  },
  {
    user: "biblioteka12",
    pass: "citamdostaknjiga",
  },
  {
    user: "123",
    pass: "123",
  },
]

// form.addEventListener('submit', (el) => {
//     el.preventDefault()

//     if (inputUsername.value.trim() === '') {
//         alert('morate uneti vas username')
//         return
//     }
//     if (inputPassword.value.trim() === '') {
//         alert('morate uneti vas password')
//         return
//     }

//     let ulogovati = false
//     for (let i = 0; i < korisnici.length; i++) {
//         if (inputUsername.value === korisnici[i].user) {
//             if (inputPassword.value === korisnici[i].pass) {
//                 inputUsername.style.border = '2px solid green'
//                 inputPassword.style.border = '2px solid green'
//                 poruka.textContent = 'Uspesno ste se ulogovali'
//                 poruka.style.color = 'white'

//                 setTimeout(() => {
//                     inputUsername.value = ''
//                     inputPassword.value = ''
//                     inputUsername.style.border = '2px solid white'
//                     inputPassword.style.border = '2px solid white'
//                     poruka.textContent = ''
//                 }, 3000)
//                 ulogovati = true
//                 break
//             }
//         }
//         if (!ulogovati) {
//             inputUsername.style.border = '2px solid red'
//             inputPassword.style.border = '2px solid red'
//             poruka.textContent = 'Proverite unos za vas username ili password'
//             poruka.style.color = 'red'

//             setTimeout(() => {
//                 inputUsername.value = ''
//                 inputPassword.value = ''
//                 inputUsername.style.border = '2px solid white'
//                 inputPassword.style.border = '2px solid white'
//                 poruka.textContent = ''
//             }, 3000)
//         }
//     }
// })

const displayError = (userField, passField, poruka, msgCode) => {
  let errMessage = ""
  switch (msgCode) {
    case 0:
      errMessage = "Morate popuniti username polje"
      userField.style.borderColor = "#f00"
      poruka.textContent = errMessage
      setTimeout(() => {
        userField.style.borderColor = "#fff"
        poruka.textContent = ''
      }, 2000)
      break
    case 1:
      errMessage = "Morate popuniti password polje"
      passField.style.borderColor = "#f00"
      poruka.textContent = errMessage
      setTimeout(() => {
        passField.style.borderColor = "#fff"
        poruka.textContent = ''

      }, 2000)
      break
    case 2:
      errMessage = "Proverite unos za username i password"
      userField.style.borderColor = "#f00"
      passField.style.borderColor = "#f00"
      poruka.textContent = errMessage
      setTimeout(() => {
        userField.style.borderColor = "#fff"
        passField.style.borderColor = "#fff"
        poruka.textContent = ''
      }, 2000)
      break
    case 3:
      errMessage = "Uspesno ste se ulogovali"
      poruka.textContent = errMessage
      poruka.style.color = "#0f0"
      break
  }
}

const proveraUsera = (arr, form, username, password, poruka) => {
  if (username.value.trim() === "") {
    displayError(username, password, poruka, 0)
    return
  }

  if (password.value.trim() === "") {
    displayError(username, password, poruka, 1)
    return
  }

  let korisnik = arr.find(
    (el) => el.user === username.value && el.pass === password.value
  )

  if(korisnik == undefined) {
    displayError(username, password, poruka, 2)
    return
  }

  displayError(username, password, poruka, 3)
  form.reset()
}

form.addEventListener("submit", (event) => {
  event.preventDefault()

  proveraUsera(korisnici, form, inputUsername, inputPassword, poruka)
})
