//------------------PLAYER------------------------------
let xPlayer = 250;
let yPlayer = 369;
let wPlayer = 25;
let hPlayer = 25;
let hit = false;
//------------------SUMMON PLAYER------------------------------
function player() {
    image(imgPlayer, xPlayer, yPlayer, wPlayer, hPlayer);
    //console.log(yPlayer);
}
//------------------PLAYER MOVEMENT------------------------------
function playerMovement() {
    if (keyIsDown(UP_ARROW)) {
        yPlayer -= 2;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yPlayer += 2;
    }
    if (keyIsDown(LEFT_ARROW)) {
        xPlayer -= 2;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        xPlayer += 2;
    }
}
//------------------PLAYER COLLISION------------------------------
function checkCollision() {
    //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
    for (let i = 0; i < imgCars.length; i++) {
        hit = collideRectCircle(xCars[i], yCars[i], wCars[i], hCars[i], xPlayer, yPlayer, 15);
        if (hit) {
            ranOver();
        }
    }
}

function ranOver() {
    xPlayer = 250, yPlayer = 369;
}