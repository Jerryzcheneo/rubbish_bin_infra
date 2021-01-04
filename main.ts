bluetooth.onBluetoothConnected(function () {
    waste_height = 1
    basic.showIcon(IconNames.Yes)
    basic.pause(200)
})
bluetooth.onBluetoothDisconnected(function () {
    waste_height = 0
    basic.showIcon(IconNames.No)
    basic.pause(200)
})
let waste_height = 0
basic.showString("S")
basic.pause(200)
bluetooth.startUartService()
waste_height = 0
let start_sending = 0
basic.forever(function () {
    waste_height = pins.analogReadPin(AnalogPin.P0)
    if (start_sending == 1) {
        bluetooth.uartWriteNumber(waste_height)
    }
    basic.pause(200)
})
