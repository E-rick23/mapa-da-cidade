


var tela = 1;

//variáveis do tamanho do canvas

var larg = 600;
var alt = 400;

//variáveis relacionadas ao som
let music;

//variáveis dos objetos
var casa1;
var casa2;
var predio;
var mapa;
var mala;
var livros;
var cama;
var globo;
var chuveiro;
var vela;
var choco;
var emoji;
var aviao;

//Variáveis dos emojis de seleção correta

var escola1 = false;
var escola2 = false;

var igreja1 = false;
var igreja2 = false;

var casas1 = false;
var casas2 = false;

var sup1 = false;
var sup2 = false;

//Hitbox
//1 - casa, 2 - escola, 3 - igreja, 4- mercado
var r1x = 0;
var r1y = 0;
var r1w = 210;
var r1h = 132;

var r2x = 380;
var r2y = 0;
var r2w = 220;

var r3y = 278;

var r4y = 275;

    




//Variáveis do jogador
var gato; //Variável da imagem

//Variáveis do spawn
var gx = 200;
var gy = 200;

var m = 2; //Velocidade do gato

//Tamanho do gato
var gl = 40;
var ga = 60;

//Variaveis das casas 

var c1x = 10;

var c2x = 10;

var p1x = -40;

var p2x = 60;


//Variáveis de escolha da casa
var s1 = false;
var s2 = false;
var s3 = false;

//Variáveis de resposta correta

//escola
var e1 = false;
var e2 = false;

//igreja
var i1 = false;
var i2 = false;

//mercado 

var m1 = false;
var m2 = false;

//casa 

var c1 = false;
var c2 = false;


function preload() {
  
  casa1 = loadImage("assets/casa1.png");
  casa2 = loadImage("assets/casa2.png");
  predio = loadImage("assets/predio.png");
  mapa = loadImage("assets/mapa.png");
  gato = loadImage("assets/gb.png");
  mala = loadImage("assets/mala.png");
  cama = loadImage("assets/cama.png");
  livros = loadImage("assets/livros.png");
  globo = loadImage("assets/bolae.png");
  chuveiro = loadImage("assets/chuveiro.png");
  vela = loadImage("assets/vela.png");
  choco = loadImage("assets/chocolate.png");
  aviao = loadImage("assets/avião.png");
  emoji = loadImage("assets/emoji.png");
  soundFormats('mp3', 'ogg');
  music = loadSound("assets/musica.mp3");
  
  
}

function setup() {
  createCanvas(larg, alt);
  //music.loop();
  //music.setVolume(0.3);
}


function draw() {
  
  if (tela == 1) {
    //Tela inicial   
    background(220);
    textSize(32);
    text("Bem vindo!", 220, 100);
    text("Pressione Enter ou clique para iniciar!", 30, 200);
    text("Ou, pressione C para créditos!", 80, 350);
    
    if (key == "Enter" || mouseIsPressed) {
      tela = 3;
    }
     if (key == "c") {
      tela = 4;
    }
    
    
  } else if (tela == 2) {
    //Tela do jogo 1
    background(220);
    textSize(20);
      
    image(mapa, 0, 0, 600, 400);
    
    
    //Casa selecionada
    if (s1 == true){
      image(casa1, c1x, 0, 180, 130);
      s2 = false;
      s3 = false;
    }
    if (s2 == true) {
      image(casa2, c2x, 0, 180, 130);
      s1 = false;
      s3 = false;
    }
    if (s3 == true){
      image(predio, p1x, 0, 180, 130);
      image(predio, p2x, 0, 180, 130);
      s1 = false;
      s2 = false;
    }
    
    
    
    image(gato, gx, gy, gl, ga); //Personagem
    
    //Agora vamos impedir que o gato saia do mapa!
    
    if (gx < 0) {
      gx = gx + 20;
    }
    if (gy < 0) {
      gy = gy + 20;
    }
    if (gx > larg-20) {
      gx = gx - 20;
    }
    if (gy > alt-20) {
      gy = gy - 20;
    }
    // E impedir que ele atravesse as casas!   
    
    //Cantos que o personagem não deve entrar
    //rect(r1x, r1y, r1w, r1h);
    //rect(r2x, r2y, r2w, r1h);
    //rect(r2x,r3y,r2w,r1h);
    //rect(r1x, r4y, r1w, r1h);
    
     if ((gx+30 > r1x && gx + 20 < r1x + r1w && gy+25 > r1y && gy + 40 < r1y + r1h) || (gx+30 > r2x && gx + 20 < r2x + r2w && gy+25 > r2y && gy + 40 < r2y + r1h) || (gx+30 > r2x && gx + 20 < r3y + r2w && gy+60 > r3y && gy + 40 < r3y + r1h) || (gx+30 > r1x && gx + 20 < r1x + r1w && gy+60 > r4y && gy + 40 < r4y + r1h) ){
      m = m*-1
    } else {
      m = 2
    }
   
     if (mouseX > r1x && mouseX < r1x+r1w && mouseY > r1y && mouseY < r1y +r1h && mouseIsPressed) {
       tela = 5;
     }
    if (mouseX > r2x && mouseX < r2x+r2w && mouseY > r2y && mouseY < r2y +r1h && mouseIsPressed) {
       tela = 6;
     }
    if (mouseX > r2x && mouseX < r2x+r2w && mouseY > r3y && mouseY < r3y +r1h && mouseIsPressed) {
       tela = 7;
     }
    if (mouseX > r1x && mouseX < r1x+r1w && mouseY > r3y && mouseY < r3y +r1h && mouseIsPressed) {
       tela = 8;
     }
       
       
    //Movimento do personagem
    if (keyIsDown(LEFT_ARROW)){
      gx = gx - m;
      
    }
    if (keyIsDown(RIGHT_ARROW)){
      gx = gx + m;
      
    }
    if (keyIsDown(UP_ARROW)){
      gy = gy - m;
      
    }
    if (keyIsDown(DOWN_ARROW)){
      gy = gy + m;
      
    }
    
    if (key == "c") {
      fill(0);
      text("Essa é sua casa!", 25, 25);
    }
  
    if (key == "i") {
      fill(0);
      text("Essa é a igreja.", 425, 270);
    }
    if (key == "m") {
      fill(0);
      text("Esse é o supermercado.", 25, 270);
    }
    
   fill(0,100,200); //Cor do mouse
  ellipse(mouseX, mouseY, 30,30)
    
    if (e1 == true && e2 == true) {
        textStyle(BOLD)
       fill(0);
      text("Escola", 460, 80);
    }
    if(i1 == true && i2 == true) {
      textStyle(BOLD)
       fill(0);
      text("Igreja", 470, 340);
    }
    if (m1 == true && m2 == true){
       textStyle(BOLD)
       fill(0);
      text("Supermercado", 30, 305);
    }
    if(c1 == true && c2 == true){
      textStyle(BOLD)
       fill(0);
      text("Casa", 80, 20);
    }
    
    if(e1 == true && e2 == true && i1 == true && i2 == true && m1 == true && m2 == true && c1 == true && c2 == true ){
      tela = 4;
    }
    
  } else if (tela == 3) {
    //Tela de seleção!
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
  //mouse  
  fill(0,100,200); //Cor do mouse
  ellipse(mouseX, mouseY, 30,30)
    
    //Seleção da casa pequena
    if (mouseX > 50 && mouseX < 50+150 && mouseY > 200 && mouseY < 200 +100 && mouseIsPressed) {
    fill(255,255,0)
    s1 = true;
    tela = 2;
    } else {
    fill(0); //Cor dos botões
  }

    //Seleção da casa grande
     if (mouseX > 50 && mouseX < 225+150 && mouseY > 200 && mouseY < 200 +100 && mouseIsPressed) {
    fill(255,255,0)
    s2 = true;
      
    tela = 2;
    } else {
    fill(0); //Cor dos botões
  }
    //Seleção do prédio
    if (mouseX > 50 && mouseX < 400+150 && mouseY > 200 && mouseY < 200 +100 && mouseIsPressed) {
    fill(255,255,0)
    s3 = true;
    tela = 2;
    } else {
    fill(0); //Cor dos botões
  }
    
  } else if (tela == 4) {
    //Tela de créditos
    background(220);
    textSize(32);
    text("Créditos!", 100, 100);
    if (key == "b") {
      tela = 1;
    }
    
  } else if (tela == 5) {
   background(100);
    textSize(20);
    
    fill(0);
  text("Que lugar é esse?", 230, (100-70));
    
    fill(0, 102, 153);
    rect(60, (150-70), 200, 50, 80);
   
    fill(255);    
    text("Casa", 90, (180-70));
    
    fill(0, 102, 153);
    rect(360, (150-70), 200, 50, 80);
    
    fill(255);
    text("Laboratório", 380, (180-70));
    
    
  
        if (mouseX > 60 && mouseX < 60+200 && mouseY > (150-70) && mouseY < (150-70)+50 && mouseIsPressed) {
      c1 = true;
      casas1 = true;
      
    }
    
    if (casas1 == true) {
      image(emoji, 270, (150-70), 60, 50);
    }
    fill(255);
    text("Que objetos podem ser encontrados nesse lugar?", 100, (250-70));
    
    image(globo, 90, 210, 120, 100);
    
    
    image(cama, 250, 210, 100, 100);
    
    
    image(aviao, 420, 210, 80, 100);
    
    fill(0);
    
    if (mouseX > 250 && mouseX < 250+80 && mouseY > 210 && mouseY < 210+100 && mouseIsPressed) {
      c2 = true;
      casas2 = true;
    }
    if (casas2 == true) {
      image(emoji, 360, 240, 60, 50);
    }
    
    
    if (c1 == true && c2 == true){
      
    fill(0, 102, 153);
    rect(170, 340, 300, 50, 80)
    fill(255);
    text("Clique aqui para continuar!",200, 370); 
    }
    if (casas1 == true && casas2 == true && mouseX > 170 && mouseX < 170+300 && mouseY > 340 && mouseY < 340+50 && mouseIsPressed) {
      tela = 2;
    }

    
  } else if (tela == 6) {
    background(100);
    textSize(20);
    
    fill(0);
  text("Que lugar é esse?", 230, (100-70));
    
    fill(0, 102, 153);
    rect(60, (150-70), 200, 50, 80);
   
    fill(255);    
    text("Escola", 130, (180-70));
    
    fill(0, 102, 153);
    rect(360, (150-70), 200, 50, 80);
    
    fill(255);
    text("Praça",430, (180-70));
    
    
  
        if (mouseX > 60 && mouseX < 60+200 && mouseY > (150-70) && mouseY < (150-70)+50 && mouseIsPressed) {
      e1 = true;
      escola1 = true;
      
    }
    
    if (escola1 == true) {
      image(emoji, 270, (150-70), 60, 50);
    }
    fill(255);
    text("Que objetos podem ser encontrados nesse lugar?", 100, (250-70));
    
    image(cama, 90, 210, 100, 100);
    
    
    image(livros, 250, 210, 100, 100);
    
    
    image(mala, 420, 210, 80, 100);
    
    fill(0);
    
    if (mouseX > 250 && mouseX < 250+100 && mouseY > 210 && mouseY < 210+100 && mouseIsPressed) {
      e2 = true;
      escola2 = true;
    }
    if (escola2 == true) {
      image(emoji, 350, 250, 60, 50);
    }
    
    
    if (e1 == true && e2 == true){
      
    fill(0, 102, 153);
    rect(170, 340, 300, 50, 80)
    fill(255);
    text("Clique aqui para continuar!",200, 370); 
    }
    if (escola1 == true && escola2 == true && mouseX > 170 && mouseX < 170+300 && mouseY > 340 && mouseY < 340+50 && mouseIsPressed) {
      tela = 2;
    }
     
  fill(0,100,200); //Cor do mouse
  ellipse(mouseX, mouseY, 30,30)
    
  } else if (tela == 7) {
   background(100);
    textSize(20);
    
    fill(0);
  text("Que lugar é esse?", 230, (100-70));
    
    fill(0, 102, 153);
    rect(60, (150-70), 200, 50, 80);
   
    fill(255);    
    text("Mercado", 120, (180-70));
    
    fill(0, 102, 153);
    rect(360, (150-70), 200, 50, 80);
    
    fill(255);
    text("Igreja",430, (180-70));
    
    
  
        if (mouseX > 360 && mouseX < 360+200 && mouseY > (150-70) && mouseY < (150-70)+50 && mouseIsPressed) {
      i1 = true;
      igreja1 = true;
      
    }
    
    if (igreja1 == true) {
      image(emoji, 500, (150-70), 60, 50);
    }
    fill(255);
    text("Que objetos podem ser encontrados nesse lugar?", 100, (250-70));
    
    image(vela, 90, 210, 100, 100);
    
    
    image(globo, 250, 210, 100, 100);
    
    
    image(chuveiro, 420, 210, 80, 100);
    
    fill(0);
    
    if (mouseX > 90 && mouseX < 90+100 && mouseY > 210 && mouseY < 210+100 && mouseIsPressed) {
      i2 = true;
      igreja2 = true;
    }
    if (igreja2 == true) {
      image(emoji, 200, 250, 60, 50);
    }
    
    
    if (i1 == true && i2 == true){
      
    fill(0, 102, 153);
    rect(170, 340, 300, 50, 80)
    fill(255);
    text("Clique aqui para continuar!",200, 370); 
    }
    if (igreja1 == true && igreja2 == true && mouseX > 170 && mouseX < 170+300 && mouseY > 340 && mouseY < 340+50 && mouseIsPressed) {
      tela = 2;
    }
    
  } else if (tela == 8) {
   background(100);
    textSize(20);
    
    fill(0);
  text("Que lugar é esse?", 230, (100-70));
    
    fill(0, 102, 153);
    rect(60, (150-70), 200, 50, 80);
   
    fill(255);    
    text("Supermercado", 90, (180-70));
    
    fill(0, 102, 153);
    rect(360, (150-70), 200, 50, 80);
    
    fill(255);
    text("Posto de gasolina", 380, (180-70));
    
    
  
        if (mouseX > 60 && mouseX < 60+200 && mouseY > (150-70) && mouseY < (150-70)+50 && mouseIsPressed) {
      m1 = true;
      sup1 = true;
      
    }
    
    if (sup1 == true) {
      image(emoji, 270, (150-70), 60, 50);
    }
    fill(255);
    text("Que objetos podem ser encontrados nesse lugar?", 100, (250-70));
    
    image(predio, 90, 210, 120, 100);
    
    
    image(cama, 250, 210, 100, 100);
    
    
    image(choco, 420, 210, 80, 100);
    
    fill(0);
    
    if (mouseX > 420 && mouseX < 420+80 && mouseY > 210 && mouseY < 210+100 && mouseIsPressed) {
      m2 = true;
      sup2 = true;
    }
    if (sup2 == true) {
      image(emoji, 500, 240, 60, 50);
    }
    
    
    if (m1 == true && m2 == true){
      
    fill(0, 102, 153);
    rect(170, 340, 300, 50, 80)
    fill(255);
    text("Clique aqui para continuar!",200, 370); 
    }
    if (sup1 == true && sup2 == true && mouseX > 170 && mouseX < 170+300 && mouseY > 340 && mouseY < 340+50 && mouseIsPressed) {
      tela = 2;
    }
  }
}