function createMap(){
    var wallPosition = [
    {x: 0,y: windowHeight/2,w: 20,h: windowHeight},
    {x: windowWidth,y: windowHeight/2,w: 20,h:windowHeight},
    {x: windowWidth/2,y: 0,w:windowWidth,h: 20},
    {x: windowWidth/2,y: windowHeight,w: windowWidth,h: 20},
    {x: windowWidth/2-75,y: 750,w: 20,h: 200},
    {x: windowWidth/2+75,y: 750,w: 20,h: 200},
    {x: windowWidth/2-335,y: 640,w: 500,h: 20},
    {x: windowWidth/2+335,y: 640,w: 500,h: 20},
    {x: windowWidth/2-575,y: 250,w: 20,h: 800},
    {x: windowWidth/2+575,y: 250,w: 20,h: 800},
    {x: windowWidth/2, y: 500, w: 720,h: 20},
    {x: windowWidth/2+ 465,y: 420,w: 20,h: 180},
    {x: windowWidth/2+ 515,y: 320,w: 120,h: 20},
    {x: windowWidth/2+ 465,y: 130,w: 20,h: 250},
    {x: windowWidth/2+ 420,y: 245,w: 100,h: 20},
    {x: windowWidth/2+ 375,y: 100,w: 200,h:20},
    {x: windowWidth/2+ 275,y: 252,w: 20,h: 325},
    {x: windowWidth/2+ 220,y: 404,w: 100,h: 20},
    {x: windowWidth/2+ 175,y: 252,w: 20,h: 325},
    {x: windowWidth/2+ 75,y: 252,w: 20,h: 325},
    {x: windowWidth/2- 200,y: 100, w: 530,h: 20},
    {x: windowWidth/2- 455,y: 300, w: 20,h: 420},
    {x: windowWidth/2- 350,y: 350, w: 20,h: 320},
    {x: windowWidth/2- 300,y: 200,w: 100,h: 20},
    {x: windowWidth/2- 250,y: 300,w: 20,h: 220},
    {x: windowWidth/2- 95,y: 404,w: 330,h: 20},
    ] 
for(var c = 0;c < wallPosition.length;c++){
    var wall = createSprite(wallPosition[c].x,wallPosition[c].y,wallPosition[c].w,wallPosition[c].h);
    wall.shapeColor = "red";
    wallGroup.add(wall);
}
}