function makeBubble(){
    let clutter = '';

    for(let i = 1; i<=119; i++){
        let random = parseInt(Math.random()*10);
        clutter = clutter + `<div class="bubble">${random}</div>`
    }
    document.querySelector('.panel-btm').innerHTML = clutter;
}

let timer = 60;

function runTimer(){
    let timerInterval = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector('#countdown').textContent = timer;
            
        }else{
            clearInterval(timerInterval);   
            document.querySelector('.panel-btm').innerHTML = `<h1>Game Over | Score is ${score}</h1>`
        }
    }, 1000)
}

let hitRandom;
function getNewHit() {
    hitRandom = parseInt(Math.random()*10);
    document.querySelector('#hitval').textContent  = hitRandom;
}

let score = 0;
function increaseScore(){
    score += 1;
    document.querySelector('#scoreval').textContent = score;
}

document.querySelector('.panel-btm').addEventListener('click', function(e){
    let clickedNum = parseInt(e.target.textContent);
    if(clickedNum === hitRandom){
        increaseScore();
        getNewHit();
        makeBubble();
    }else{
        getNewHit();
        makeBubble();
    }
})

getNewHit();
runTimer();
makeBubble();