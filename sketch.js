var tela = 1;

var casa1;
var casa2;
var predio;

function preload() {
  casa1 = loadImage("casa1.jpg");
  casa2 = loadImage("casa2.jpg");
  predio = loadImage("predio.jpg")
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  
  if (tela == 1) {
    //Tela inicial   
    background(220);
    textSize(32);
    text("Bem vindo!", 220, 100);
    text("Pressione Enter para iniciar!", 100, 200);
    text("Ou, pressione C para créditos!", 80, 350);
    
    if (key == "Enter") {
      tela = 3;
    }
     if (key == "c") {
      tela = 4;
    }
    
    
  } else if (tela == 2) {
    //Tela do jogo 1
    background(220);
    textSize(32);
    text("Jogo!", 100, 100);
    
    if (key == "b") {
      tela = 1;
    }
    
  } else if (tela == 3) {
    //Tela de Manual
    background(220);
    textSize(20);
    text("Bem vindo!", 240, 100);
    text("Antes de começar, com qual casa a sua se parece?", 80, 150)
    if (key == "b") {
      tela = 1;
    }

    image(casa1, 50, 200, 150, 100);
    image(casa2, 225, 200, 150, 100);
    image(predio, 400, 200, 150, 100);
    
    //Seleção da primeira casa
    if (mouseX > 50 && mouseX < 50+150 && mouseY > 200 && mouseY < 200 +100) {
    fill(255,255,0)
    if(mouseIsPressed){
    tela = 4;
    } else {
    fill(0); //Cor dos botões
  }
}
    
  } else if (tela == 4) {
    //Tela de créditos
    background(220);
    textSize(32);
    text("Créditos!", 100, 100);
    if (key == "b") {
      tela = 1;
    }
    
  }
  
}