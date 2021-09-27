
var t = 0;
var sound = false;//turn this to true if you want sound!
var shootingStar = function(x,y){
    this.position = new PVector(x,y);
    this.velocity = new PVector(-3,3);
    this.acceleration = new PVector(random(-0.29,-0.3),random(0.8,1));
    this.size = 2;
    this.speed = random(1,2);
    this.draw = function() {
        noStroke();
        fill(255, 255, 255);
        ellipse(this.position.x,this.position.y,this.size,this.size);
    };
    this.update=function(){
        this.size+=0.04;
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.velocity.normalize();
        this.velocity.mult(this.speed);
        
    };
};
var stars = [];
stars.add = function(x,y){
    stars.push( new shootingStar(x,y));
};
stars.draw= function() {
    for(var i=0;i<stars.length;i++){
        stars[i].draw();
        stars[i].update();
    }
};

mouseClicked = function(){
    stars.add(mouseX, mouseY);
    if(sound){
      playSound(getSound("retro/coin"));  
    }
    
};
var dots = [];
background(19, 0, 82);
rect(0,0,400,400);
var draw = function() {
if(stars.length>50){//this reduces the lagging
    stars.shift();
}
    t++;
    if(t%40===20){
        stars.add(random(0,500),random(-100,0));
        stars.add(random(0,500),random(-100,0));
        stars.add(random(400,500),random(200));
    }
    
    stars.draw();
    fill(0, 4, 84,20);
    rect(0,0,400,400);

 for(var i=0;i<10;i++){
     stroke(255, 255, 255);
     strokeWeight(2);
     point(random(width),random(height));
 }
 noStroke();
 for(var i=0;i<6;i++){
     fill(199, 197, 219, 1);
 ellipse(200,400+i*23,400,400);
 }
 fill(51, 51, 51);
rect(0,350,400,400);
 beginShape();

 vertex(2,341);
 vertex(57,320);
 vertex(91,335);
 vertex(118,338);
 vertex(147,316);
 vertex(188,317);
 vertex(233,324);
 vertex(258,331);
 vertex(304,311);
 vertex(316,311);
 vertex(346,317);
 vertex(365,321);
 vertex(408,310);
 vertex(398,394);
 vertex(1,398);
 vertex(0,341);
 endShape();
 

fill(38, 38, 38);
 beginShape();

 vertex(1,371);
 vertex(37,355);
 vertex(63,360);
 vertex(78,367);
 vertex(87,373);
 vertex(116,371);
 vertex(153,366);
 vertex(178,364);
 vertex(198,350);
 vertex(233,347);
 vertex(275,350);
 vertex(321,340);
 vertex(345,358);
 vertex(377,356);
 vertex(398,360);
 vertex(395,361);
 vertex(406,400);
  vertex(0,400);
 endShape();
 fill(28, 28, 28);
 

 beginShape();

 vertex(2,386);
 vertex(51,375);
 vertex(80,388);
 vertex(111,393);
 vertex(147,387);
 vertex(180,383);
 vertex(215,386);
 vertex(296,390);
 vertex(340,390);
 vertex(362,381);
 vertex(387,386);
 vertex(396,392);
 vertex(400,400);
 vertex(0,401);
 vertex(0,393);
 endShape();



};