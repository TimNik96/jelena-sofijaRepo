// 1.	Date su dve promenljive u kojima su dati vreme u satima i minutima.  Izračunati koliko minuta je prošlo od ponoći.
// let sati = 5
// let minuti = 55

// let vreme = sati * 60 + minuti
// console.log(vreme)

// 2.	Za dato vreme u minutima koji su prošli od ponoći, odrediti koliko je to u satima i minutima.

// let minuti = 453

// let min = minuti % 60
// let sati = Math.floor(minuti / 60)
// console.log(sati,min)

// 3.	Date su dve promenljive kojima se zadaje cena robe i uneta novčanica kojom kupac plaća račun. Ispisati koliki kusur kasirka treba da mu vrati.

// let novcanica = 5000
// let cena = 325

// let kusur = novcanica - cena
// console.log(kusur)

// 4.	Uraditi zadatak 1 tako da se dohvati trenutno vreme, i za njega odredi koliko minuta je prošlo od ponoći.

// let sati = new Date().getHours()
// let minuti = new Date().getMinutes()

// let vreme = sati * 60 + minuti
// console.log(vreme)

// 5.	Ispisati u konzoli današnji datum u formatima dd.mm.yyyy. i yyyy/mm/dd.

// let dani = new Date().getDate()
// let mesec = new Date().getMonth() + 1
// let godina = new Date().getFullYear()

// let kalendar = `${dani}:${mesec}:${godina}`
// let kalendar1 = `${godina}:${mesec}:${dani}`

// console.log(kalendar,kalendar1)

// 6.	Data je promenljiva u kojoj je ukupan broj evra koji posedujemo, kao i promenljiva u kojoj je vrednost trenutnog kursa. Odrediti koliko ćemo imati dinara nakon razmene. Uraditi isto i za konverziju iz dinara u evre.

// let kursEvra = 118
// let evro = 50
// let dinari = 3000

// let konverzijuUevre = dinari / kursEvra
// let konverzijuUDinare = kursEvra * evro

// console.log(konverzijuUDinare, konverzijuUevre);

// 7.	Data je promenljiva u kojoj je ukupan broj evra koji posedujemo, kao i promenljive u kojima je vrednost kurseva evro-dinar, kao i dolar-dinar, redom. Odrediti koliko ćemo imati dolara nakon razmene. Uraditi isto i za konverziju iz dolare u evre.

// let evri = 234
// let evrodinar = 118
// let dolardinar = 102

// let dinara = evri * evrodinar
// let dolara = evri * evrodinar / dolardinar

// console.log(dinara, dolara)

// 8. Za unetu zapreminu proizvoda, u paragrafu ispisati “Throw away”, ukoliko je proizvod zapremine veće od 100ml. U suprotnom ispisati “Pack up”.

// const paragraf = document.createElement('p')
// const body = document.body
// body.append(paragraf)
// let zapremina = 150

// if(zapremina > 100){
//     paragraf.textContent = 'Trow away'
// }else{
//     paragraf.textContent = 'Pack up'
// }


// 9. Za unetu temperaturu u paragrafu, ispisati “Temperatura u plusu” crvenom bojom ili “Temperatura u minusu” plavom bojom. Ukoliko je temperatura nula, računati kao temperaturu u plusu.

// const paragraf = document.createElement('p')
// const body = document.body
// body.append(paragraf)

// let temperatura = 23
// if(temperatura >= 0){
//     paragraf.textContent = 'temperatura u plusu'
//     paragraf.style.color = 'red'
// }else{
//     paragraf.textContent = 'temperatura u minusu'
//     paragraf.style.color = 'blue'
// }

// 10. U odnosu na pol koji je korisnik uneo u promenljivu  (“m” za muški pol ili “z” za ženski pol)  na ekranu prikazati odgovarajući avatar (odgovarajuću sličicu).

// const forma = document.querySelector('form')
// const input = document.querySelector('#pol')
// const div = document.querySelector('div')
// const body = document.body

// let avatarM = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V287.8L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H144z"/></svg>'
// let avatarZ = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M224 64A64 64 0 1 0 96 64a64 64 0 1 0 128 0zM88 400v80c0 17.7 14.3 32 32 32s32-14.3 32-32V400h16v80c0 17.7 14.3 32 32 32s32-14.3 32-32V400h17.8c10.9 0 18.6-10.7 15.2-21.1l-31.1-93.4 28.6 37.8c10.7 14.1 30.8 16.8 44.8 6.2s16.8-30.7 6.2-44.8L254.6 207c-22.4-29.6-57.5-47-94.6-47s-72.2 17.4-94.6 47L6.5 284.7c-10.7 14.1-7.9 34.2 6.2 44.8s34.2 7.9 44.8-6.2l28.7-37.8L55 378.9C51.6 389.3 59.3 400 70.2 400H88z"/></svg>'

// forma.addEventListener('submit', (event) => {
//     event.preventDefault()

//     if(input.value.trim() === 'm' ){
//         div.innerHTML = avatarM
//     }else if(input.value.trim() ==='z'){
//         div.innerHTML = avatarZ
//     }else{
//         alert('proverite unos za vas avatar')
//     }
// })

// input.addEventListener('keypress', (event) => {
//     if (event.key === 'Enter') {
//         // logika
//     }
// })

// 1. U odnosu na preuzeto trenutno vreme sa računara, u paragrafu ispisati da li je trenutno jutro ili popodne.
// Popodne je kada prođe 12:00 sati, ne računajući i to vreme.

// const paragraf = document.createElement('p')
// const body = document.body
// body.append(paragraf)

// let sati = new Date().getDate()
// let minuti = new Date().getMinutes()
// let sekunde = new Date().getMinutes()

// let vreme = `${sati}:${minuti}:${sekunde}`

// if(vreme <= '12'){
//     paragraf.textContent = 'trenutno je jutro'
// }else{
//     paragraf.textContent = 'trenutno je popodne'
// }


// 2. Za preuzetu godinu sa računara i unetu godinu rođenja izračunati i u paragrafu ispisati da li je osoba punoletna ili maloletna. osoba je punoletna kada napuni 18 godina.

// const paragraf = document.createElement('p')
// const body = document.body
// body.append(paragraf)

// let trenutnaGodina = new Date().getFullYear()

// console.log(trenutnaGodina)

// let godinaRodjenja = 2010

// let brojGodina = trenutnaGodina - godinaRodjenja

// if(brojGodina > 18){
//     paragraf.textContent = 'osoba je punoletna'
// }else{
//     paragraf.textContent = 'osoba je maloletna'
// }


// 3. Odrediti i u paragrafu ispisati najveći od tri uneta broja (samo uz pomoć if naredbi, bez korišćenja logičkih operatora).

// const paragraf = document.createElement('p')
// const body = document.body
// body.append(paragraf)

// let broj1 = 5
// let broj2 = 10
// let broj3 = 15

// if(broj1 > broj2 && broj1 > broj3){
//     paragraf.textContent = broj1
// }else if(broj2 > broj1 && broj2 > broj3){
//     paragraf.textContent = broj2
// }else{
//     paragraf.textContent = broj3
// }

// 4. Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend. 

// const paragraf = document.createElement('p')
// const body = document.body
// body.append(paragraf)

// let dan = new Date().getDay()

// if(dan > 5){
//     paragraf.textContent = 'vikend je'
// }else{
//     paragraf.textContent = 'radni dan je'
// }

// 5. Na osnovu unetog broja poena u paragrafu ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit nekom ocenom  ukoliko ima više od 50 poena, u suprotnom treba ispisati da je pao ispit. 
//    Za više od 50 poena učenik dobija ocenu 6, 
//    za više od 60 poena učenik dobija ocenu 7,
//    za više od 70 poena učenik dobija ocenu 8, 
//    za više od 80 poena učenik dobija ocenu 9 i 
//    za više od 90 poena učenik dobija ocenu 10.

// const paragraf = document.createElement('p')
// const body = document.body
// body.append(paragraf)

// let brojPoena = 67

// if (brojPoena <= 50) {
//     paragraf.textContent = 'ucenik je pao ispit'
// } else if (brojPoena <= 60) {
//     paragraf.textContent = 'ucenik je dobio 6'
// } else if (brojPoena <= 70) {
//     paragraf.textContent = 'ucenik je dobio 7'
// } else if (brojPoena <= 80) {
//     paragraf.textContent = 'ucenik je dobio 8'
// } else if (brojPoena <= 90) {
//     paragraf.textContent = 'ucenik je dobio 9'
// } else if (brojPoena <= 100) {
//     paragraf.textContent = 'ucenik je dobio 10'
// }

// 6. Za vreme preuzeto sa računara ispisati dobro jutro za vreme manje od 12 sati ujutru, dobar dan za vreme manje od 18 sati, u ostalim slučajevima ispisati dobro veče.

// const paragraf = document.createElement('p')
// const body = document.body
// body.append(paragraf)

// let sati = new Date().getDate()
// let minuti = new Date().getMinutes()
// let sekunde = new Date().getMinutes()

// let trenutnoVreme = `${sati}:${minuti}:${sekunde}`

// if(sati < 12){
//     paragraf.textContent = 'dobro jutro'
// }else if(sati < 18){
//     paragraf.textContent = 'dobar dan'
// }else{
//     paragraf.textContent = 'dobro vece'
// }

// 7. Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.

// const paragraf = document.createElement('p')
// const body = document.body
// body.append(paragraf)

// let sati = new Date().getDate()
// let minuti = new Date().getMinutes()
// let sekunde = new Date().getMinutes()

// let trenutnoVreme = `${sati}:${minuti}:${sekunde}`

// if(sati < 9 && (sati >= 17 && minuti >= 0 && sekunde > 0)){
//     paragraf.textContent = 'trenutno firma ne radi'
// }else{
//     paragraf.textContent = ' firma radi'
// }

// let niz = [1,2,3,4]
// // niz.pop()
// niz.splice(0,1)

// console.log(niz);

// let niz = [1, 2, 3, 4, 5]

// niz.splice(Math.floor((niz.length - 1) / 2), 1, 10)

// console.log(niz)

// let niz = [1, 20, 33, 4, 5]
// let max = niz[0]

// for(let i = 1; i < niz.length; i++) {
//     if(niz[i] > max)
//         max = niz[i]
// }

// console.log(max)
// // SPREAD OPERATOR (ARRAY)
// console.log(Math.max(...niz))

// let noviNiz = [...niz, 10, 20, 30 ]

// console.log(noviNiz)
// // REST OPERATOR (ARRAY)
// function maksimalnaVrednost(...brojevi) {
//     let max = brojevi[0]
//     for(let i = 1; i < brojevi.length; i++) {
//         if(brojevi[i] > max)
//             max = brojevi[i]
//     }
//     return max
// }

// console.log(maksimalnaVrednost(10, 30, 200, 22, 48, 405, 12))

// SPREAD NAD OBJEKTOM

// let osoba = {
//     name: 'Marko',
//     age: 30
// }

// let inzenjer = {
//     ...osoba,
//     name: 'Uros',
//     zanimanje: 'programer'
// }

// console.log(inzenjer)

// DESTRUCTURING ARRAY

// let niz = [1, 2, 3]

// const [num1, , , num2] = niz

// console.log(num1, num2)

// function ispisiImeOsobe({name, age}) {
//     console.log(name)
// }

// ispisiImeOsobe(osoba)

// let osoba = {
//     name: 'Marko',
//     age: 30
// }

// let osoba1 = {...osoba}

// osoba1.name = 'Uros'

// console.log(osoba, osoba1)

// 1. Za uneti broj ispitati da li je paran ili nije. 

// let broj = 77

// if(broj % 2 === 0){
//     console.log('broj je paran');
// }else{
//     console.log('broj je neparan');
// }

// 2. Za uneti broj ispisati da li je deljiv sa 3 ili ne.

// let broj = 100

// if(broj % 3 === 0){
//     console.log('deljiv je')
// }else{
//     console.log('nije deljiv')
// }

// 3. Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.

// let broj1 = 15
// let broj2 = 45

// if(broj1 > broj2){
//     let rezultat = broj1 - broj2
//     console.log(rezultat)
// }else{
//     rezultat = broj2 - broj1
//     console.log(rezultat)
// }

// 4. Za uneti broj ispitati da li je on manji od nule, veći od nule ili jednak nuli. 
//    Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik.

// let broj = 5
// if(broj <= 0){
//      rezultat = broj - 1
//     console.log(rezultat)
// } else {
//     rezultat = broj + 1
//     console.log(rezultat)
// }


// 5. Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, korišćenjem if – else if strukture.

// let broj1 = 18
// let broj2 = 262
// let broj3 = 33

// if(broj1 > broj2 && broj1 > broj3){
//     console.log('broj1 je najveci broj')
// }else if(broj1 > broj2 && broj1 < broj3) {
// console.log('broj1 je srednji broj');
// }else{
//     console.log('broj1 je najmanji broj');
// }

// if(broj2 > broj1 && broj2 > broj3){
//     console.log('broj2 je najveci broj')
// }else if(broj2 > broj1 && broj2 < broj3) {
// console.log('broj2 je srednji broj');
// }else{
//     console.log('broj2 je najmanji broj');
// }

// if(broj3 > broj1 && broj3 > broj2){
//     console.log('broj3 je najveci broj')
// }else if(broj3 > broj1 && broj3 < broj2) {
// console.log('broj3 je srednji broj');
// }else{
//     console.log('broj3 je najmanji broj');
// }


// 6. Za učitani broj ispitati da li je ceo.

// let broj = 137878.77

// if(broj % 2 === 0 || broj % .5 === 0){
//     console.log('broj je ceo')
// }else{
//     console.log('broj nije ceo');
// }

// 7. Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, ovoga puta korišćenjem ugnježdenog grananja.



// 8. Učitati dva cela broja i ispitati da li je veći od njih paran.

// let broj1 = 1000
// let broj2 = 98

// if(broj1 > broj2){
//     if(broj1 % 2 === 0){
//         console.log('broj1 je paran')
//     }else{
//         console.log('broj1 nije paran');
//     }
// }else if(broj2>broj1){
//    if (broj2 % 2 === 0){
//         console.log('broj2 je paran')
//     }else{
//         console.log('broj2 je neparan');
//     }
// }

// 9. Uneti dva datuma i ispisati onaj koji je raniji. Datume unosimo tako što u posebnim promenljivama navedemo dan, mesec i godinu, za svaki od njih.

// let dan1 = 22
// let mesec1 = 11
// let godina1 = 2027

// let ispisGodine1 = `${dan1}:${mesec1}:${godina1}`

// let dan2 = 15
// let mesec2 = 11
// let godina2 = 2027

// let ispisGodine2 = `${dan2}:${mesec2}:${godina2}`

// if(godina1 <= godina2 && mesec1 <= mesec2 && dan1 < dan2){
//     console.log(ispisGodine1)
// }else{
//     console.log(ispisGodine2)
// }

// 10. Ispitati da li je trenutna godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.

// let godina = new Date().getFullYear()

// if(godina % 4 === 0 && godina % 100 !== 0 || godina % 400 === 0){
//     console.log('godina je prestupna')
// }else{
//     console.log('godina nije prestupna');
// }

// 11. U niz napuniti random vrednosti od 7 do 15 ali tako da nema duplikata i da se svi elementi iz raspona nalaze u nizu.

// let niz = []
// Math.floor(Math.random() * 15) + 7
// console.log(Math.floor(Math.random() * 15) + 7)
// 12. Izbaciti iz niza sve duplikate. (zadatak je moguce resiti i kroz novi niz i modifikacijom datog niza)