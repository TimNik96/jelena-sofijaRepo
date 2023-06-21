const forma = document.querySelector('form')
const inputUsename = document.querySelector('#username')
const inputPassword = document.querySelector('#password')
const poruka = document.querySelector('.poruka')
const naslovPoruka = document.querySelector('.naslovPoruka')
const pVreme = document.querySelector('.vreme')
const svg = document.querySelector('svg')
const randomPoruka = document.querySelector('.randomPoruka')

let korisnici = [
    {
        user: '123',
        pass: '123'
    },
    {
        user: 'admin',
        pass: 'admin'
    },
    {
        user: 'korisnik',
        pass: 'korisnik'
    }
]




function vreme(pVreme){
    let sati = new Date().getHours()
    let minuti = new Date().getMinutes()
    let sekunde = new Date().getSeconds()


    let dobaDana = ''

    if(sati > 12){
        sati = sati - 12
        dobaDana = 'PM'
    }else{
        dobaDana = 'AM'
    }

    if(sati < 10)
    sati = '0' + sati
    if(minuti < 10)
    minuti = '0' + minuti
    if(sekunde < 10)
    sekunde = '0' + sekunde

    
    pVreme.innerHTML = `${sati}:${minuti}:${sekunde} ${dobaDana}`
     setTimeout(()=>{
        vreme(pVreme)
    },1000)
}



forma.addEventListener('submit', (el) =>{
    el.preventDefault()

    if(inputUsename.value.trim() === ''){
        poruka.textContent = 'Morate uneti vas username'
        inputUsename.style.border = '1px solid red'
        setTimeout(()=>{
            poruka.textContent = ''
            inputUsename.style.border = '1px solid white'
            inputUsename.value = ''
        },3000)
        return
    }
    if(inputPassword.value.trim() === ''){
        poruka.textContent = 'Morate uneti vas password'
        inputPassword.style.border = '1px solid red'
        return
    }


    
    let ulogovan = false
    for(let i = 0; i<korisnici.length; i++){
        if(inputUsename.value === korisnici[i].user){
            if(inputPassword.value === korisnici[i].pass){
                inputUsename.style.border = '1px solid green'
                inputPassword.style.border = '1px solid green'
                ulogovan = true
                setTimeout(()=>{
                        inputUsename.style.border = '1px solid white'
                        inputUsename.value = ''
                        inputPassword.style.border = '1px solid white'
                        inputPassword.value = ''
                },3000)
                naslovPoruka.innerHTML = `DOBRO VECE, dobrodosao! ${inputUsename.value}`
                break
            }break
            }
    }
    if(!ulogovan){
        poruka.textContent = 'Proverite unos za vas username i password'
        inputUsename.style.border = '1px solid red'
        inputPassword.style.border = '1px solid red'
        setTimeout(()=>{
            poruka.textContent = ''
                inputUsename.style.border = '1px solid white'
                inputUsename.value = ''
                inputPassword.style.border = '1px solid white'
                        inputPassword.value = ''
        },3000)
        return
    }
})


let poruke = [
    'abc',
    '123',
    'aaaaaaa'
]


let random = poruke[Math.floor(Math.random()*poruke.length)]



svg.addEventListener("click",()=>{

    randomPoruka.textContent = random
    
})


vreme(pVreme)