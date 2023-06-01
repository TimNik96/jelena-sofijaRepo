const sectionRating = document.querySelector(".rating")
const sectionUpis = document.querySelector(".upis")
const btn = document.querySelector("button")
let rating

sectionRating.addEventListener("click", (event) => {
  if (!event.target.classList.contains("circle")) return

  for(let i = 0; i < 5; i++) {
      sectionRating.children[i].style.backgroundColor = "#fff"
  }

  rating = +event.target.textContent
  event.target.style.backgroundColor = "#888"
})

btn.addEventListener('click', () => {
    sectionUpis.textContent = rating
    document.body.removeChild(sectionRating)
})