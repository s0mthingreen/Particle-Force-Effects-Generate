let planets = [];

  class Particle {
    constructor() {
      this.position = createVector(random(0,windowWidth), random(0, windowHeight));
      //this.position = createVector(windowWidth / 2, windowHeight / 2);
      this.radius = random(0.1, 1.5);
      this.velocity = createVector(random(-1, 1), random(-1, 1))
      this.acceleration = createVector(0.0, 0.0)
    }

    render () {
      const diameter = this.radius * 2
      noStroke()
      fill(random(230,255),0,random(230,255));
      ellipse(this.position.x,this.position.y, diameter)
    }

    update() {
      this.position.add(this.velocity)
      this.velocity.add(this.acceleration)
      this.acceleration = createVector(windowWidth / 2, windowHeight / 2).sub(this.position).mult(0.000002)
      this.velocity.limit(5)
    }
  }  

  let particle

  function setup() {
    createCanvas(windowWidth, windowHeight);
    var cnv = createCanvas(windowWidth, windowHeight);
    background('Black')
    for (let i = 0; i < 5000 ; i++)    {
        planets.push(new Particle());
    }
  }

  function draw() {
  
    background(0);

    for ( let i = 0; i < planets.length; i++)  {
        planets[i].render();
        planets[i].update();
    }
  }

