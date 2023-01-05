// const inputmojbroj = document.querySelector('#mojbroj')
// const inputresenje = document.querySelector('#resenje')
// const button = document.querySelector('button')

// const zbircifara = (broj) => {
//     let cifra
//     let suma = 0
//     while(broj>0){
//         cifra = broj % 10
//         suma += cifra
//         broj = Math.floor( broj / 10) 
//     }
//     return suma
// }
// button.addEventListener ('click', () => {
//     inputresenje.value = zbircifara(+inputmojbroj.value)
// })

let str = 'Ananas'
for(let i = 0; i < str.length; i++){
    if(i % 2 == 0){
console.log(str.charAt(i));
    }
}

