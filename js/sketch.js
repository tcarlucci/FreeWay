//------------------SCREEN------------------------------
let screen = [500, 400];

//------------------SYSTEM------------------------------
function setup() {
  createCanvas(screen[0], screen[1]);
}

function draw() {
  background(imgRoad);
  cars();
  player();
  carMovement();
  playerMovement();
  startPositionCar();
  checkCollision();
  addPoints();
  scorePoint()


}


