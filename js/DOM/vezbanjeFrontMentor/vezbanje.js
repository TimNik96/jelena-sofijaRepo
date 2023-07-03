const svgLeftBoy = document.querySelector('#svgLeftBoy')
const svgRight = document.querySelector('#svgRight')
const sectionBoy = document.querySelector('.sectionBoy')
const sectionGirl = document.querySelector('.sectionGirl')

svgRight.addEventListener('click',()=>{
        sectionGirl.style.display = 'none'
        sectionBoy.style.display = 'block'
        sectionBoy.style.display = 'flex'
        sectionBoy.style.flexDirection = 'row'
        sectionBoy.style.justifyContent = 'center'
})
svgLeftBoy.addEventListener('click',()=>{
    sectionBoy.style.display = 'none'
    sectionGirl.style.display = 'block'
    sectionGirl.style.display = 'flex'
    sectionGirl.style.flexDirection = 'row'
    sectionGirl.style.justifyContent = 'center'
})