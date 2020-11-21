//Create variables here
var dog, dogImg, happyDogImg;
var database, food, foodval;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250,250,100,100);
  dog.addImage(dogImg);
  dog.scale = 0.3;

  database = firebase.database();

  food = database.ref('Food');
  food.on("value",read);

}


function draw() {  
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW))
  {
    if(foodval<=0)
   {
     foodval = 0;
   }else{
     foodval = foodval-1;
   }
    dog.addImage(happyDogImg);
    dog.scale = 0.3;
  }

  if(keyWentUp(UP_ARROW))
  {
    dog.addImage(dogImg);
    dog.scale = 0.3;
  }

  drawSprites();
  //add styles here
  fill("white");
  //strokeWeight(2);
  stroke("white");
  textSize(20);
  text("Note: Press Up arrow key to feed the dog with milk",20,50);
  text("Milk:"+foodval, 200,100);

}

function read(data)
{
   foodval = data.val();
}

function write(x)
{
   
}