var cacador1,cacador2,cacador3;
var navio;
var indio;
var imgdefundo;
var balacacador;
var dardo;
var cacador1img,cacador2img,cacador3img;
var navioimg;
var indioimg;
var imgdefundoimg;
var balacacadorimg;
var dardoimg;

function preload(){
    cacador1img=loadImage("cacador1.png");
    cacador2img=loadImage("cacador2.png");
    cacador3img=loadImage("cacador3.png");
    navioimg=loadImage("barco.png");
    dardoimg=loadImage("zarabatana.png");
    balacacadorimg=loadImage("bala.png");
    indioimg=loadImage("indio.png");
    imgdefundoimg=loadImage("background.gif");

}

function setup(){
  createCanvas(1600,800);
    cacador1=createSprite(1440,80,50,60);
    cacador2=createSprite(1240,80,50,60);
    cacador3=createSprite(1140,80,50,60);
    navio=createSprite(450,80,140,100);
    // balacacador=createSprite
    // dardo=createSprite
    // indio=createSprite



    
}

function draw(){
background(imgdefundoimg);
drawSprites();
}