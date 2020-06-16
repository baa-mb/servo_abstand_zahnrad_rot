distanz_vorher = 0
distanz2 = 0
distanz_zeit2 = 0
distanz = 0
distanz_zeit = 0
basic.show_icon(IconNames.YES)

def on_forever():
    global distanz_zeit, distanz, distanz_zeit2, distanz2, distanz_vorher
    distanz_zeit = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.MICRO_SECONDS)
    distanz = sonar.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.CENTIMETERS)
    distanz_zeit2 = sonar.ping(DigitalPin.P13, DigitalPin.P14, PingUnit.MICRO_SECONDS)
    distanz2 = sonar.ping(DigitalPin.P13, DigitalPin.P14, PingUnit.CENTIMETERS)
    serial.write_value("1:" + "Welt", distanz)
    serial.write_value("2:" + convert_to_text(distanz_zeit2), distanz2)
    if distanz != distanz_vorher:
        if distanz < 10:
            pins.servo_write_pin(AnalogPin.P0, Math.map(distanz, 1, 9, 98, 180))
        else:
            pins.servo_write_pin(AnalogPin.P0, 90)
    distanz_vorher = distanz
    basic.pause(500)
basic.forever(on_forever)
