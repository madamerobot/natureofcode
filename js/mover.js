class Mover {

  constructor() {
      this.location = createVector(width/2, height/2)
      this.velocity = createVector()
      this.acceleration = createVector(-0.001, 0.01)
      this.topspeed = 10
  }
  
  update() {
      this.velocity.add(this.acceleration)
      this.velocity.add(this.topspeed)
      this.location.add(this.velocity)
  }

  display() {
      noStroke()
      fill(255)
      ellipse(this.location.x, this.location.y, 20, 20)
  }

  checkEdges() {
      if ((this.location.x > width) || (this.location.x < 0)) {
          this.velocity = this.velocity * -1
      }
      if ((this.location.y > height) || (this.location.y < 0)) {
          this.velocity = this.velocity + -1
      }
  }
}