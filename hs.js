const image = document.getElementById("movable-img0");

image.addEventListener("animationiteration", () => {
    image.style.animationPlayState = "paused";
    setTimeout(() => {
        image.style.animationPlayState = "running";
    }, 1000); 
});



