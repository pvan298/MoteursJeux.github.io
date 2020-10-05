let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
let mode = 0;
let posX = 40;
let posY = 10000/posX;
let velocity = 1;
let minX = 40;
let maxX = 200;

function draw() {
  ctx.clearRect(0, 0, cnv.width, cnv.height);
  ctx.beginPath();
  ctx.arc(posX, posY, 50, 0, 2*Math.PI);
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  ctx.closePath();
}
function update_pos() {
  if(mode == 0) {
    posX += velocity;
    posY = 10000/posX;
    if(posX > maxX ) { posX = maxX; mode = 1;}
  } else if(mode == 1) {
    posX -= velocity;
    if(posX < minX) { posX = minX; mode = 2;}
  } else if(mode == 2) {
    posY += velocity;
    if(posY > 10000/posX) { posY = 10000/posX; mode = 0;}
  }
}
function update() {
  update_pos();
  draw();
}
setInterval(update, 10);
