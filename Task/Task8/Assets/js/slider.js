let index = 0
const slides = document.querySelector(".slides")
const total = document.querySelectorAll(".slides img").length

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



// const slider = document.querySelector(".slider"); // not .slides

// let isDown = false;
// let startX;
// let scrollLeft;

// slider.addEventListener("mousedown",(e)=>{
//   isDown = true;
//   startX = e.pageX;
//   scrollLeft = slider.scrollLeft;
// });

// slider.addEventListener("mouseleave",()=> isDown = false);
// slider.addEventListener("mouseup",()=> isDown = false);

// slider.addEventListener("mousemove",(e)=>{
//   if(!isDown) return;
//   e.preventDefault();
//   const x = e.pageX - startX;
//   slider.scrollLeft = scrollLeft - x;
// });

