const body = document.querySelector("body");

const IMG_NUMBER = 6;

function handleImgLoad(){
    console.log("finished loading");
}
function paintImage(imgNumber){
    const image = new Image();
    image.src =`images/${imgNumber + 1}.jpg`;
    image.classList.add('bgImage');
    image.addEventListener("loaded", handleImgLoad);
    body.prepend(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    /*
    Math.floor();는 숫자의 소수점을 버려줌
    Math.ceil();은 숫자의 소수점을 반올림해줌
    */

    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();

