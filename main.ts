let xvalue = 0
let yvalue = 0
input.onButtonPressed(Button.A, function () {
    xvalue = 0
    while (xvalue <= 5) {
        basic.clearScreen()
        led.plot(xvalue, 0)
        basic.pause(1000)
        xvalue += 1
    }
})
input.onButtonPressed(Button.B, function () {
    yvalue = 0
    while (yvalue >= 0) {
        basic.clearScreen()
        led.plot(0, yvalue)
        basic.pause(1000)
        yvalue += 1
    }
})
basic.forever(function () {
	
})
