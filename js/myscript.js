let myHero = document.querySelector("#hero");
let heroGlow = document.querySelector("#glowing");
let jumpBtn = document.querySelector("#onejump");
let moveBtn = document.querySelector("#move");
let moveTo30Btn = document.querySelector("#moveto30");
let jumpingBtn = document.querySelector("#jumping");
let fadingBtn = document.querySelector("#fade");
let glowingBtn = document.querySelector("#glowbtn");
let fallDownBtn = document.querySelector("#falldownbtn");
let shakeBtn = document.querySelector("#shakebtn");
let moveto0Btn = document.querySelector("#moveto0btn");
let speakBtn = document.querySelector("#speak");

//Move button
moveBtn.addEventListener("click", startMove);

function startMove(){
    myHero.classList.toggle("moveanimation");
};

myHero.addEventListener("animationend", removeClassMove);

function removeClassMove(){
    myHero.classList.remove("moveanimation");
};

//30 degree move button
moveTo30Btn.addEventListener("click", startMove30);

function startMove30(){
    myHero.classList.toggle("moveto30animation");
};

myHero.addEventListener("animationend", removeClassMove30);

function removeClassMove30(){
    myHero.classList.remove("moveto30animation");
};


//One jump button
jumpBtn.addEventListener("click", startJump);

function startJump(){
    myHero.classList.toggle("onejumpanimation");
};

myHero.addEventListener("animationend", removeClassJump);

function removeClassJump(){
    myHero.classList.remove("onejumpanimation");
};

//Jumping button
jumpingBtn.addEventListener("click", startJumping);

function startJumping(){
    myHero.classList.toggle("jumpinganimation");
};
myHero.addEventListener("animationend", removeClassJumping);

function removeClassJumping(){
    myHero.classList.remove("jumpinganimation");
};

//Fading button
fadingBtn.addEventListener("click", startFade);

function startFade(){
    myHero.classList.toggle("fadinganimation");
};

myHero.addEventListener("animationend", removeClassFade);

function removeClassFade(){
    myHero.classList.remove("fadinganimation");
};

//Glowing button
glowingBtn.addEventListener("click", startGlow);

function startGlow(){
    heroGlow.classList.toggle("glowinganimation");
};

heroGlow.addEventListener("animationend", removeClassGlow);

function removeClassGlow(){
    heroGlow.classList.remove("glowinganimation");
};

//Fall down button
fallDownBtn.addEventListener("click", startFallDown);

function startFallDown(){
    myHero.classList.toggle("falldownanimation");
};

myHero.addEventListener("animationend", removeClassFallDown);

function removeClassFallDown(){
    myHero.classList.remove("falldownanimation");
};

//Shake button
shakeBtn.addEventListener("click", startShake);

function startShake(){
    myHero.classList.toggle("shakeanimation");
};

myHero.addEventListener("animationend", removeClassShake);

function removeClassShake(){
    myHero.classList.remove("shakeanimation");
};

//Move to 0 button
moveto0Btn.addEventListener("click", startMoveTo0);

function startMoveTo0(){
    myHero.classList.toggle("moveto0");
};

myHero.addEventListener("animationend", removeClassMoveTo0);

function removeClassMoveTo0(){
    myHero.classList.remove("moveto0");
};


//Speak button
speakBtn.addEventListener("click", startSpeak);

function startSpeak(){
    myHero.classList.toggle("speak");
};

myHero.addEventListener("animationend", removeClassSpeak);

function removeClassSpeak(){
    myHero.classList.remove("speak");
};
