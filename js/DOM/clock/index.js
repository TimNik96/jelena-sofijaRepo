const body = document.body

function generateTime(htmlElement) {
    let sati = new Date().getHours()
    let minuti = new Date().getMinutes()
    let sekunde = new Date().getSeconds()
    
    if (sati < 10)
        sati = '0' + sati
    if (minuti < 10)
        minuti = '0' + minuti
    if (sekunde < 10)
        sekunde = '0' + sekunde
    
    let vreme = `${sati}:${minuti}:${sekunde}`
    htmlElement.textContent = vreme

    return setTimeout(() => {
        generateTime(htmlElement)
    }, 1000)
}

generateTime(body)
