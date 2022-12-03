input.onButtonPressed(Button.A, function () {
    servos.P0.run(50)
})
input.onButtonPressed(Button.AB, function () {
    servos.P0.stop()
    servos.P1.stop()
})
input.onButtonPressed(Button.B, function () {
    servos.P1.run(50)
})
