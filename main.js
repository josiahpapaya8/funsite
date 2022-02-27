let button = document.getElementById('btn');
let score = document.getElementById('score');
let image = document.getElementById('jumpScare');
let sound = document.getElementById('yell')

clicks = 0;

function increaseCounter() {
    clicks += 1;
    score.innerHTML = clicks;
    if (clicks === 18){
        sound.play();
        image.style.display = 'block';
    }
}

button.onclick = increaseCounter;