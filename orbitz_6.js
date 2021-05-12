let planets = [];

var trailsOn = false;

  class Particle {
    constructor() {
      this.position = createVector(random(0,windowWidth), random(0, windowHeight));
      this.radius = random(0.2, 3);
      this.velocity = createVector(random(-1, 1), random(-1, 1));
      this.acceleration = createVector(0.0, 0.0)
    }

    render () {
        
      const diameter = this.radius * 2
     
      fill(255);
      ellipse(this.position.x,this.position.y, diameter);
    }

    update() {
      this.position.add(this.velocity)
      this.velocity.add(this.acceleration)

      this.acceleration = createVector(mouseX,mouseY).sub(this.position).mult(random(0.001,0.00000001));
      this.velocity.limit(10)
    }
  }  

  let particle

  function setup() {
    createCanvas(windowWidth, windowHeight)
    background('Black')
    for (let i = 0; i < 4000; i++)    {
        planets.push(new Particle());
    }
  }

  function keyPressed() {
    if (keyCode == UP_ARROW)  {
      trailsOn = true;
    } else if (keyCode == DOWN_ARROW) {
      trailsOn = false
    } else if (keyCode == ENTER) {
    saveCanvas("Particles Render" & "00", "png")
    }
  }

  function draw() {
     
     if (trailsOn == true) {
      background(0, 10);
    } else if (trailsOn == false) {
      background(0)
    }


    for ( let i = 0; i < planets.length; i++)  {
        planets[i].render();
        planets[i].update();
    }
  }

