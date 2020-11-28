input.onButtonPressed(Button.A, function () {
    writeText("hello all dogs - watch out for the cats!", 13)
})
function writeText (textToWrite: string, numberOfTimes: number) {
    for (let index = 0; index <= numberOfTimes; index++) {
        serial.writeLine("" + textToWrite + " " + index.toString())
        serial.writeLine("" + (serial.NEW_LINE))
    }
}
