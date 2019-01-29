class Mover {

  constructor() {
      this.location = createVector(width/2, height/2)
      this.velocity = createVector(0.1, 0.2)
      this.acceleration = createVector(0.05, 0.01)
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
          this.velocity.x = this.velocity.x * -1
      }
      if ((this.location.y > height) || (this.location.y < 0)) {
          this.velocity.y = this.velocity.y * -1
      }
  }
}