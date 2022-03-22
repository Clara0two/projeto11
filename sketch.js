
var pista
var repita
var trombadinha 
var trbd
var drt
var esq
function preload(){
  //imagens pré-carregadas
  repita=loadImage("path.png")
  trbd=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png")
}

function setup(){
  createCanvas(400,400);
  //crie os sprites aqui
 pista=createSprite(200,200)
 pista.addImage(repita)
 trombadinha=createSprite(200,320)
 trombadinha.addAnimation("Ana",trbd)
 drt=createSprite(410, 0, 100, 800)
 esq=createSprite(0, 0, 100, 800)
 drt.visible=false
 esq.visible=false
 trombadinha.debug=true
 trombadinha.setCollider('circle',0,0,40)
}

function draw() {
  background(0);
 drawSprites()
 trombadinha.collide(drt)
 trombadinha.collide(esq)
 pista.velocityY=3
 trombadinha.x=mouseX
 if(pista.y>400){
pista.y=pista.height/200
 }
}
