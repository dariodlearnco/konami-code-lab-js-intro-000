const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
var gotcha = 0

function init() {

    // You'll want to attach an event listener to document.body and check for
    // 'keydown' events. If the user enters this special code, pressing all ten
    // of the keys in the correct order, alert() a congratulatory message.
    // However, if they press a key out of sequence or a key that isn't part of
    // the Konami code, don't alert() anything and simply keep listening for all
    // ten keydowns in the correct order.

    document.body.addEventListener('keydown', checkSequenceHandler)

}

function displayAlert() {
    alert('You cracked the Konami Kode!')
}

function checkSequenceHandler(event) {
    console.log("Calling the senquence checker")
    gotcha=checkSequence(event,code,gotcha,displayAlert)
}

function checkSequence(event,code,thisFar,callBack) {

    // Everytime the next right key in the sequence is pressed, we increment
    // the counter that holds how many right keys have been pressed in the
    // right sequence.

    console.log(`event.detail: ${parseInt(event.detail)}`)
    console.log(`event.which: ${parseInt(event.which)}`)
    if (parseInt(event.detail || event.which) === code[thisFar]) {
        thisFar += 1
    } else {
        thisFar = 0
    }
    console.log(`You got right ${thisFar} keystrokes.`)

    // When the number of right keys in the right sequence equals the lenght of
    // the code array, we did it!
    if ( thisFar === code.length ) {
        console.log(`You did it!`)
        thisFar = 0
        callBack()
    }
    return thisFar
}
