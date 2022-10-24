function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);
  textSize(50)
  text("X:"+mouseX+"Y:"+mouseY,50,50)
  push()
  //fill(255,0,0)
  translate(width/2,height/2)
  ellipse(0, 0, 400) //臉
  ellipse(0,0,200,100) //鼻子橢圓
  ellipse(-40,0,30) //左鼻孔
  ellipse(40,0,30) //又鼻孔
  //左眼
  ellipse(-80,-80,60)
  //右眼
  ellipse(80,-80,60)

  pop()
}