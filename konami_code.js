const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let gotcha = 0

function init() {

    // You'll want to attach an event listener to document.body and check for
    // 'keydown' events. If the user enters this special code, pressing all ten
    // of the keys in the correct order, alert() a congratulatory message.
    // However, if they press a key out of sequence or a key that isn't part of
    // the Konami code, don't alert() anything and simply keep listening for all
    // ten keydowns in the correct order.

    document.body.addEventListener('keydown', checkSequence(event,code,gotcha,displayAlert))

}

function displayAlert() {
    alert('You cracked the Konami Kode!')
}

function checkSequence(event,code,thiFar,callBack) {

    // Everytime the next right key in the sequence is pressed, we increment
    // the counter that holds how many right keys have been pressed in the
    // right sequence.
    if (parseInt(event.detail || event.which) === code[thisFar]) {
        thisFar += 1
    } else {
        thisFar = 0
    }
    console.log(`You got right ${thisFar} keystrokes.`)

    // When the number of right keys in the right sequence equals the lenght of
    // the code array, we did it!
    if ( thisFar === code.lenght ) {
        console.log(`You did it!`)
        thisFar = 0
        callBack()
    }
}
