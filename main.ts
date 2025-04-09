input.onButtonPressed(Button.A, function() {
    Yesno();
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Meh)
})
function Yesno() {
    let boo = Math.randomBoolean()
    if (boo) {
        basic.showIcon(IconNames.Yes)
    } else if (!boo) {
        basic.showIcon(IconNames.No)
    }
}