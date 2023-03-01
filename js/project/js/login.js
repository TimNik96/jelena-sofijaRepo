const inputUsername = document.querySelector('#username')
const inputPassword = document.querySelector('#password')
const forma = document.querySelector('form')


forma.addEventListener('submit', (users)=>{
    users.preventDefault()

    if(inputUsername.value.trim() === ''){
        alert('polje ne sme biti prazno')
        inputUsername.style.border = '1px solid red'
        return
    }
    if(inputPassword.value.trim() === ''){
        alert('polje ne sme biti prazno')
        inputPassword.style.border = '1px solid red'
        return
    }
    let ulogovani = false
    for(let i = 0; i <nizKorisnika.length; i++){
       if(inputUsername.value === nizKorisnika[i].username){
        if(inputPassword.value === nizKorisnika[i].password){
            alert('ulogovali ste se')
            ulogovani = true
            break
        }
        break
       } 
    }
    if(!ulogovani){
        alert('proverite unos za vas username i pasword')
    }
})