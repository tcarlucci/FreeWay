// load images
// let imgPlayer;
// let imgCar1;
// let imgCar2;
// let imgCar3;

function preload() {
  imgPlayer = loadImage("../images/hen.png");
  imgCar1 = loadImage("../images/carro-1.png");
  imgCar2 = loadImage("../images/carro-2.png");
  imgCar3 = loadImage("../images/carro-3.png");
  // imgCar4 = loadImage("./images/carro-1.png");
  // imgCar5 = loadImage("./images/carro-2.png");
  // imgCar6 = loadImage("./images/carro-3.png");
  imgRoad = loadImage("../images/estrada.png");
  imgCars = [imgCar1, imgCar2, imgCar3, imgCar1, imgCar2, imgCar3]
  soundStart = loadSound("../sounds/start.mp3");
  soundScore = loadSound("../sounds/point.mp3");
  soundHit = loadSound("../sounds/hit.mp3");
  soundTrack = loadSound("../sounds/trilha.mp3");
}