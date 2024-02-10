// for Hit
let timer = 60;
let score = 0;
let hitrn = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random()* 10);
    document.querySelector("#NewHit").textContent = hitrn;
}

// For bubble
function makeBubble() {
    let clutter = "";

for (let i = 1; i <= 144; i++) {
    let rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
    
}

document.querySelector("#pbtm").innerHTML = clutter;
}

// For timers
function runtimer() {
    let timerint = setInterval(function() {
    if(timer>0){
    timer--;
    document.querySelector("#timerValue").innerHTML = timer;
} else{
    clearInterval(timerint);
    document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
}
}, 1000);
}

// pbtm because its parent of bubble
document.querySelector("#pbtm")
.addEventListener("click" , function(details){
    let clickedNumber = (Number(details.target.textContent));
    if(clickedNumber === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})


runtimer();
makeBubble();
getNewHit();


// Event Bubbling = Jispe click karoge wo element par event raise hoga, aur event listener naa milne par event element ke parent par listener dhundhega, waha bhi naa milne par event parent ke parent ke parent par listener dhundhega.
