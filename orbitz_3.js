let planets = [];

var trailsOn = false;

  class Particle {
    constructor() {
    //   this.position = createVector(random(200,windowWidth), random(200, windowHeight));
      this.position = createVector(windowWidth / 2, windowHeight / 2);
      this.radius = random(0.1, 1.5);
      this.velocity = createVector(random(-3, 3), random(-3, 3))
      this.acceleration = createVector(0.0, 0.0)
    }

    render () {
      const diameter = this.radius * 2
      noStroke()
      fill(255);
      
      ellipse(this.position.x,this.position.y, diameter)
    }

    update() {
      this.position.add(this.velocity)
      this.velocity.add(this.acceleration)
      this.acceleration = createVector(windowWidth / 2, windowHeight / 2).sub(this.position).mult(0.00002)
      this.velocity.limit(5)
    }
  }  

  let particle

  function setup() {
    createCanvas(windowWidth, windowHeight)
    background('Black')

    

    for (let i = 0; i < 4000 ; i++)    {
        planets.push(new Particle());
    }
    // particle = new Particle()
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

