//------------------CARS------------------------------
let xCars = [480, 490, 470, 480, 490, 470]
let yCars = [43, 98, 153, 213, 264, 320];
let wCars = [66, 66, 66, 66, 66, 66];
let hCars = [36, 36, 36, 36, 36, 36];
//let speedCars = [2, 2.5, 3.2, 5, 3.3, 2.3];
let speedCars = [3.6, 4.6, 7, 5, 3.4, 2];


//------------------SUMMON CARS------------------------------
function cars() {
    for (let i = 0; i < imgCars.length; i++) {
        image(imgCars[i], xCars[i], yCars[i], wCars[i], hCars[i]);
    }
}
//------------------CAR MOVEMENT------------------------------
function carMovement() {
    for (let i = 0; i < imgCars.length; i++) {
        xCars[i] -= speedCars[i];
    }
}

//------------------CAR RETURN------------------------------

function startPositionCar() {
    for (let i = 0; i < imgCars.length; i++){
        if (passedScreen(xCars[i])) {
            xCars[i] = 600
        }
    }
}

function passedScreen(xCars){
    return xCars < -55;
}