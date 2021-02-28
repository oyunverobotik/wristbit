let ra = 0
input.onGesture(Gesture.Shake, function () {
    ra = randint(0, 3)
    if (ra == 1) {
        basic.showIcon(IconNames.Heart)
    } else if (ra == 2) {
        basic.showIcon(IconNames.Yes)
    } else if (ra == 0) {
        basic.showIcon(IconNames.Happy)
    }
})
basic.forever(function () {
	
})
