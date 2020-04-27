let showMenu = document.querySelector('.menu__burger')
showMenu.onclick = function() {
  let menuOnMobile = document.querySelector('.menuOnMobile')
  menuOnMobile.style.visibility = 'visible'
}

let cancelMenu = document.querySelector('.cancel')
cancelMenu.onclick = function() {
  let mobileMenu = document.querySelector('.menuOnMobile')
  mobileMenu.style.visibility = 'hidden'
}

let x = 350;
let y = 350;
let speedx = 3;
let speedy = 4;


function setup() {
  createCanvas(1920, 950);

}

function draw() {
  background('#FFDFEE');

  display();
  move();
  bounce();

  noFill();

  translate(width * 0.4, height * 0.4);
  push();
  stroke(mouseY, 150, 100);
  strokeWeight(4);
  rotate(frameCount / 350.0);


  for (i = 0; i < 20; i++) {
    rect(0 - 10 * i, 0 - 10 * i, 40 + 20 * i, 20 + 20 * i)
  }
  pop();


  translate(width * 0.3, height * 0.25);
  stroke(mouseY, 80, 200);
  strokeWeight(2);

  push();
  rotate(frameCount / 100.0);

  for (i = 0; i < 10; i++) {
    ellipse(0 - 5 * i, 0 - 5 * i, 20 + 20 * i)
  }
  pop();

  translate(150, -250);
  stroke(mouseY, 210, 150);
  strokeWeight(2);

  push();
  rotate(frameCount / 50.0);

  for (i = 0; i < 10; i++) {
    ellipse(0 - 2 * i, 0 - 2* i, 10 + 10 * i)
  }
  pop();

  function display() {
    noStroke();
    fill(0);
    ellipse(x, y, 350, 350);

  }

  function move() {
    x = x + speedx;
    y = y + speedy;
  }


  function bounce() {
    if(x > width -175 || x < 175) {
      speedx = speedx * -1
    }
    if(y > height - 175 || y < 175) {
      speedy = speedy * -1
    }
  }


}
