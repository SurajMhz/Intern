let index = 0
const slides = document.querySelector(".slides")
const total = document.querySelectorAll(".slides img").length
let startX = 0
let currentX = 0
let isDragging = false


document.querySelector(".nextButton").onclick = () => next()
document.querySelector(".prevButton").onclick = () => previous()

function next() {
    index = (index + 1) % total
    slides.style.transition = "transform 0.3s ease"
    slides.style.transform = `translateX(-${index * 404}px)`
}
function previous() {
    index = (index - 1 + total) % total
    slides.style.transition = "transform 0.3s ease"
    slides.style.transform = `translateX(-${index * 404}px)`
}
// setInterval(next(),1000,hello:Infinity[]);
//  setInterval(next,1000);
//auto move and stop on mouseenter  
let autoSlide = setInterval(next, 2000)

slides.addEventListener("mouseenter", () => clearInterval(autoSlide))
slides.addEventListener("mouseleave", () => autoSlide = setInterval(next, 2000))


