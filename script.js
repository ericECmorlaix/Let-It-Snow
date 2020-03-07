let song;
let abscisses = [], ordonnees = [], diametres = [];
let nbFlocons = 200;
let ratio = 0.8 ;

function preload() {
  song = loadSound('https://cdn.glitch.com/0c39a2cf-9d82-43fe-84f3-5676768418f9%2FLet-It-Snow%20.mp3?v=1583576883218');
}


function setup() {
  createCanvas(windowWidth*ratio, windowHeight*ratio);
  fill(255,255,255);
  noStroke();
  for (let i=0;i<nbFlocons;i++) {
    abscisses.push(random(0,width));
    ordonnees.push(random(0,height));
    diametres.push(random(2,5));
  }
}

function maFonction() {
  if (song.isPlaying()) {    
    song.stop();     
  } else {
    song.play();    
  }
}

function draw(){
  background(0,0,0);
  
  for (let i=0;i<nbFlocons;i++) {
    ellipse(abscisses[i],ordonnees[i],diametres[i],diametres[i]);
    ordonnees[i]+=diametres[i]*0.5;
    abscisses[i]+=random(-0.5,0.5);
      if (ordonnees[i]> height) {
        ordonnees[i]=0;
        abscisses[i]=random(width);
        diametres[i]=random(2,8);
      }
  } 
}
