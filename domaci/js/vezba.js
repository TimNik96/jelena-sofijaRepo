const body = document.body

const divContainer = document.createElement('div')
const naslovH1 = document.createElement('h1')
naslovH1.textContent = 'SEO praksa'

body.append(divContainer)
divContainer.append(naslovH1)

const prviparagraf = document.createElement('p')
prviparagraf.textContent = 'Naziv knjige, 10th izdanje'

body.append(prviparagraf)

const drugiparagraf = document.createElement('p')
drugiparagraf.textContent = 'SEO (Search Engine Optimization) predstavlja marketinsku tehniku koja sa odnosi na optimizaciju sajta za pretrazivace. Cilj SEO tehnika je da se sajt prikaze u rezultatima pretrage, sto blize vrhu.'

body.append(drugiparagraf)

const mainContainer = document.createElement('main')
const naslovH2 = document.createElement('h2')
naslovH2.textContent = 'Potrebe korisnika i ciljevi pretrazivaca'

body.append(mainContainer)
mainContainer.append(naslovH2)

const mainPrviParagraf = document.createElement('p')
mainPrviParagraf.textContent = 'Korisnici zele da sto efikasnije pronadju informaciju koja ih zanima. To znaci, da uz sto manje napora dodju do web sajta koji ih interesuje. Web pretrazivaci, omogucavaju da unosom jednog ili vise termina (kljucnih reci), korisnik dobije listu sajtova koji odgovaraju njegovom upitu.'

const mainDrugiPararaf = document.createElement('p')
mainDrugiPararaf.textContent = 'Cilj web pretrazivaca je da na sto kvalitetniji nacin zadovolje potrebe korisnika, posto i sami zaradjuju od korisnickih pretraga direktno (prikazujuci reklame unutar svojih rezultata) ili indirektno (nudeci dodatne usluge).'

const mainTreciParagraf = document.createElement('p')
mainTreciParagraf.textContent = 'Da bi korisnici bili zadovoljni, web pretrazivac pokusava da na najbolji nacin "pogodi" sta su zeleli. Algoritam vrsi procenu koji rezultati su najrelevantniji za datu pretragu i tako ih i poredja na stranici sa rezultatima. Odavno je poznato da su korisnici "lenji" - retko ko zeli da "istrazuje" kroz stranice i stranice rezultata. Znajuci to, Google i ostali pretrazivaci ulazu ogromne napore da na vrhu stranice prikazu najbolje rezultate.'

const DrugiNalovH2 = document.createElement('h2')
DrugiNalovH2.textContent = 'Ciljevi vlasnika sajta'

const DrugiH2Paragraf1 = document.createElement('p')
DrugiH2Paragraf1.textContent = 'Nije tajna da vlasnici sajtova zele posecenost. Zelimo da korisnici dodju nas sajt iz razlicitih razloga - da saznaju za nasu ponudu, da bismo zaradili od reklamiranja, ili da bismo imali mogucnost prodaje naseg proizvoda ili usluge. U najvecem broju slucajeva, korisnici dolaze do sajtova koriscenjem web pretrazivaca. Samim tim zelimo da se nas sajt nadje u rezultatima pretrage.'

const DrugiH2Paragraf2 = document.createElement('p')
DrugiH2Paragraf2.textContent = 'Posto je ponasanje korisnika opste poznato, vlasnici sajtova s pravom pocinju da razmisljaju o tome kako da svoj sajt "doteraju" na vrh pretrage. Svaka aktivnost koja vodi poboljsanju ranga sajta na stranici sa rezultatima, spada u SEO.'

const Linija = document.createElement('hr')

mainContainer.append(mainPrviParagraf, mainDrugiPararaf, mainTreciParagraf, DrugiNalovH2, DrugiH2Paragraf1, DrugiH2Paragraf2, Linija)

const Footer = document.createElement('footer')
const NaslovFooter = document.createElement('h3')
NaslovFooter.textContent = 'Kontakt vazno'

const divFooterTekst = document.createElement('div')

const TextFooter = document.createElement('p')
TextFooter.textContent = 'Nasa kompanija'

const TextFooter1 = document.createElement('p')
TextFooter1.textContent = 'Ime Ulica, br. 49'

const TextFooter2 = document.createElement('p')
TextFooter2.textContent = 'Beograd'

const TextFooter3 = document.createElement('p')
TextFooter3.textContent = 'Serbia'


divFooterTekst.append(TextFooter, TextFooter1, TextFooter2, TextFooter3)
Footer.append(NaslovFooter,divFooterTekst, TextFooter,TextFooter1, TextFooter2, TextFooter3)
body.append(Footer)




