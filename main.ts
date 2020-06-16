let drehmoment = 0
let distanz_vorher = 0
let distanz_zeit = 0
let distanz = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    distanz = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    distanz_zeit = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P2,
    PingUnit.MicroSeconds
    )
    if (distanz != distanz_vorher) {
        if (distanz < 10) {
            drehmoment = Math.map(distanz, 9, 1, 98, 180)
            serial.writeValue("x", drehmoment)
            pins.servoWritePin(AnalogPin.P8, drehmoment)
        } else {
            pins.servoWritePin(AnalogPin.P8, 90)
        }
    }
    distanz_vorher = distanz
    basic.pause(200)
})
