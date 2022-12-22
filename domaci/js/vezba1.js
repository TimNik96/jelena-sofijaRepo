const body = document.body

const div = document.createElement('div')

const naslovH1 = document.createElement('h1')
naslovH1.textContent = 'Kreiranje web sajta'

const naslovH5 = document.createElement('h5')
naslovH5.textContent = 'Osnova svakog web sajta je njegov sadržaj.'
naslovH5.style.fontSize = '20px'
naslovH5.style.margin = '0px'

const prviParagraf = document.createElement('p')
prviParagraf.textContent = 'Kao što kažu - "Content is the king". Međutim, čist sadržaj, bez ikakvog truda uloženog u izgled sajta i korisničko iskustvo, će biti čist promašaj. Ako želimo da budemo kompletan autor web sajta, postoje neke veštine kojima treba da ovladamo čak i pre nego što počnemo da učimo tehnologiju:'


const drugiParagraf = document.createElement('p')
drugiParagraf.textContent = 'Ove veštine predstavljaju dodirne tačke za inače često suprotstavljene aspekte web sajtova - informativnosti i atraktivnosti, odnsono aktivnosti kreiranja sadržaja i dizajna.'

const linija = document.createElement('hr')

body.append(div)
div.append(naslovH1, naslovH5, prviParagraf, drugiParagraf, linija)
body.style.backgroundColor = 'grey'

const main = document.createElement('main')
main.style.color = 'rgb(95, 72, 13)'
body.style.fontSize = '20px'

const mainParagraf = document.createElement('p')
mainParagraf.textContent = 'Web sajtove danas kreiramo pomoću 3 tehnologije, koje se međusobno kombinuju.'

const mainNaslov = document.createElement('h3')
mainNaslov.textContent = 'HTML - sadržaj'

const mainParagraf2 = document.createElement('p')
mainParagraf2.textContent = 'HTML (HyperText Markup Language) je tehnologija kojom definišemo sadržaj web stranica. Ona ne služi za formatiranje već da jasno definišemo šta-je-šta u našem dokumentu. HTML je tekstualni dokument koji je lako napraviti, a zasniva se na uvođenju "oznaka" koje definišu HTML elemente.'

const mainNaslov2 = document.createElement('h3')
mainNaslov2.textContent = 'CSS - izgled'

const mainParagraf3 = document.createElement('p')
mainParagraf3.textContent = 'Sa druge strane CSS (Cascade StyleSheets) služi za formatiranje, odnosno definisanje izgleda HTML elemenata. Zbog toga je pogrešno reći npr. da element "mark" predstavlja tekst sa žutom pozadinom - boju pozadine možemo lako promeniti u CSS-u, pa čak učiniti i da ona uopšte ne bude obojena.'

const divSlika = document.createElement('div')

const slika = document.createElement('img')
slika.src = 'sunset.jpg'
slika.alt = 'sunset'
slika.style.width = '700px'
slika.style.height = '400px'

divSlika.style.display = 'flex'
divSlika.style.justifyContent = 'center'
divSlika.style.alignItems = 'center'

const mainNaslov3 = document.createElement('h3')
mainNaslov3.textContent = 'JavaScript - interaktivnost'

const mainParagraf4 = document.createElement('p')
mainParagraf4.textContent = 'Pomoću JavaScripta možemo isprogramirati šta se dešava na našoj web stranici. To mogu biti jednostavne animacije, elementi korisničkog interfejsa (npr. dugmići ili meniji), ali i prave-pravcate web aplikacije.'

mainNaslov.style.fontSize = '30px'
mainNaslov.style.padding = '0px'

mainNaslov2.style.fontSize = '30px'
mainNaslov2.style.padding = '0px'

mainNaslov3.style.fontSize = '30px'
mainNaslov3.style.padding = '0px'

divSlika.append(slika)
main.append(mainParagraf, mainNaslov, mainParagraf2, mainNaslov2, mainParagraf3, divSlika, mainNaslov3, mainParagraf4)
body.append(main)








