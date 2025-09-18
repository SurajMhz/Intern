
let index = 0;
const slides = document.querySelector(".slides");
const total = document.querySelectorAll(".slides img").length;

document.querySelector(".nextButton").onclick = () => {
    index = (index + 1) % total;
    slides.style.transform = `translateX(-${index * 404}px)`;
};

document.querySelector(".prevButton").onclick = () => {
    index = (index - 1 + total) % total;
    slides.style.transform = `translateX(-${index * 404}px)`;
};

