input.onButtonPressed(Button.A, function () {
    servos.P1.run(50)
})
input.onButtonPressed(Button.AB, function () {
    servos.P1.stop()
    servos.P2.stop()
    servos.P0.stop()
})
input.onButtonPressed(Button.B, function () {
    servos.P2.run(50)
})
basic.forever(function () {
	
})
