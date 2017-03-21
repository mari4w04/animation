let myHero = document.querySelector("#hero");
let jumpBtn = document.querySelector("#jump");
let rotateBtn = document.querySelector("#rotate");

//Jumping button
jumpBtn.addEventListener("click", startJump);

function startJump(){
    myHero.classList.add("herojump");
};

myHero.addEventListener("animationend", removeClassJump);

function removeClassJump(){
    myHero.classList.remove("herojump");
};

//Rotating button
rotateBtn.addEventListener("click", startRotate);

function startRotate(){
    myHero.classList.add("herorotate");
};

myHero.addEventListener("animationend", removeClassRotate);

function removeClassRotate(){
    myHero.classList.remove("herorotate");
};

