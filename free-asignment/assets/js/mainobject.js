let img1 = document.querySelector(".small-img-1");
let img2 = document.querySelector(".small-img-2");
let img3 = document.querySelector(".small-img-3");
let img4 = document.querySelector(".small-img-4");
let img5 = document.querySelector(".small-img-5");

let bigImg = document.querySelector(".big-img");

img1.addEventListener("click", ()=> {
    bigImg.style.backgroundImage = "url('/assets/img/image5.jpg')";
})
img2.addEventListener("click", ()=> {
    bigImg.style.backgroundImage = "url('/assets/img/image4.jpg')";
})
img3.addEventListener("click", ()=> {
    bigImg.style.backgroundImage = "url('/assets/img/image6.jpg')";
})
img4.addEventListener("click", ()=> {
    bigImg.style.backgroundImage = "url('/assets/img/image7.jpg')";
})
img5.addEventListener("click", ()=> {
    bigImg.style.backgroundImage = "url('/assets/img/image8.jpg')";
})
