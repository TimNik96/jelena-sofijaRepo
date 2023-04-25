SVASTA PAMETNO ZA PROCITATI:
https://www.webprogramiranje.org/

KORISNI LINKOVI:
https://flexboxfroggy.com/
https://mastery.games/flexboxzombies/
https://fontawesome.com/icons/
https://www.svgviewer.dev/
https://bennettfeely.com/clippy/
https://animista.net/play/basic/shadow-drop-2/shadow-drop-2-left
https://getbootstrap.com/docs/5.2/getting-started/introduction/
https://grid.layoutit.com/
https://cssgradient.io/
https://www.youtube.com/watch?v=A7fF6czIxEo

TEORIJA HTML&CSS:

https://www.w3schools.com/css/css_positioning.asp
https://www.w3schools.com/cssref/css_selectors.asp

TEORIJA JS:
*= - dodela vrednosti
*let - rezervisana rec u JS pomocu koje deklarisemo promenljivu
*const - rezervisana rec u JS pomocu koje deklarisemo konstante
*razlika izmedju let i const - ukoliko smo deklarisali sa const, nije moguce menjati vrednost konstanti, sem u slucaju kada
je u pitanju objekat. (tada konstanta pokazuje na taj isti objekat, ali se vrednosti unutar njega mogu menjati, dok se referenca na 
taj objekat ne sme menjati.)
    const broj = 5
    broj = 10
    ! GRESKA !

    const niz = [1, 2, 3]
    niz.push(4)
    const noviNiz = []
    noviNiz = niz
    = LEGITIMNO =

*razlika izmedju != i !==, kao i == i === - dvostruko jednako provera istinitost samo po vrednosti, dok trostruko proverava i po tipu podatka; razlicitost se takodje proverava na isti nacin

*&& - (logicko i) provera uslova koja je istinita kada su svi uslovi ispunjeni; u svakom drugom slucaju je netacno (false).
*|| - (logicko ili) provera uslova koja je istinita ukoliko je bar jedan uslov tacan.

*for, while, do...while - ciklicna struktura koja prekida svoje izvrsavanje kada uslov prestaje da bude validan.
    for(deklaracijaIterator; proveraUslova; stepenPomeranja(prelazak na sledecu iteraciju)) {
        blok koda koji se ciklicno izvrsava
    }

    deklaracijaIterator
    while(proveraUslova) {
        blok koda koji se izvrsava
        stepenPomeranja(prelazak na sledecu iteraciju)
            -ukoliko se ovaj korak ne desi, petlja zakucava u beskonacnost
    }

    do{
        blok koda koji ce se bar jednom izvrsiti
    }while(proveraUslova)

Komande u komandnoj liniji:
ls
ls -a
touch imeFajla (kreira fajl u trenutnom folderu)
mkdir imeFoldera (kreira folder u trenutnom folderu)
rm imeFajla (brise naznaceni fajl)
rm -r imeFoldera (brise navedeni folder)
cd .. (vracanje u roditeljski folder)
cd imeFajla
code .

GIT:
git config --global user.name "korisnicko ime"
git config --global user.email "korisnicki mail"
git config user.name (provera username-a)
git config user.email (provera email-a)
git clone URL (URL - uniform resource locator)
git pull (git fetch i git merge)
git add imeFajla 
git add .
git commit -m "kratka poruka komita"
git status
git log
git push


#Domaci_1

1. Napisati kod koji sabira svaki treci element u nizu. (pretpostavka da je niz brojeva u pitanju)
2. Napisati funkciju koja za prosledjeni broj ispisuje zbir njegovih cifara.
3. Napisati funkciju koja za prosledjeni broj ispisuje broj sa ciframa u obrnutom redosledu.
4. Napisati kod koji ispisuje string ukoliko mu je broj karaktera veci od 7, a ispisuje ga do pola ukoliko bilo gde u stringu postoji karakter '!'.
5. Napisati funkciju koja vraca duzinu za prosledjeni string.
6. Napisati funkciju koja racuna stepen broja. (stepenBroja(2, 3) ce vratiti rezultat 8, 2 na 3)
<<<<<<< HEAD
7. Napisati kod koji kao rezultat ispisuje koliko se puta izabrani karakter pojavio u stringu.
=======
7. Napisati kod koji kao rezultat ispisuje koliko se puta izabrani karakter pojavio u stringu.

#Domaci_2

1. Napisati kod koji ispisuje string otpozadi.
2. Napisati funkciju koja vraca poziciju trazenog elementa u nizu.
3. Napraviti niz objekata po izboru i ispisati ih u konzoli.
4. Iz postojeceg niza uzeti elemente na parnim indeksima i napraviti novi niz od tih elemenata. (pomocu push() metode)
5. Proveriti da li je prosledjena recenica u vidu stringa adekvatno interpunkcijski terminisana.

6. Iscrtati sledecu figuru za n = 5

* * * * * 
  * * * *
    * * * 
      * * 
        *

7. Iscrtati sledecu figuru za n = 5

* * * * *
* * * *
* * *
* *
*

#Domaci_3

https://nicepage.com/website-design/preview/mountain-adventure-19154?device=desktop

#Domaci_4

https://nicepage.com/templates/preview/pilates-studio-and-sports-16816?device=desktop

#Domaci_5

https://cssgridgarden.com/
https://grid.layoutit.com/

#Domaci_6

https://expertmovingservices.com/
https://michalsnik.github.io/aos/
https://swiperjs.com/demos

#Domaci_7

https://cssbattle.dev/play/2

#Domaci_8

https://cssbattle.dev/play/140
https://flukeout.github.io/

#Domaci_9

1. Date su dve promenljive u kojima su dati vreme u satima i minutima.  Izračunati koliko minuta je prošlo od ponoći.
2. Za dato vreme u minutima koji su prošli od ponoći, odrediti koliko je to u satima i minutima.
3. Date su dve promenljive kojima se zadaje cena robe i uneta novčanica kojom kupac plaća račun. Ispisati koliki kusur kasirka treba da mu vrati.
4. Uraditi zadatak 1 tako da se dohvati trenutno vreme, i za njega odredi koliko minuta je prošlo od ponoći.
5. Ispisati u konzoli današnji datum u formatima dd.mm.yyyy. i yyyy/mm/dd.
6. Data je promenljiva u kojoj je ukupan broj evra koji posedujemo, kao i promenljiva u kojoj je vrednost trenutnog kursa. Odrediti koliko ćemo imati dinara nakon razmene. Uraditi isto i za konverziju iz dinara u evre.
7. Data je promenljiva u kojoj je ukupan broj evra koji posedujemo, kao i promenljive u kojima je vrednost kurseva evro-dinar, kao i dolar-dinar, redom. Odrediti koliko ćemo imati dolara nakon razmene. Uraditi isto i za konverziju iz dolare u evre.
8. Za unetu zapreminu proizvoda, u paragrafu ispisati “Throw away”, ukoliko je proizvod zapremine veće od 100ml. U suprotnom ispisati “Pack up”.
9. Za unetu temperaturu u paragrafu, ispisati “Temperatura u plusu” crvenom bojom ili “Temperatura u minusu” plavom bojom. Ukoliko je temperatura nula, računati kao temperaturu u plusu.
10. U odnosu na pol koji je korisnik uneo u promenljivu  (“m” za muški pol ili “z” za ženski pol)  na ekranu prikazati odgovarajući avatar (odgovarajuću sličicu). 

#Domaci_10

1. U odnosu na preuzeto trenutno vreme sa računara, u paragrafu ispisati da li je trenutno jutro ili popodne.
Popodne je kada prođe 12:00 sati, ne računajući i to vreme.
2. Za preuzetu godinu sa računara i unetu godinu rođenja izračunati i u paragrafu ispisati da li je osoba punoletna ili maloletna. osoba je punoletna kada napuni 18 godina.
3. Odrediti i u paragrafu ispisati najveći od tri uneta broja (samo uz pomoć if naredbi, bez korišćenja logičkih operatora).
4. Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend. 
5. Na osnovu unetog broja poena u paragrafu ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit nekom ocenom  ukoliko ima više od 50 poena, u    suprotnom treba ispisati da je pao ispit. 
   Za više od 50 poena učenik dobija ocenu 6, 
   za više od 60 poena učenik dobija ocenu 7,
   za više od 70 poena učenik dobija ocenu 8, 
   za više od 80 poena učenik dobija ocenu 9 i 
   za više od 90 poena učenik dobija ocenu 10.
6. Za vreme preuzeto sa računara ispisati dobro jutro za vreme manje od 12 sati ujutru, dobar dan za vreme manje od 18 sati, u ostalim slučajevima ispisati dobro veče.
7. Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.

#Domaci_11

1. Za uneti broj ispitati da li je paran ili nije. 
2. Za uneti broj ispisati da li je deljiv sa 3 ili ne.
3. Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.
4. Za uneti broj ispitati da li je on manji od nule, veći od nule ili jednak nuli. 
   Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik.
5. Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, korišćenjem if – else if strukture.
6. Za učitani broj ispitati da li je ceo.
7. Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, ovoga puta korišćenjem ugnježdenog grananja.
8. Učitati dva cela broja i ispitati da li je veći od njih paran. 
9. Uneti dva datuma i ispisati onaj koji je raniji. Datume unosimo tako što u posebnim promenljivama navedemo dan, mesec i godinu, za svaki od njih.
10. Ispitati da li je trenutna godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.
11. U niz napuniti random vrednosti od 7 do 15 ali tako da nema duplikata i da se svi elementi iz raspona nalaze u nizu.
12. Izbaciti iz niza sve duplikate. (zadatak je moguce resiti i kroz novi niz i modifikacijom datog niza)

#Domaci_12

1. Napisati kod koji iz inputa kupi broj i ispisuje broj sa ciframa u obrnutom redosledu u drugom inputu kao resenje. Koristiti dugme. (primer: 1234 => 4321)
2. Napraviti par korisnika kao objekte u nizu i dodati polja po izboru. Zatim ih lepo ispisati na stranici u nekom divu. (Potruditi se malo oko stilizovanja)
3. Korisnike iz prethodnog zadatka koristiti i ispisati samo one opcije cije ime pocinje na slovo koje se zada u inputu. Moze se koristiti dugme ili Enter.
4. Napisati skriptu koja pravi x paragrafa. Svaki paran paragraf ima 30 reci lorem ipsum, a svaki treci ima zelenu boju pozadine.
5. Napraviti igru kamen-papir-makaze u jednu pobedu. Postoji jedan input za unos zeljene opcije. U paragrafu ispod se na klik ispisuje pobednik, a u konzoli se ispisuje sta je racunar odabrao. Za opciju koju racunar treba da dobije koristiti random()
6. Ispisati brojeve od 1 do 20 
7. Ispisati brojeve od 20 do 1 
8. Ispisati parne brojeve od 1 do 20 (uraditi zadatak na dva nacina)
9. Ispisati dvostruku vrednost brojeva od 5 do 15
10. Odrediti sumu brojeva od 1 do n
11. Odrediti sumu brojeva od n do m 
12. Odrediti proizvod brojeva od n do m
13. Odrediti sumu kvadrata brojeva od n do m

#Domaci_13

1. Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. 
2. For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).
3. Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100. *
4. Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.
5. Ispisati aritmetičku sredinu brojeva od n do m.
6. Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno. *
7. Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5. *
8. Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.
9. Odrediti sumu brojeva od n do m koji nisu deljivi brojem a.
10. Odrediti proizvod brojeva od n do m koji su deljivi brojem a.
11. Odrediti sa koliko brojeva je deljiv uneti broj k.
12. Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.

#Domaci_14

1. Ispisati brojeve od 1 do 20:
    -Svaki u istom redu
    -Svaki u novom redu
2. Ispisati brojeve od 20 do 1.
3. Ispisati parne brojeve od 1 do 20.
4. Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje
5. Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira
6. Odrediti sumu brojeva od 1 do 100
7. Odrediti sumu brojeva od 1 do n
8. Odrediti sumu brojeva od n do m
9. Odrediti proizvod brojeva od n do m
10. Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m
11. Odrediti sa koliko brojeva je deljiv uneti broj k
12. Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.

#Domaci_15

1. Napraviti klasu Sastojak koja sadrzi polja naziv, kolicinu i cenu, a zatim napraviti metodu koja racuna njenu cenu.
2. Napraviti klasu Recept koja prima sastojke za pripremu istog. (imace polja naziv, sastojci, nacinPripreme, tezinaPripreme, kao i metodu za ispis svih sastojaka i cenuRecepta)
3. Ukoliko je broj deljiv sa 3, ispisati fizz; Ukoliko je broj deljiv sa 5, ispisati buzz; Ukoliko je broj deljiv sa 7, ispisati zazz; Ukoliko je deljiv sa kombinacijom, kombinovati i stringove. (prvih 100 brojeva)