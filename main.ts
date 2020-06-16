let distanz_vorher = 0
let distanz = 0
let distanz_zeit = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    distanz_zeit = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.MicroSeconds
    )
    distanz = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    serial.writeValue(convertToText(distanz_zeit), distanz)
    if (distanz != distanz_vorher) {
        if (distanz < 10) {
            pins.servoWritePin(AnalogPin.P0, Math.map(distanz, 1, 9, 98, 180))
        } else {
            pins.servoWritePin(AnalogPin.P0, 90)
        }
    }
    distanz_vorher = distanz
    basic.pause(500)
})
