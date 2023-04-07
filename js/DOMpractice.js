// 1. Izracunati stepen broja

// const racunajStepen = (osnova, eksponent) => {
//     // return Math.pow(osnova, eksponent)
//     let resenje = 1
//     for(let i = 1; i <= eksponent; i++) {
//         resenje *= osnova
//     }

//     return resenje
// }

// const inputOsnova = document.createElement('input')
// inputOsnova.setAttribute('type', 'number')

// const inputEksponent = document.createElement('input')
// inputEksponent.setAttribute('type', 'number')

// const inputResenje = document.createElement('input')
// inputResenje.setAttribute('type', 'number')

// const btn = document.createElement('button')
// btn.textContent = 'Izracunaj'

// document.body.append(inputOsnova, inputEksponent, inputResenje, btn)

// btn.addEventListener('click', () => {
//     inputResenje.value = racunajStepen(+inputOsnova.value, +inputEksponent.value)
// })

// 2. Izracunati faktorijel.
//      5! = 5 * 4 * 3 * 2 * 1

// const inputFaktorijel = document.querySelector('#f')
// const inputResenje = document.querySelector('#r')
// const btn = document.querySelector('button')

// const faktorijel = (vrednost) => {
//     let resenje = 1
//     for(let i = vrednost; i > 1; i--) {
//         resenje *= i
//     }
//     return resenje
// }

// btn.addEventListener('click', () => {
//     inputResenje.value = faktorijel(+inputFaktorijel.value)
// })

// 3. Proveriti da li postoji user u bazi.

// const inputUser = document.querySelector('#user')
// const btn = document.querySelector('button')

// const checkUser = (user) => {
//     let nizUsera = ['Marko', 'Sanja', 'Magdalena', 'Stefan']
//     let provera = nizUsera.find(el => el === user.value) !== undefined ? true : false

//     if(provera) {
//         user.style.border = '2px solid green'
//     } else {
//         user.style.border = '2px solid red'
//     }
// }

// btn.addEventListener('click', () => {
//     checkUser(inputUser)
// })

// 4. Refaktorisati paragraf tako da posle tacke uvek dodje razmak.

// const p = document.querySelector('p')
// let refaktorisanTekst = ''
// // let nizRecenica = p.textContent.split('.')
// for(let i = 0; i < p.textContent.length; i++) {
//     refaktorisanTekst += p.textContent.charAt(i)
//     if(p.textContent.charAt(i) === '.')
//         refaktorisanTekst += ' ' 
// }

// p.textContent = refaktorisanTekst

// 5. Napisati kod koji iz inputa kupi broj i ispisuje broj sa ciframa u obrnutom redosledu u drugom inputu kao resenje. Koristiti dugme. (primer: 1234 => 4321)

// const inputBroj = document.querySelector('#broj')
// const btn = document.querySelector('button')
// const inputObrnutiBroj = document.querySelector('#ispisObrnutogBroja')

// const obrnutiBroj = (broj) =>{
    
//         let cifra
//         let suma = 0
//        while(broj > 0){
//         cifra = broj % 10
//         suma = suma * 10 + cifra
//         broj = Math.floor(broj / 10)
//        }
//        return suma
// }
// btn.addEventListener('click', ()=>{
//     inputObrnutiBroj.value = obrnutiBroj(+inputBroj.value)
// })


// 2. Napraviti par korisnika kao objekte u nizu i dodati polja po izboru. Zatim ih lepo ispisati na stranici u nekom divu. (Potruditi se malo oko stilizovanja)

// let korisnici = [
//     {
//         ime: 'Marko',
//         prezime: 'Markovic',
//         godine: 22
//     },
//     {
//         ime: 'Jovan',
//         prezime: 'Jovanovic',
//         godine: 32
//     },
//     {
//         ime: 'Sreten',
//         prezime: 'Lazarevic',
//         godine: 29
//     },
//     {
//         ime: 'Lazar',
//         prezime: 'Ivanovic',
//         godine: 37
//     }
// ]

// const divIspis = document.querySelector('div')

// const ispis = (niz) =>{
//     niz.forEach(korisnici =>{

//         const noviDiv = document.createElement('div')
//         noviDiv.className = 'ispisDiv'
//         noviDiv.style.color = 'green'

//         const pIme = document.createElement('p')
//         pIme.textContent = korisnici.ime

//         const pPrezime = document.createElement('p')
//         pPrezime.textContent = korisnici.prezime

//         const pGodine = document.createElement('p')
//         pGodine.textContent = korisnici.godine

//         noviDiv.append(pIme,pPrezime,pGodine)
//         divIspis.appendChild(noviDiv)
//     })
// }

// ispis(korisnici)

// 3. Korisnike iz prethodnog zadatka koristiti i ispisati samo one opcije cije ime pocinje na slovo koje se zada u inputu. Moze se koristiti dugme ili Enter.
// 4. Napisati skriptu koja pravi x paragrafa. Svaki paran paragraf ima 30 reci lorem ipsum, a svaki treci ima zelenu boju pozadine.
// 5. Napraviti igru kamen-papir-makaze u jednu pobedu. Postoji jedan input za unos zeljene opcije. U paragrafu ispod se na klik ispisuje pobednik, a u konzoli se ispisuje sta je racunar odabrao. Za opciju koju racunar treba da dobije koristiti random()


// for(let i = 1; i<=20; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// let n = 10
// let m = 20
// let a = 3
// let suma = 0
// while(n <= m){
//   if(n % a !== 0){
//       suma += n
//     }
//     n++
// }
// console.log(suma)

// const ul = document.createElement('ul')
// for(let i = 1; i<= 10; i++){
//     const li = document.createElement('li')
//     li.textContent = `Element ${i}`
//     if(i % 3 === 0){
//         li.style.color = 'pink'
//     }
//     ul.append(li)
// }
// document.body.appendChild(ul)