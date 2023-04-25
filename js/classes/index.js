const pravougaonik = {
    a: 15,
    b: 20,

    povrsina() {
        return this.a * this.b
    }
}

console.log(pravougaonik.povrsina())

class Osoba {
    constructor(ime, prezime) {
        this._ime = ime
        this._prezime = prezime
    }

    get ime() {
        return this._ime
    }

    set ime(novoIme) {
        this._ime = novoIme
    }

    get prezime() {
        return this._prezime
    }

    set prezime(novoPrezime) {
        this._prezime = novoPrezime
    }
}

const osoba1 = new Osoba('Marko', 'Markovic')
const osoba2 = new Osoba('Uros', 'Djukic')

osoba1.ime = 'Marta'
osoba1.prezime = 'Popovic'
console.log(osoba1.ime, osoba1)

class Profesor extends Osoba{
    constructor(ime, prezime, zanimanje, mesecnaZarada, godineStaza) {
        super(ime, prezime)
        this._zanimanje = zanimanje
        this._mesecnaZarada = mesecnaZarada
        this._godineStaza = godineStaza
    }

    get zanimanje() {
        return this._zanimanje
    }

    get mesecnaZarada() {
        return this._mesecnaZarada
    }

    get godineStaza() {
        return this._godineStaza
    }

    prihod() {
        return this.mesecnaZarada * 12
    }

    obracunajBonus() {
        return this.godineStaza * 3000
    }
}

const p1 = new Profesor('Dragan', 'Jovanovic', 'Dekan', 90000, 25)
console.log(p1.prihod(), p1.obracunajBonus())

