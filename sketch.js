let mercuryAngle = 0;
let venusAngle = 0;
let earthAngle = 0;
let marchAngle = 0;
let jupiterAngle = 0;
let uranusAngle = 0;
let neptuneAngle = 0;
let plutoAngle = 0;
function setup() {
  angleMode(DEGREES);
  createCanvas(2200, 1800);
}

function draw() {
  background(255);
  // Солнце
  fill(255,154,63);
  noStroke();
  ellipse(width / 2, height / 2, 120, 120);
  translate(width / 2 ,height / 2);
  // Меркурий
  rotate(mercuryAngle);
  fill(100);
  ellipse(80, 80, 30, 30)
  mercuryAngle = mercuryAngle + 1;
  // Венера
  rotate(venusAngle);
  fill(255,102,25);
  ellipse(120, 120, 50, 50);
  venusAngle = venusAngle + 0.5;
  // Земля
  fill(24,45,128);
  ellipse(200, 200, 70, 70);
  earthAngle = earthAngle + 1;
  // Марс
  fill(97,25,35);
  ellipse(270, 270, 40, 40);
  marchAngle = marchAngle + 1;
  // Юпитер
  fill(176,85,19);
  ellipse(340, 340, 90, 90);
  jupiterAngle = jupiterAngle + 1;
  // Сатурн
  fill(139,82,63);
  ellipse(440, 440, 90, 90);
  strokeWeight(4);
  stroke(51);
  noFill();
  arc(440, 440, 120, 70, -39 ,220, OPEN);
  noStroke();
  // Уран
  fill(18,226,255);
  ellipse(530, 530, 70 ,70);
  uranusAngle = uranusAngle + 1;
  // Нептун
  fill(27, 90, 125);
  ellipse(620, 620, 70, 70);
  neptuneAngle = neptuneAngle + 1;
  // Плутон
  fill(3,25,0);
  ellipse(680, 680, 20, 20);
  plutoAngle = plutoAngle + 1;
  



  
  
}