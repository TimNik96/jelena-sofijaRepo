// const forma = document.querySelector('form')
// const inputUser = document.querySelector('#username')
// const inputPass = document.querySelector('#password')

// let korisnici = [
//     {
//         user: '123',
//         pass: '123'
//     },
//     {
//         user: 'jovan',
//         pass: 'jovan123'
//     }
// ]

// forma.addEventListener('submit', (event) => {
//     event.preventDefault()
// if(inputUser.value.trim() === ''){
//     console.log('polje ne sme bit prazno')
//     inputUser.style.border = '1px solid #f00'
// return
// }
// if(inputPass.value.trim() === ''){
//     console.log('polje ne sme biti prazno')
//     inputPass.style.border = '1px solid #f00'
//     return
// }
// let ulogovati = false
// for(let i = 0; i<korisnici.length; i++ ){
//     if(inputUser.value === korisnici[i].user){
//         if(inputPass.value === korisnici[i].pass){
//             console.log('ulogovani ste')
//             inputUser.style.border = '1px solid #0f0'
//             inputPass.style.border = '1px solid #0f0'
//             setTimeout(() => {
//                 inputUser.style.border = '1px solid #000'
//                 inputPass.style.border = '1px solid #000'
//             },3000
//             )
//             return
//             ulogovati = true
//             break
//         }
//         break
//     }
// }
// if(!ulogovati)
// console.log('proverite vas user ili pass')
// }
// )


let body = document.body

function kalendar(datum){
    let dan = new Date().getDate()
    let mesec = (new Date().getMonth()) + 1
    let godina = new Date().getFullYear()

    if(dan < 10)
    dan = '0' + dan
    if(mesec < 10)
    mesec = '0' + mesec
    if(godina < 10)
    godina = '0' + godina

    let bilosta = `${dan}: ${mesec}: ${godina}`
    datum.textContent = bilosta
}

kalendar(body)
// body.textContent = `${dan}: ${mesec}: ${godina}`

