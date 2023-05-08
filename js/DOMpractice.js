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

// VEZBA REDOVI

// let brojRedova = 6
// const table = document.createElement('table')
// table.setAttribute('border', '1')
// for(let i = 0; i < brojRedova; i++) {
//     const tr = document.createElement('tr')
//     const td1 = document.createElement('td')
//     const td2 = document.createElement('td')
//     td1.textContent = 'Tekst'
//     td2.textContent = 'Tekst'
//     td1.classList.add('cls')
//     td2.classList.add('cls')
//     if(i % 2 !== 0){
//         td1.style.background = 'pink'
//         td2.style.background = 'pink'
//     }
//     tr.append(td1, td2)
//     table.appendChild(tr)
// }

// document.body.appendChild(table)

// vezba lista

// const lista = document.createElement('ul')
// for(let i = 1; i <= 10; i++) {
//     if(i % 3 === 0) {
//         const lista1 = document.createElement('ul')
//         lista1.style.listStyleType = 'circle'
//         const li = document.createElement('li')
//         li.textContent = `Element ${i}`
//         li.style.color = 'purple'
//         lista1.appendChild(li)
//         lista.appendChild(lista1)
//         continue
//     }
//     const li = document.createElement('li')
//     li.textContent = `Element ${i}`
//     lista.appendChild(li)
// }

// document.body.appendChild(lista)

// vezba sahovska tabla

// let n = 0

// for(let i = 1; i <= 8; i++) {
//     const divRed = document.createElement('div')
//     divRed.style.display = 'flex'
//     for(let j = 1; j <= 8; j++) {
//         const span = document.createElement('span')
//         span.style.border = '1px solid #000'
//         span.style.padding = '.5rem'
//         span.style.width = '30px'
//         span.style.textAlign = 'center'
//         span.textContent = j + n
//         if(i % 2 == 0) {
//             if(j % 2 !== 0) {
//                 span.style.color = '#fff'
//                 span.style.backgroundColor = '#000'
//             }

//         } else {
//             if(j % 2 === 0) {
//                 span.style.color = '#fff'
//                 span.style.backgroundColor = '#000'
//             }
//         }
//         divRed.appendChild(span)
//     }
//     document.body.appendChild(divRed)
//     n += 8
// }


// 3. Korisnike iz prethodnog zadatka koristiti i ispisati samo one opcije cije ime pocinje na slovo koje se zada u inputu. Moze se koristiti dugme ili Enter.

//   let korisnici = [
//         {
//             ime: 'Marko',
//             prezime: 'Markovic',
//             godine: 22
//         },
//         {
//             ime: 'Jovan',
//             prezime: 'Jovanovic',
//             godine: 32
//         },
//         {
//             ime: 'Sreten',
//             prezime: 'Lazarevic',
//             godine: 29
//         },
//         {
//             ime: 'Lazar',
//             prezime: 'Ivanovic',
//             godine: 37
//         }
//     ]

//     const input = document.querySelector('#pocetnoSlovo')
//     const btn = document.querySelector('button')
//     const divIspis = document.querySelector('div')


//     const input = document.querySelector('#pocetnoSlovo')
//     const btn = document.querySelector('button')
//     const divIspis = document.querySelector('div')

// const ispis = (korisnici) =>{
//     korisnici.forEach(user =>{

//         const noviDiv = document.createElement('div')

//         const pIme = document.createElement('p')
//         pIme.textContent = user.ime

//         const pPrezime = document.createElement('p')
//         pPrezime.textContent = user.prezime

//         const pGodine = document.createElement('p')
//         pGodine.textContent = user.godine

//         noviDiv.append(pIme,pPrezime,pGodine)
//         divIspis.appendChild(noviDiv)
//     })
// }
// btn.addEventListener('click',()=>{
//     if(input.value.trim() === ''){
//         alert('mora se uneti simbol')
//         return
//     }
//     for(let i = 0; i<korisnici.length; i++){
//         if(input.value === korisnici[i].ime.charAt(0)){
//             ispis(korisnici)
//         }
//     }

// const ispis = (korisnici) =>{
//     divIspis.textContent = ''
//     korisnici.forEach(user =>{
//         const noviDiv = document.createElement('div')

//         const pIme = document.createElement('p')
//         pIme.textContent = user.ime

//         const pPrezime = document.createElement('p')
//         pPrezime.textContent = user.prezime

//         const pGodine = document.createElement('p')
//         pGodine.textContent = user.godine

//         noviDiv.append(pIme,pPrezime,pGodine)
//         divIspis.appendChild(noviDiv)
//     })
// }
// btn.addEventListener('click',()=>{
//     if(input.value.trim() === ''){
//         alert('mora se uneti simbol')
//         return
//     }
//     // let result = []
//     // for(let i = 0; i<korisnici.length; i++){
//     //     if(input.value === korisnici[i].ime.charAt(0)){
//     //         result.push(korisnici[i])
//     //     }
//     // }
//     // ispis(result)

//     korisnici.filter(el => el.ime.charAt(0) === input.value).length === 0 ? alert('Poruka') : ispis(korisnici.filter(el => el.ime.charAt(0) === input.value))

// })

//  4. Napisati skriptu koja pravi x paragrafa. Svaki paran paragraf ima 30 reci lorem ipsum, a svaki treci ima zelenu boju pozadine.
// const div = document.querySelector('.div')
// for(let i = 1; i <=15; i++){

//     const pParagraf = document.createElement('p')
//     pParagraf.textContent = ' Lorem, ipsum dolor'

//     if(i % 2 === 0){
//         pParagraf.textContent = ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt deleniti illum omnis molestiae, officia id corporis aliquam ullam atque quidem excepturi dolores et porro velit distinctio blanditiis temporibus exercitationem earum.'
//     }
//      if(i % 3 === 0){
//         pParagraf.style.backgroundColor = 'green'
//     }

// div.append(pParagraf)
// }
// 5. Napraviti igru kamen-papir-makaze u jednu pobedu. Postoji jedan input za unos zeljene opcije. U paragrafu ispod se na klik ispisuje pobednik, a u konzoli se ispisuje sta je racunar odabrao. Za opciju koju racunar treba da dobije koristiti random()

// const select = document.querySelector('#select')
// const btn = document.querySelector('button')
// const paragraf = document.querySelector('p')

// let igra = {
//     papir: 'papir',
//     kamen: 'kamen',
//     makaze: 'makaze'
// }

// let random = Math.floor(Math.random() * 3)

// switch(random) {
//     case 0:
//     case 1:
//     case 2:
// }

// function rendom (igra){
//     const key = Object.keys(igra)
//     return key[Math.floor(Math.random() * key.length)]
// }
// console.log(rendom(igra));

// function pobednik(select){
//     if(select.value === 'izaberi'){
//         alert('mora se izabrati iz padajuceg menija')
//         return
//     }

//     let racunar = rendom(igra)
//     let korisnik = select.value

//     if(korisnik === 'papir' && racunar === 'papir')
//         paragraf.textContent = 'nereseno'
//      if(korisnik === 'kamen' && racunar === 'kamen')
//         paragraf.textContent = 'nereseno'
//      if(korisnik === 'makaze' && racunar === 'makaze')
//         paragraf.textContent = 'nereseno'

//     if(korisnik === 'papir' && racunar === 'kamen' || korisnik === 'kamen' && racunar === 'makaze' || korisnik === 'makaze' && racunar === 'papir'){
//         paragraf.textContent = 'pobednik je korisnik'
//     }
//     else{
//         paragraf.textContent = 'pobednik je komp'
//     }
// }
// btn.addEventListener('click',()=>{
//     pobednik(select)
// })


//   6. Ispisati brojeve od 1 do 20 

// for(let i = 1; i<= 20; i++){
//     console.log(i);
// }

//   7. Ispisati brojeve od 20 do 1 

// for(let i = 20; i >= 1; i--){

//     console.log(i);
// }

//   8. Ispisati parne brojeve od 1 do 20 (uraditi zadatak na dva nacina)

// for(let i = 0; i <=20; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }


//   9. Ispisati dvostruku vrednost brojeva od 5 do 15
// let rezultat = 0
// for(let i = 5; i <= 15; i++){
//     rezultat = i * 2
//     console.log(rezultat);
// }

//   10. Odrediti sumu brojeva od 1 do n

// let n = 5
// let suma = 0

// for(let i = 1; i<= n; i++){
//     suma += i
// }
// console.log(suma)

//   11. Odrediti sumu brojeva od n do m 

// let n = 10
// let m = 20
// let suma = 0
// for(let i = n; i<= m; i++){
//     suma+=i
// }
// console.log(suma)

//   12. Odrediti proizvod brojeva od n do m
// let n = 2
// let m = 4
// let suma = 1
// for(let i = n; i<= m; i++){
//     suma*= i
// }
// console.log(suma)

//   13. Odrediti sumu kvadrata brojeva od n do m
// let n = 2
// let m = 4
// let suma = 0
// for(let i = n; i<= m; i++){
//     suma += Math.pow(i,2)
// }
// console.log(suma)

// 1. Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. 
//    For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).

// for(let i = 1; i <= 3; i++) {
//     const img = document.createElement('img')
//     img.setAttribute('src', `./img/${i}.jpg`)
//     document.body.appendChild(img)
// }

// 3. Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100. *

// let proizvod = 1
// for(let i = 20; i <=100; i++){
//     if(i % 11 === 0){
//         proizvod*= i
//     }
// }
// console.log(proizvod)

// 4. Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.
// let brojac = 0
// for(let i = 5; i<= 150; i++){
//     if(i % 13 === 0)
//         brojac++
// }
// console.log(brojac)

// 5. Ispisati aritmetičku sredinu brojeva od n do m.

// let n = 10
// let m = 20
// let zbir = 0
// let sredina = 0

// for(let i = n; i<=m; i++){
//     zbir += i
//     sredina = zbir / 2
// }
// console.log(sredina)

// 6. Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno. *

// let n = -2
// let m = 5
// let brojacNegativan = 0
// let brojacPozitivan = 0

// for(let i=n; i<=m; i++){
//     if(i < 0){
//         brojacNegativan++
//     }
//     if(i>= 0){
//         brojacPozitivan++
//     }
// }
// console.log(brojacNegativan);
// console.log(brojacPozitivan);

// 7. Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5. *

// let brojac = 0
// for(let i = 5; i <= 50; i++){
//     if(i % 3 === 0 || i % 5 === 0)
//     brojac++
// }
// console.log(brojac)

// 8. Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.

// let n = 4
// let m = 24
// let brojac = 0
// let suma = 0

// for(let i = n; i<=m;i++){
// let provera = i % 10 === 4
// if(provera){
//     suma+= i
//     brojac++
// }
// }
// console.log(suma)
// console.log(brojac);

// 9. Odrediti sumu brojeva od n do m koji nisu deljivi brojem a.

//     let n = 2
//     let m = 10
//     let a = 4
//     let suma = 0

//     for(let i = n; i<= m; i++){

//     if(i % a !== 0){
//         suma+= i
//     }
// }
// console.log(suma);

// 10. Odrediti proizvod brojeva od n do m koji su deljivi brojem a.

//     let n = 2
//     let m = 18
//     let a = 4
//     let proizvod = 1

//     for(let i = n; i<= m; i++){

//     if(i % a === 0){
//         proizvod*= i
//     }
// }
// console.log(proizvod);

// 11. Odrediti sa koliko brojeva je deljiv uneti broj k.

// let k = 5
// let brojac = 0
// for(let i = 1; i<=k; i++){
//    if (k % i === 0){
//        brojac++
//    }
// }
// console.log(brojac);

// 12. Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.

// function prostBroj(broj) {
//     for(let i = 2; i < Math.sqrt(broj); i++) {
//         if(broj % i === 0)
//             return false
//     }
//     return true
// }
// console.log(prostBroj(3))


// 1. Ispisati brojeve od 1 do 20:
//     -Svaki u istom redu
//     -Svaki u novom redu

// let i = 0
// while(i<20){
//     i++

// }
// console.log(i)

// 2. Ispisati brojeve od 20 do 1.
// let i = 20
// while(i>=1){
//     console.log(i);
//     i--
// }

// 3. Ispisati parne brojeve od 1 do 20.

// let i = 0
// while(i<=20){
//     i++
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// 4. Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje
// let i = 0
// while(i<=10){
//     i++
//     const paragraf = document.createElement('p')
//     paragraf.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Quas ipsa atque sunt quia perspiciatis blanditiis nam sint commodi'
//     if(i % 2 === 0){
//         paragraf.style.color = 'red'
//     } else if(i % 3 === 0){
//         paragraf.style.color = 'blue'
//     }else{
//         paragraf.style.color = 'green'

//     }
//     document.body.append(paragraf)
// }
// 5. Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira

// let i =1
// while(i <= 3){
//     const img = document.createElement('img')
//     img.setAttribute('src', `./img/${i}.jpg`)
//     if(i % 2 === 0){
//         img.style.borderRadius = '50px'

//     }
//     document.body.appendChild(img)

//     i++
// }

// 6. Odrediti sumu brojeva od 1 do 100

// let i = 1
// let zbir = 0

// while(i<100){
//     zbir +=i
//     i++
// }
// console.log(zbir)

// 7. Odrediti sumu brojeva od 1 do n
// let i = 1
// let n = 45
// let zbir = 0
// while(i<n){
//     zbir += i
//     i++
// }
// console.log(zbir)

// 8. Odrediti sumu brojeva od n do m

// let n = 12
// let m = 20
// let suma = 0
// while(n<=m){
//     suma += n
//     n++
// }
// console.log(suma)

// 9. Odrediti proizvod brojeva od n do m

// let n = 5
// let m = 7
// let proizvod = 1

// while(n<=m){
//     proizvod *= n
//     n++
// }
// console.log(proizvod)

// 10. Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m

// let n = 2
// let m = 6
// let suma = 0
// let suma1 = 0

// while(n<=m){
//     if(n % 2 === 0){
//         suma+= Math.pow(n,2)
//         n++
//     }else if (n % 2 !==0){
//         suma1+= Math.pow(n,3)
//         n++
//     } 
//     }
//     console.log(suma)
//     console.log(suma1)



// 11. Odrediti sa koliko brojeva je deljiv uneti broj k
// let k = 20
// let i = 1
// let brojac = 0
// while(i <= k){
//     if(k % i === 0)
//         brojac++
//         i++

// }
// console.log(brojac)

// 12. Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.

// let n = 7
// let i = 2

// function prostBroj(broj) {
//     // let prost = true
//     while (i < n) {
//         if (n % i === 0)
//             return false
//             // prost = false
//         i++
//     }

//     // if (prost)
//     //     console.log('Broj je prost')
//     // else
//     //     console.log('Broj nije prost')

//     return true
// }

// console.log(prostBroj(n))

// KLASE
// #Domaci_15

// 1. Napraviti klasu Sastojak koja sadrzi polja naziv, kolicinu i cenu, a zatim napraviti metodu koja racuna njenu cenu.

// class Sastojci {
//     constructor(naziv, kolicina, cena) {
//         this.naziv = naziv
//         this.kolicina = kolicina
//         this.cena = cena
//     }

//     ukupnaCena() {
//         return this.cena * this.kolicina
//     }
// }

// const sastojci1 = new Sastojci('torta', 3, 1000)
// console.log(sastojci1.ukupnaCena())

// 2. Napraviti klasu Recept koja prima sastojke za pripremu istog. (imace polja naziv, sastojci, nacinPripreme, tezinaPripreme, kao i metodu za ispis svih sastojaka i cenuRecepta)

// FIZZBUZZ
// 3. Ukoliko je broj deljiv sa 3, ispisati fizz; Ukoliko je broj deljiv sa 5, ispisati buzz; Ukoliko je broj deljiv sa 7, ispisati zazz; Ukoliko je deljiv sa kombinacijom, kombinovati i stringove. (prvih 100 brojeva)

// const fizzBuzz = (broj) => {
//     let str = ''

//     if(broj % 3 === 0) str += 'fizz'
//     if(broj % 5 === 0) str += 'buzz'
//     if(broj % 7 === 0) str += 'zazz'

//     if(str)
//         return str
//     return broj
// }

// for(let i = 10; i <= 15; i++) {
//     console.log(fizzBuzz(i))
// }

// #Domaci_16

// 1. Napisati funkciju pozdrav kojoj se prosleđuje ime i prezime, a funkcija ispisuje pozdrav.Na primer za uneto ime Jelena i prezime Matejić, funkcija ispisuje Zdravo Jelena Matejić. 

// let ime = 'Jelena'
// let prezime = 'Matejic'

// function pozdrav (ime, prezime){
//     return `Pozdrav ${ime} ${prezime}`
// }
// console.log(pozdrav(ime,prezime))

// 2. Napisati funkciju zbir koja računa zbir dva realna broja.Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.

    // function kalkulator(broj1, broj2, operacija) {
    //         switch (operacija) {
    //             case '+' : 
    //                 return broj1 + broj2
                    
    //                 case '-':
    //                     return broj1 - broj2
                    
    //                 case '*':
    //                     return broj1 * broj2
                    
    //                 case '/':
    //                     return broj1 / broj2
            
    //             default:
    //                  return'nije dobra operacija'
    //         }
    // }
    // let operacija  = '.'

    // console.log(kalkulator(5,3,operacija))

  
// 3. Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

// let n = 11

// function neparan(broj){
//    if (broj % 2 === 0){
//        return true
// }
//     return false
// }
// console.log(neparan(n))

// 4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja.Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

// let broj1 = 2
// let broj2 = 10
// let broj3 = 25
// let broj4 = 65

// function maks2(broj1,broj2){
//     if(broj1 > broj2){
//         return broj1
//     }else
//     return broj2
// }
// console.log(maks2(broj1,broj2))

// function maks4(broj1,broj2,broj3,broj4){
//     return (Math.max(broj1,broj2,broj3,broj4))
// }
// console.log(maks4(broj1,broj2,broj3,broj4))

// 5. Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

// let img = 0
//     function slika(sl){
//         const img = document.createElement('img')
//         img.setAttribute('src', './img/1.jpg')
//         document.body.append(img)
//     }
//     slika(img)

// 6. Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

    // const paragraf = document.createElement('p')
    // paragraf.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, libero.'

    // function bojaTeksta(boja) {
    //     paragraf.style.color = boja
    // }
    // let boja = 'green'
    // bojaTeksta(boja)
    // document.body.append(paragraf)

// 7. Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n - ti dan u nedelji(npr.za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... , a za 7 opet “Nedelja”).
//     Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n - ti mesec u godini ?

    // function sedmiDan(dan){
    //     switch (dan) {
    //         case 0 :
    //             return 'Nedelja'
    //             case 7 :
    //                 return 'Nedelja'

    //             case 1:
    //                 return 'Ponedeljak'
                
    //             case 2:
    //                 return 'Utorak'
                
    //             case 3:
    //                 return 'Sreda'
                
    //             case 4:
    //                 return 'Cetvrtak'
                
    //             case 5:
    //                 return 'Petak'

    //             case 6:
    //                 return 'Subota'
                
    //         default:
    //             return 'nije dobar dan u nedelji'
    //     }
    // }
    // let dan = 7
    
    // console.log(sedmiDan(dan))

//         8. Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
//     - Prebrojati koliko ima ovakvih brojeva od n do m.

    // function deljivSaTri(n,m){
    //     for(let i = n; i <= m; i++){
    //        if(i % 3 === 0){
    //         return i
    //     }
    // }
    // }
    // console.log(deljivSaTri(3,12))


        
// 9. Napisati funkciju sumiraj koja određuje sumu brojeva od n do m.Brojeve n i m proslediti kao parametre funkciji.

// let suma = 0
// function sumiraj (n,m){
//     for(let i = n; i <=m; i++){
//             suma += i 
//         }
//         return suma
//     }
//     console.log(sumiraj(2,5))

// 10. Napisati funkciju množi koja određuje proizvod brojeva od n do m.Brojeve n i m proslediti kao parametre funkciji.

// let proizvod = 1
// function mnozi(n, m) {
//     for (let i = n; i <= m; i++) {
//         proizvod *= i
//     }
//     return proizvod
// }
// console.log(mnozi(2, 5))

// 11. Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.Brojeve n i m proslediti kao parametre funkciji.

// let suma = 0
// function aritmetizkaSredina(n, m) {
//     for (let i = n; i <= m; i++) {
//         suma += i
//     }
//     return suma / 2
// }
// console.log(aritmetizkaSredina(2, 4))

// 12. Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m.Brojeve n i m proslediti kao parametre funkciji.

// let zbir = 0
// let brojac = 0
//     function aritmetickaSredina(n,m){
//             for(let i = n; i <= m; i++){
//                 if(i % 10 === 3){
//                     zbir += i
//                     brojac ++
//                 }
//             }
//             return zbir / brojac
//     }
//     console.log(aritmetickaSredina(2,23))

   
// 13. Napisati funkciju kojoj se prosleđuje ceo broj, a ona ispisuje tekst koji ima prosleđenu veličinu fonta.
// 14. Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora.
// 15. Dobili ste plaćenu programersku praksu u trajanju od n meseci.Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara.Brojeve n, a i d određujete sami.Napišite funkciju kojoj se prosleđuju brojevi n, a i d.Funkcija treba da vrati vrednost koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.Testirati zadatak(pozvati funkciju i ispisati vrednost koju ona vraća).

        // let n = 6
        // let a = 40000
        // let d = 5000
        // let plata = 0

        // function placenaPraksa(n,a,d){
        //     for(let i = 1; i <= n; i++){
        //        if(i == 1){
        //            plata += a 
        //        }else{
        //         plata += a 
        //         plata += d
                
        //        }
        //     }
        //     return plata
        // }
        // console.log(placenaPraksa(n,a,d))




// let niz = [1,2,3,4,5,6]
//     console.log(niz.filter(el => el % 2 === 0))


// #Domaci_17

// 1. Ispisati sve elemente niza od 5 stringova.

    // let niz = ['marko', 'obdojka', 'nauka', 'broj', 'prezime']
    // console.log(niz)

// 2. Odrediti zbir elemenata celobrojnog niza.

    // let niz = [1,3,6,4,6]
    // let zbir = 0
    // for(let i = 0; i<niz.length; i++){
    //      zbir += niz[i]
    //     }
    //     console.log(zbir)

// 3. Odrediti proizvod elemenata celobrojnog niza.

    // let niz = [1,3,6,4,6]
    // let proizvod = 1

    // for(let i = 0; i<niz.length; i++){
    //     proizvod *= niz[i]
    // }
    // console.log(proizvod)

// 4. Odrediti srednju vrednost elemenata celobrojnog niza.

// let niz = [1,3,6,4,6]
//     let srednjaVrednost = 0

//     for(let i = 0; i<niz.length; i++){
//         srednjaVrednost += niz[i] / 2
//     }
//     console.log(srednjaVrednost)

// 5. Odrediti maksimalnu vrednost u celobrojnom nizu.

// let niz = [1,3,623,4,6,77]

// console.log(Math.max(...niz))

// 6. Odrediti minimalnu vrednost u celobrojnom nizu.

// let niz = [1,3,6,4,6,77]
// console.log(Math.min(...niz))

// 7. Odrediti indeks maksimalnog elementa celobrojnog niza.

// let niz = [1,3,6,4,6,77]
// console.log(niz.charAt(Math.max))
    

// 8. Odrediti indeks minimalnog elementa celobrojnog niza.
// 9. Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
// let niz = [1,3,6]
// let zbir = 0
// let srednjavrednst
// function srednjaVrednost(niz){
//     for(let i = 0; i<= niz.length; i++){
//         zbir += i
//     }
//     return zbir
//     // srednjavrednst = zbir / 2
//     // if(srednjaVrednost > niz[i]){
//     //     return i
//     // }
// }
// console.log(srednjaVrednost(niz));

// 10. Izračunati zbir pozitivnih elemenata celobrojnog niza.
// 11. Odrediti broj parnih elemenata u celobrojnom nizu.
// 12. Odrediti broj parnih elemenata sa neparnim indeksom.
// 13. Izračunati sumu elemenata niza sa parnim indeksom.
// 14. Promeniti znak svakom elementu celobrojnog niza.
// 15. Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.