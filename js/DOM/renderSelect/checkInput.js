const inputProvera = document.querySelector('#mojInput')

// inputProvera.addEventListener('keypress', (dogadjaj) => {
//     if(dogadjaj.key === 'Enter') {
//         // console.log(inputProvera.value)
//         if(isNaN(+inputProvera.value)) {
//             console.log('Greska')
//             return
//         }
//         console.log(inputProvera.value)
//     }
// })

inputProvera.addEventListener('keyup', (event) => {
    if(inputProvera.value.length === 8) {
        inputProvera.style.outline = '2px solid #0f0'
        return
    }
    inputProvera.style.outline = '2px solid #f00'
})

