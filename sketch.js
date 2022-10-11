var personagem;
var wallGroup;
var end1, end2;
var persParado,persCaindo;
var persAndandoR,persAndandoL;


function preload(){
  persParado = loadAnimation("./imagens/persParadoR.png");
  persCaindo =  loadAnimation("./imagens/persCaindo.png");
  persAndandoR = loadAnimation("./imagens/persAndandoR.png","./imagens/persAndandoR-1.png");
  persAndandoL = loadAnimation("./imagens/persAndandoL.png","./imagens/persAndandoL-1.png");
}

function setup() {
createCanvas(windowWidth, windowHeight);
personagem = createSprite(windowWidth/2, 850, 20, 20);
personagem.addAnimation("parado",persParado);
personagem.addAnimation("caindo",persCaindo);
personagem.addAnimation("andandoR",persAndandoR);
personagem.addAnimation("andandoL",persAndandoL);
personagem.shapeColor = "red";
end1 = createSprite(windowWidth/2+300, 10, 100, 20);
end1.shapeColor = "blue";
end2 = createSprite(windowWidth/2-565, 350, 20, 100);
end2.shapeColor = "yellow";
wallGroup = new Group()
createMap();  

}

function draw() {
background("gray");

move(4);
console.log(personagem.x,personagem.y)
drawSprites();
}
