let arr = [1, 2, 3]

localStorage.setItem('mojNiz', JSON.stringify(arr))

if(localStorage.getItem('mojNiza') !== null) {
    let noviNiz = JSON.parse(localStorage.getItem('mojNiz'))
    console.log(noviNiz)
}

if(localStorage.getItem('korisnici') !== null) {
    let noviNiz = JSON.parse(localStorage.getItem('korisnici'))
    console.log(noviNiz)
}

localStorage.clear()

localStorage.removeItem('mojNiz')

sessionStorage.setItem()
sessionStorage.getItem()
sessionStorage.removeItem()
sessionStorage.clear()
