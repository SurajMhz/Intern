
let index = 0;
const slides = document.querySelector(".slides");
const total = document.querySelectorAll(".slides img").length;

document.querySelector(".nextButton").onclick = () => {next()};
document.querySelector(".prevButton").onclick = () => {previous()};
function next(){
    index = (index + 1) % total;
    slides.style.transform = `translateX(-${index * 404}px)`;
}
function previous(){
    index = (index - 1 + total) % total;
    slides.style.transform = `translateX(-${index * 404}px)`;
}

    // setInterval(next(),1000,hello:Infinity[]);

