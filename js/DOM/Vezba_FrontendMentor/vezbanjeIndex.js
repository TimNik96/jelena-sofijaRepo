const input = document.querySelector('input')
const btn = document.querySelector('button')
const forma = document.querySelector('form')
const poruka = document.querySelector('.poruka')

forma.addEventListener('submit',(event)=>{
    event.preventDefault()
    if(input.value.trim() === ''){
        poruka.textContent = '"Oops! Please add your email"'
        poruka.style.color = 'red'
        setTimeout(()=>{
            poruka.textContent = ''
        },4000)
        return
    }else{
        poruka.textContent = 'You have successfully entered your email address'
        poruka.style.color = 'green'
        setTimeout(()=>{
            poruka.textContent = ''
            input.value = ''
        },4000)
        
    }
    
})