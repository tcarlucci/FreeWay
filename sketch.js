// images
let imgPlayer;
let imgCar1;
let imgCar2;
let imgCar3;
let imgRoad;

// load images
function preload() {
  imgPlayer = loadImage("./images/ator-1.png");
  imgCar1 = loadImage("./images/carro-1.png");
  imgCar2 = loadImage("./images/carro-2.png");
  imgCar3 = loadImage("./images/carro-3.png");
  imgRoad = loadImage("./images/estrada.png");
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imgRoad);
  car1(imgCar1);
  car2();
  car3();
  car4();
  car5();
  car6();
  player();
}

// ----- Cars
function car1(){
  rect(50, 43, 66, 36);
}
function car2() {
rect(100, 98, 66, 36);
}
function car3(){
  rect(150, 153, 66, 36);
}
function car4(){
  rect(200, 213, 66, 36);
}
function car5(){
  rect(250, 264, 66, 36);
}
function car6(){
  rect(300, 320, 66, 36);
}

// ----- Player
function player(){
  rect(250, 369, 25, 25);
}