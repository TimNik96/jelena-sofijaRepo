const pageviews = document.querySelector('.divPageviews')
const divCena = document.querySelector('.divCena')
const svgLeft = document.querySelector('.svgLeft')
const svgRight = document.querySelector('.svgRight')
const fliperKrug = document.querySelector('.fliperKrug')

let fliperKrugActive = false
fliperKrug.addEventListener('click',()=>{
    fliperKrugActive = !fliperKrugActive
    if(fliperKrugActive){
        fliperKrug.style.left = '37px'
        fliperKrug.style.backgroundColor = 'aqua'
    }else{
        fliperKrug.style.left = '3px'
        fliperKrug.style.backgroundColor = 'white'
    }
})




svgLeft.addEventListener('click',()=>{
    
    
     
})

