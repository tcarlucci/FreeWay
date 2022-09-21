//Game score
let score = 0;


//Score board
function addPoints() {
    textAlign(CENTER);
    textSize(25);
    text(score, width / 5, 27);
    fill(color(255, 240, 0));
}

function scorePoint() {
    if (yPlayer < 10) {
        score++
        if (score) {
            ranOver();
            soundScore.play();
        }
    }
}

