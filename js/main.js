let mover

function setup() {
    let canvas = document.getElementById('canvas')
    let height = canvas.getBoundingClientRect().height
    let width = canvas.getBoundingClientRect().width
    const p5canvas = createCanvas(width, height)
    p5canvas.parent('canvas')
    background(66,244,217)

    mover = new Mover ()
}

// function windowResized() {
//     let canvas = document.getElementById('canvas')
//     let height = canvas.getBoundingClientRect().height
//     let width = canvas.getBoundingClientRect().width
//     resizeCanvas(width, height)
// }

function draw() {
    mover.update()
    mover.checkEdges()
    mover.display()
}
