const forma = document.querySelector('form')
const inputUser = document.querySelector('#username')
const inputPass = document.querySelector('#password')
const btn = document.querySelector('button')

let korisnici = [
    {
        user: '123',
        pass: '123'
    },
    {
        user: 'jovan',
        pass: 'jovan123'
    }
]
forma.addEventListener('submit', (event) =>{
    event.preventDefault()
    if(inputUser.value.trim() === ''){
        console.log('polje ne sme biti prazno')
        inputUser.style.border = '1px solid red'
        return
    }
    if(inputPass.value.trim() === ''){
        console.log('polje ne sme biti prazno')
        inputPass.style.border = '1px solid red'
        return
    }
        
        let ulogovati = false
        for(let i = 0; i< korisnici.length; i++){
            if(inputUser.value === korisnici[i].user){
                if(inputPass.value === korisnici[i].pass){
                    console.log('ulogovani ste')
                    inputUser.style.border = '1px solid green'
                    inputPass.style.border = '1px solid green'
                    setTimeout(() => {
                        inputUser.style.border = '1px solid black'
                        inputPass.style.border = '1px solid black'
                    }, 3000
                    )
                    
                    ulogovati = true
                    break
                }
                break
            }
        }
    if(!ulogovati)
    console.log('proverite vas user ili pass')
})