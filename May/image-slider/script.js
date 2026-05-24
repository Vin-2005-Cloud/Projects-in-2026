const nextEl = document.querySelector(".next");
const imagesEl = document.querySelectorAll("img");
const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.querySelector(".prev");

let imageCount = 1;
let timeOut;

nextEl.addEventListener("click" ,() => {
imageCount++;
clearTimeout(timeOut);
updateImg();
});

prevEl.addEventListener("click" ,() => {
imageCount--;
clearTimeout(timeOut);
updateImg();
});

updateImg();

function updateImg() {
if(imageCount > imagesEl.length) {
    imageCount = 1;
} else if (imageCount < 1) {
imageCount = imagesEl.length;
}
imageContainerEl.style.transform = `translateX(-${(imageCount - 1) * 500}px)`;
timeOut = setTimeout(() => {
    imageCount++;
    updateImg();
}, 3000);
}


