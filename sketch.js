


var tela = 1;
var win = false; //variável de vitória!

//variáveis do tamanho do canvas

var larg = 600;
var alt = 400;

//variáveis relacionadas ao som
let music;
let vitoria;
let vmusic;



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
var teclas;
var pata;
var certo;

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

//Textos de interação com o local!
var t1 = false;

var t2 = false;

var t3 = false;

var t4 = false;




//Variáveis do jogador
var gato;
var gatoanimado = [];
var gatoanimadoe = [];
var gc = 0;
var gcl = 0;
var gatoandadevagar = 0;
var gatoparado = true;
var gatoup = false;
var gatodown = false;
var gatoleft = false;
var gatoright = false;

//Animação de vitória
var gp1; 
var gp2;
var c = 0;

//Variáveis do spawn
var mgx = 200;
var mgy = 200;

var egx = 400;
var egy = 100;

var cgx = 200;
var cgy = 100;

var igx = 400;
var igy = 200;

var gx = 200;

var gy = 100;

var m = 2; //Velocidade do gato

//Tamanho do gato
var gl = 60;
var ga = 80;

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
  
  for (g = 0; g < 3; g++){
    gatoanimado[g] = loadImage("assets/gato/ator" + g + ".png");
    console.log("assets/Gato/ator" + g + ".png")
  }
  for (gll = 0; gll < 3; gll++){
    gatoanimadoe[gll] = loadImage("assets/gato/atorl" + gll + ".png");
  }
  certo = loadImage("assets/correct.png");
  pata = loadImage("assets/pata.png");
  teclas = loadImage("assets/teclas.png")
  casa1 = loadImage("assets/casa1.png");
  casa2 = loadImage("assets/casa2.png");
  predio = loadImage("assets/predio.png");
  mapa = loadImage("assets/mapa.png");
  gato = loadImage("assets/gato/ator1.png");
  mala = loadImage("assets/mala.png");
  cama = loadImage("assets/cama.png");
  livros = loadImage("assets/livros.png");
  globo = loadImage("assets/bolae.png");
  chuveiro = loadImage("assets/chuveiro.png");
  vela = loadImage("assets/vela.png");
  choco = loadImage("assets/chocolate.png");
  aviao = loadImage("assets/avião.png");
  emoji = loadImage("assets/gato/emoji.png");
  gp1 = loadImage("assets/gato/pg1.png");
  gp2 = loadImage("assets/gato/pg2.png");
  soundFormats('mp3', 'ogg');
  vmusic = loadSound("assets/sound/victorymusic.mp3");
  music = loadSound("assets/sound/musica.mp3");
  vitoria = loadSound("assets/sound/Victory.mp3");
  
  
}

function setup() {
  createCanvas(larg, alt);
  music.loop();
  music.setVolume(0.3);
  vmusic.setVolume(0);
  noCursor();
}


function draw() {
  
  if (tela == 1) {
    //Tela inicial 
    frameRate(60)
  cm = 0;
  cm1 = 0;
  //Caso o jogo seja reiniciado, essas variáveis devem ser falsas.
  
  s1 = false;
  s2 = false;
  s3 = false;

  e1 = false;
  e2 = false;

  i1 = false;
  i2 = false;
    
  m1 = false;
  m2 = false;
 
  c1 = false;
  c2 = false;
    
  escola1 = false;
  escola2 = false;

  igreja1 = false;
  igreja2 = false;

  casas1 = false;
  casas2 = false;
  
  sup1 = false;
  sup2 = false;
    background(220);
    textStyle(NORMAL)
    textSize(32);
    textStyle(ITALIC)
    text("Mapa da Cidade", 180, 100);
    textStyle(NORMAL)
    text("Pressione Enter para iniciar!", 90, 200);
    text("Pressione I para instruções!", 90, 270)
    text("Ou, pressione C para créditos!", 80, 350);
    
    if (key == "Enter") {
      tela = 3;
    }
     if (key == "c") {
      tela = 9;
    }
    if (key == "i" || key == "I"){
      tela = 10;
    }
    
    
  } else if (tela == 2) {
    
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
    
    //Movimento do personagem
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)){
      gatoparado = false
      gatoleft = true;
      gatoup = false;
      gatodown = false;
      gatoright = false;
      gx = gx - m;
      
    } else {
      gatoleft = false;
    }
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)){
      gatoparado = false;
      gatoright = true;
      gatoleft = false;
      gatoup = false;
      gatodown = false;
      gx = gx + m;
      
    } else {
      gatoright = false;
    }
    if (keyIsDown(UP_ARROW) || keyIsDown(87)){
      gatoparado = false;
      gatoup = true;
      gatoright = false;
      gatoleft = false;
      gatodown = false;
      gy = gy - m;
      
    } else {
      gatoup = false;
    }
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)){
      gatoparado = false;
      gatodown = true;
      gatoright = false;
      gatoleft = false;
      gatoup = false;
      gy = gy + m;
      
    } else {
      gatodown = false;
    }
    
    
    if (gatoparado == true){
     image(gatoanimado[gc], gx, gy, gl, ga); //Personagem
    }
    
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)){

      if (gatoright == true){
      image(gatoanimado[gc], gx, gy, gl, ga)
    gatoandadevagar++;
    if (gatoandadevagar >= 7){
      gatoandadevagar = 0;
      gc++;
    if (gc >= 3) {
      gc = 0;
    }
    }
    } 
    }
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
      
      if (gatoleft == true) {
      image(gatoanimadoe[gcl], gx, gy, gl, ga);
      gatoandadevagar++;
    if (gatoandadevagar >= 7){
      gatoandadevagar = 0;
      gcl++;
    if (gcl >= 3) {
      gcl = 0;
    }
    }
    } 
    }
    if (keyIsDown(UP_ARROW) || keyIsDown(87)){
      
      if (gatoup == true){
      image(gatoanimado[gc], gx, gy, gl, ga)
    gatoandadevagar++;
    if (gatoandadevagar >= 7){
      gatoandadevagar = 0;
      gc++;
    if (gc >= 3) {
      gc = 0;
    }
    }
    }
    }
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)){
     
      if (gatodown == true){
      image(gatoanimado[gc], gx, gy, gl, ga)
    gatoandadevagar++;
    if (gatoandadevagar >= 7){
      gatoandadevagar = 0;
      gc++;
    if (gc >= 3) {
      gc = 0;
    }
    }
    } 
    }
    if (gatoup == false && gatodown == false && gatoleft == false || gatoright == false){
      gatoparado = true;
    }
    
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
    
    //Texto de interação com a casa!
    if (gx > r1x + 20 && gx < r1x+r1w + 20 && gy > r1y + 20 && gy < r1y + r1h + 20) {
       t1 = true;
     } else {
       t1 = false;
     }
    if (t1 == true && c1 == false && c2 == false){
      textStyle(BOLD)
       fill(0);
      text("Clique aqui!", 30, 20);
    }
    
    //Texto de interação com a escola!
    if (gx > r2x - 10 && gx < r2x+r2w - 10 && gy > r2y + 10 && gy < r2y +r1h + 10) {
       t2 = true;
     } else {
       t2 = false;
     }
    if (t2 == true && e1 == false && e2 == false){
      textStyle(BOLD)
       fill(0);
      text("Clique aqui!", 420, 20);
    }
    
    //Texto de interação com a Igreja!
    if (gx > r2x-80 && gx < r2x+r2w-80 && gy > r3y-80 && gy < r3y +r1h-80) {
       t3 = true;
    } else {
      t3 = false;
    }
    if (t3 == true && i1 == false && i2 == false){
      textStyle(BOLD)
       fill(0);
      text("Clique aqui!", 380, 300);
    }
    
    //Interação com o mercado
    
    if (gx > r1x + 20 && gx < r1x+r1w + 20 && gy > r3y -80 && gy < r3y +r1h - 80) {
       t4 = true;
     } else {
       t4 = false;
     }
     if (t4 == true && m1 == false && m2 == false){
      textStyle(BOLD)
       fill(0);
      text("Clique aqui!", 40, 305);
    }
    
  image(pata,mouseX, mouseY, 60,60)
    textSize(16);
    
    if (e1 == true && e2 == true) {
        textStyle(BOLD)
       fill(0);
      text("Escola", 465, 78);
    }
    if(i1 == true && i2 == true) {
      textStyle(BOLD)
       fill(0);
      text("Igreja", 475, 340);
    }
    if (m1 == true && m2 == true){
       textStyle(BOLD)
       fill(0);
      text("Supermercado", 40, 305);
    }
    if(c1 == true && c2 == true){
      textStyle(BOLD)
       fill(0);
      text("Casa", 80, 20);
    }
    
    if(e1 == true && e2 == true && i1 == true && i2 == true && m1 == true && m2 == true && c1 == true && c2 == true ){
      music.stop();
    
    vitoria.play();
    vitoria.playMode("restart");
      tela = 4;
      win = true;
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
  
  image(pata,mouseX, mouseY, 60,60)
    
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
    //Tela de vitória
    
    
    frameRate(1.5);
    
    
    
    
    
    
    background(220);
    textSize(32);
    text("Você ganhou!", 200, 100);
 
    if (c === 0){
      image(gp1, 240, 200, (175/1.5), (262/1.5));
      c++
    } else {
      image (gp2, 190, 150, (350/1.5), (262/1.5));
      c = 0;
    }
    text("Pressione Enter para continuar!", 70, 390);
    if (key == "Enter") {
      vmusic.loop();
      vmusic.setVolume(1);
      tela = 9;
    }
    
  } else if (tela == 5) {
   background(100);
    textSize(20);
    
    fill(0);
  text("Que lugar é esse?", 230, (100-70));
    
    fill(0, 102, 153);
    rect(60, (150-70), 200, 50, 80);
   
    fill(255);    
    text("Laboratório", 110, (180-70));
    
    fill(0, 102, 153);
    rect(360, (150-70), 200, 50, 80);
    
    fill(255);
    text("Casa", 430, (180-70));
    
    
  
        if (mouseX > 360 && mouseX < 360+200 && mouseY > (150-70) && mouseY < (150-70)+50 && mouseIsPressed) {
      c1 = true;
      casas1 = true;
      
    }
    
    if (casas1 == true) {
    image(certo, 500, (150-70), 80, 70);
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
      image(certo, 360, 240, 80, 70);
    }
    
    
    if (c1 == true && c2 == true){
    
      
    fill(0, 102, 153);
    rect(250, 340, 120, 50, 80)
    fill(255);
    text("Continuar!",262, 370); 
      image(emoji, 370, 330, 80, 70);
    }
     image(pata,mouseX, mouseY, 60,60)
    if (casas1 == true && casas2 == true && mouseX > 250 && mouseX < 250+120 && mouseY > 340 && mouseY < 340+50 && mouseIsPressed) {
      gx = cgx
      gy = cgy
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
      image(certo, 270, (150-70), 80, 70);
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
      image(certo, 350, 250, 80, 70);
    }
    
    
    if (e1 == true && e2 == true){
      
    fill(0, 102, 153);
    rect(250, 340, 120, 50, 80)
    fill(255);
    text("Continuar!",262, 370); 
      image(emoji, 370, 330, 80, 70);
      
    }
     
    if (escola1 == true && escola2 == true && mouseX > 250 && mouseX < 250+120 && mouseY > 340 && mouseY < 340+50 && mouseIsPressed) {
      gx = egx
      gy = egy
      tela = 2;
    }
     
  
  image(pata,mouseX, mouseY, 60,60)
    
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
      image(certo, 500, (150-70), 80, 70);
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
      image(certo, 200, 250, 80, 70);
    }
    
    
    if (i1 == true && i2 == true){
      
    fill(0, 102, 153);
    rect(250, 340, 120, 50, 80)
    fill(255);
    text("Continuar!",262, 370); 
      image(emoji, 370, 330, 80, 70);
    }
     image(pata,mouseX, mouseY, 60,60)
    if (i1 == true && i2 == true && (mouseX > 250) && (mouseX < 250+120) && (mouseY > 340) && (mouseY < 340+50) && mouseIsPressed) {
      gx = igx
      gy = igy
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
      image(certo, 270, (150-70), 80, 70);
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
      image(certo, 500, 240, 80, 70);
    }
    
    
    if (m1 == true && m2 == true){
      
    fill(0, 102, 153);
    rect(250, 340, 120, 50, 80)
    fill(255);
    text("Continuar!",262, 370); 
      image(emoji, 370, 330, 80, 70);
    }
     image(pata,mouseX, mouseY, 60,60)
    if (sup1 == true && sup2 == true && mouseX > 250 && mouseX < 250+120 && mouseY > 340 && mouseY < 340+50 && mouseIsPressed) {
      gx = mgx;
      gy = mgy;
      
      tela = 2;
    }
  } else if (tela == 9) {
  frameRate(1.5)
   background(100);
    textSize(20)
   
    fill(0);
    text("Créditos", 250, (100-70));
    text("Programador:", 230, (100-40));
    text("Erick Marques Oliveira Azevedo", 160, 90)
    textSize(10)
    
      
    if (win == true){
      text("(Pressione v para voltar)", 460, 390)
    if (c === 0){
      image(gp1, 30, 230, (175/1.5), (262/1.5));
      c++
    } else {
      image (gp2, -20, 170, (350/1.5), (262/1.5));
      c = 0;
    }
  }  
    textSize(20)
    text("Agradecimentos especiais:", 180, 240);
    text("Elli Pedro (Testador)", 210, 270);
    text("Elton Marques (Testador)", 190, 300);
    text("Javier Aranda (Testador)", 200, 330);
    text("Janmille Roberta (Educadora)", 170, 360);
    text("Orivaldo Vieira (Professor)", 190, 390);
    if (win == false) {
      textSize(10)
      text("(Pressione v para voltar)", 460, 390)
    }
    if (key == "v" || key == "V" && win == false) {
      tela = 1;
    }
    if (key == "v" || key == "V" && win == false){
        vmusic.stop();
      music.play()
        }
  } else if (tela == 10){
    background(255,236,192);
    textSize(20);
    
    fill(0);
    text("Edward é um gatinho animado e energético, esse é ele:", 20, 30)
    image(gato,520,10,60,80)
    text("Para mover o Edward, use as setas do seu teclado!", 40, 80);
    image(teclas, 50, 10, 400, 400);
    text("Aperte a seta esquerda, ou D para continuar!", 40, 380)
    image(pata,mouseX, mouseY, 60,60)
    if (key == "d" || key == RIGHT_ARROW){
      tela = 11
    }
  } else if (tela == 11){
    background(255,236,192);
    textSize(20);
    
    fill(0);
    
    text('Esse é o mouse: ', 60, 40);
    image(pata, 220, 10, 60, 60);
    text('Quando você chegar perto de uma estrutura clique nela! ',30, 90);
    image(casa1, 30, 100, 150, 100);
    image(pata, 100, 160, 60, 60);
    image(gato, 50, 180, gl, ga);
    text("Clique!", 150, 200);
    
    text("Após isso, uma tela com perguntas irá aparecer.", 10, 280)
    text("Responda corretamente e um correto irá aparecer!", 10, 310);
    image(certo, 510, 280, 80, 70)
    text("Responda tudo corretamente para vencer!", 10, 340);
    text("Clique com o mouse para continuar!", 10, 380);
    image(pata,mouseX, mouseY, 60,60)
    if (mouseIsPressed) {
      tela = 1;
    }
  }
}