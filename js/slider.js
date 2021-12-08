let sliderText = document.getElementsByClassName("slider_text");
let sliderPoint = document.getElementsByClassName("slider_point");
let currentSlide = 0;

document.getElementById("btn_next").addEventListener("click", () => {
    changeSlide(currentSlide + 1)
});
document.getElementById("btn_back").addEventListener("click", () => {
    changeSlide(currentSlide - 1)
});

function changeSlide(moveTo) {
    if (moveTo >= sliderText.length) {moveTo = 0;}
    if (moveTo < 0) {moveTo = sliderText.length - 1;}
    
    sliderText[currentSlide].classList.toggle("active");
    sliderPoint[currentSlide].classList.toggle("active");
    sliderText[moveTo].classList.toggle("active");
    sliderPoint[moveTo].classList.toggle("active");
    
    currentSlide = moveTo;
}

document.querySelectorAll('.slider_point').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlide !== bulletIndex) {
            changeSlide(bulletIndex);
        }
    })
})