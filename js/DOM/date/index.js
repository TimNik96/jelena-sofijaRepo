const body = document.body
const day = new Date().getDate()
const month = (new Date().getMonth()) + 1
const year = new Date().getFullYear()

let dan = new Date().getDay()
// console.log(typeof dan, day)

switch (dan) {
    case 1:
        dan = 'ponedeljak'
        break
    case 2:
        dan = 'utorak'
        break
    case 3:
        dan = 'sreda'
        break
    case 4:
        dan = 'cetvrtak'
        break
    case 5:
        dan = 'petak'
        break
    case 6:
        dan = 'subota'
        break
    case 7:
        dan = 'nedelja'
        break
}

console.log(dan) 

body.textContent = `${day}.${month}.${year}`