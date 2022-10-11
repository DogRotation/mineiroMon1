function move(speed){

    if(keyDown("W")){
        personagem.position.y = personagem.position.y -speed;
    }
    if(keyDown("A")){
        personagem.position.x = personagem.position.x -speed;
        personagem.changeAnimation("andandoL");
    }
    if(keyDown("S")){
        personagem.position.y = personagem.position.y +speed;
    }
    if(keyDown("D")){
        personagem.position.x = personagem.position.x +speed;
        personagem.changeAnimation("andandoR");
        
    }
}