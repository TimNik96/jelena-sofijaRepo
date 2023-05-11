const svg = document.querySelector('svg')
const aside = document.querySelector('aside')
const btn = document.querySelector('button')

svg.addEventListener('click',() =>{
    aside.style.left = '-400px'
})

btn.addEventListener('click',() =>{
    aside.style.left = '0'
})