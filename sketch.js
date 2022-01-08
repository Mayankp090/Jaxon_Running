var runner, runner_animation
var path, pathImg
var edges

function preload(){
  //pre-load images
  runner_animation = loadAnimation("Runner-1.png", "Runner-2.png")
  pathImg = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);
  edges = createEdgeSprites()

  path = createSprite(200, 200)
  path.addImage(pathImg)
  path.velocityY = 4
  path.scale = 1.2

  //create sprites here
  runner = createSprite(200, 340, 50, 50)
  runner.addAnimation("jaxon_running",runner_animation)
  runner.scale=0.1

  boundary1 = createSprite(10, 200, 10, 400)
  boundary1.visible = false
  boundary2 = createSprite(390, 200, 10, 400)
  boundary2.visible = false

}

function draw() {
  background(0);
  
  runner.x = World.mouseX
  runner.collide(boundary1)
  runner.collide(boundary2)
  runner.collide(edges[3])

  if(path.y > 400){
    path.y = height / 2
  }

  drawSprites()
}
