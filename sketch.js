var estrelaImage,backgroundImage;
var estrela, estrelaBody;
//create variable for fairy sprite and fairyImg
var fada,fadaImage,fadaSound;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	estrelaImage = loadImage("star.png");
	backgroundImage = loadImage("starNight.png");
	//load animation for fairy here
    fadaImage = loadAnimation("fairyImage1.png","fairyImage2.png");
	fadaSound = loadSound("sound_JoyMusic.mp3")
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
    fadaSound.play();
	//create fairy sprite and add animation for fairy
    fada = createSprite(130,520);
    fada.addAnimation("Fada voando",fadaImage)
    

	estrela = createSprite(650,30);
	estrela.addImage(estrelaImage);
	estrela.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	estrelaBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, estrelaBody);
	
	Engine.run(engine);

}


function draw() {
  background(backgroundImage);

  estrela.x = estrelaBody.position.x 
  estrela.y = estrelaBody.position.y 

  console.log(fada.x);

  //write code to stop star in the hand of fairy
  if(estrela.y > 450 && (fada.x >= 110 && fada.x <=170)){
    Matter.Body.setStatic(estrelaBody,true);
	fada.x = fada.x;
  }
  
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(estrelaBody,false); 
	}

	//writw code to move fairy left and right
    if(keyCode === LEFT_ARROW){
		fada.x = fada.x - 20;
	}
	if(keyCode === RIGHT_ARROW){
		fada.x = fada.x + 20;
	}
}