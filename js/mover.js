class Mover {

  constructor(x, y) {
      this.x = x
      this.y = y
      this.location = createVector(x, y)
      this.velocity = createVector(0.01, 0.1)
      this.acceleration = p5.Vector.random2D()
      this.topspeed = 0.05
  }
  
  update() {
      this.velocity.add(this.acceleration)
      this.location.add(this.velocity)
      this.acceleration.limit(this.topspeed)
  }

  display() {
      noStroke()
      fill(255)
      ellipse(this.location.x, this.location.y, 20, 20)
  }

  stop() {
    this.acceleration.x = 0
    this.acceleration.y = 0
    this.velocity.x = 0
    this.velocity.y = 0
  }

  reset() {
    this.velocity = createVector(0.01, 0.1)
    this.acceleration = p5.Vector.random2D()
  }

  checkEdges() {
      if ((this.location.x > width) || (this.location.x < 0)) {
          this.velocity.x = this.velocity.x * -1
      } 
      if ((this.location.y > height) || (this.location.y < 0)) {
          this.velocity.y = this.velocity.y * -1
      }
      if ((this.location.x < 0) && (this.location.y < 0)) {
        this.velocity.x = this.velocity.x * -1
        this.velocity.y = this.velocity.y * -1
      }
      if ((this.location.x > width) && (this.location.y > height)) {
        this.velocity.x = this.velocity.x * -1
        this.velocity.y = this.velocity.y * -1

      }
  }
}