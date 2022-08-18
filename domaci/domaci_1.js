let niz = [1, 2, 3, 4, 5]
let zbir = 0

for(let i = 0; i < niz.length; i += 3) {
    // if (i % 3 === 2)
        zbir += niz[i]
}

console.log(zbir)
