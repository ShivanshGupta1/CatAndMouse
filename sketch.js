let background, backgroundSprite, catAnimation,
  catSprite, mouseAnimation, mouseSprite, catImage, mouseImage,
  catStop, mouseStop;
function preload() {
  background = loadImage("images/garden.png");
  catImage = loadImage("images/cat1.png");
  mouseImage = loadImage("images/mouse1.png");
  catAnimation = loadAnimation("images/cat2.png", "images/cat3.png");
  mouseAnimation = loadAnimation("images/mouse2.png", "images/mouse3.png");
  catStop = loadImage("images/cat4.png");
  mouseStop = loadImage("images/mouse4.png");
}
function setup() {
  createCanvas(800, 400);
  backgroundSprite = createSprite(400, 200, 50, 50);
  backgroundSprite.addImage(background);
  catSprite = createSprite(600, 300, 50, 50);
  catSprite.addImage(catImage);
  catSprite.addAnimation("catRunning", catAnimation);

  catSprite.scale = 0.0925;
  mouseSprite = createSprite(100, 300, 50, 50);
  mouseSprite.addImage(mouseImage);
  mouseSprite.scale = 0.0925;
  mouseSprite.addAnimation("mouseTeasing", mouseAnimation);
  catSprite.debug = true;
  mouseSprite.debug = true;
}
function draw() {
  keyPressed();
  drawSprites();
}
function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    catSprite.changeAnimation("catRunning");
    mouseSprite.changeAnimation("mouseTeasing");
    catSprite.velocityX = -3;
  }
  if (catSprite.x - mouseSprite.x < (catSprite.width / 2 + mouseSprite.width / 2)) {
    console.log((catSprite.width / 2 + mouseSprite.width / 2))
    console.log(catSprite.x - mouseSprite.x)
    catSprite.velocityX = 0;
    catSprite.addAnimation("catStop", catStop)
    catSprite.changeAnimation("catStop")
    mouseSprite.addAnimation("mouseStop", mouseStop)
    mouseSprite.changeAnimation("mouseStop")
  }
}
