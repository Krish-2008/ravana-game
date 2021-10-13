    var rama;
    var ravana;
    var arrow;
    var sky;
    var ravan;
    var nightsound;
    var ravanaGroup;
    var ground;
    var ground2;
    var snake;
    var fire;
    var invisibleRavana;
    var arrowsound;



    function preload(){
        skyImg = loadImage("sky.png");
        ravanaImg = loadImage("ravan2.png");
        ramaImg = loadImage("rama2.png");
        arrowImg = loadImage("arrow3.png");
        laughsound = loadSound("laugh.mp3");
        skysound= loadSound("sky.mp3");
        snakeImg = loadImage("snake.png");
        fireImg = loadImage("fire2.png");
        invisibleRavanaImg = loadImage("ravana3.png");
        arrowsound = loadSound("arrow sound.mp3");

    }

    function setup(){
        createCanvas(500,500);
        sky = createSprite(200,200);
        sky.addImage(skyImg);
        sky.scale = 1;
        sky.velocityX = -3;
        


        ravan =createSprite(400,200);
        ravan.addImage(ravanaImg);
        ravan.scale = 1;
        
        

        rama = createSprite(100,200);
        rama.addImage(ramaImg);
        rama.scale = 0.3;
       
    
        
    
    }
    function draw(){
        
       
        background(0);
        
        rama.y = World.mouseY;
          
         
         if (keyDown("space")) {
            arrow = createSprite(200,200);
            arrow.addImage(arrowImg);
            arrow.scale = 0.3;
            arrow.velocityX = 3;
            arrow.y = rama.y;
            arrow.lifetime = 20;
            arrowsound.play();
        
            
            
           
    }
    
        drawSprites();
        if(arrow.isTouching(ravan)){
            ravan.destroy();
        }
        
        if (sky.x < 0){
            sky.x = sky.width/2;
          }
         
                
}
       
        
    
