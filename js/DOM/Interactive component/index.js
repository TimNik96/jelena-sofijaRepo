const svgLeft = document.querySelector(".svgLeft")
const svgRight = document.querySelector(".svgRight")
const fliperKrug = document.querySelector(".fliperKrug")

let fliperKrugActive = false
let pageViews = 100
let priceTag = 16
let priceTagYearly = 144

const displayInfo = (pageViews, priceTag, fliperKrugActive) => {
  const pageViewsContainer = document.querySelector(".views")
  const priceContainer = document.querySelector(".price")

  pageViewsContainer.textContent = `${pageViews}K PAGEVIEWS`
  if (fliperKrugActive) {
    priceContainer.textContent = `${priceTag}$ / year`
  } else {
    priceContainer.textContent = `${priceTag}$ / month`
  }
}

const calculatePrice = (fliperKrugActive, dodaj) => {
  if (dodaj) {
    pageViews += 50
    priceTag += 8
  } else {
    pageViews -= 50
    priceTag -= 8
  }
  priceTagYearly = priceTag * 12 * 0.75
  if (fliperKrugActive) {
    displayInfo(pageViews, priceTagYearly, fliperKrugActive)
  } else {
    displayInfo(pageViews, priceTag, fliperKrugActive)
  }
}

displayInfo(pageViews, priceTag, fliperKrugActive)

fliperKrug.addEventListener("click", () => {
  fliperKrugActive = !fliperKrugActive
  if (fliperKrugActive) {
    fliperKrug.style.left = "37px"
    fliperKrug.style.backgroundColor = "aqua"
    displayInfo(pageViews, priceTagYearly, fliperKrugActive)
  } else {
    fliperKrug.style.left = "3px"
    fliperKrug.style.backgroundColor = "white"
    displayInfo(pageViews, priceTag, fliperKrugActive)
  }
})

svgLeft.addEventListener("click", () => {
  if (pageViews == 0) {
    return
  }
  calculatePrice(fliperKrugActive, false)
})

svgRight.addEventListener("click", () => {
  if (pageViews == 200) {
    return
  }
  calculatePrice(fliperKrugActive, true)
})
