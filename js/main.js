let mover
let balls = []

function setup() {
    let canvas = document.getElementById('canvas')
    let height = canvas.getBoundingClientRect().height
    let width = canvas.getBoundingClientRect().width
    const p5canvas = createCanvas(width, height)
    p5canvas.parent('canvas')

    for (var i = 0; i < 1000; i++) {
        balls.push(new Mover(i * 0.3, i * 0.3))
    }
}

// function windowResized() {
//     let canvas = document.getElementById('canvas')
//     let height = canvas.getBoundingClientRect().height
//     let width = canvas.getBoundingClientRect().width
//     resizeCanvas(width, height)
// }

function draw() {
    background(75, 66, 244)

    balls.forEach(function(ball) {
        ball.update()
        ball.checkEdges()
        ball.display()
    })

}

window.addEventListener('load', function() {
    var body = document.getElementById('canvas')
    let clicked = false
    canvas.addEventListener('click', function() {
        if (!clicked) {
            balls.forEach(function(ball) {
                ball.stop()
            })
            clicked = true
        } else {
            balls.forEach(function(ball) {
                ball.reset()
            })
            clicked = false
        }
    })
})
