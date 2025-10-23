window.addEventListener('DOMContentLoaded',init,false);

function init() {
    var buttons = document.getElementsByTagName("button")
    buttons[0].addEventListener('click', removeFocus(),false)
    buttons[1].addEventListener('click', onFocus, false)
    buttons[2].addEventListener('click', changeRed, false)
    buttons[3].addEventListener('click', changeBlue, false)
    buttons[4].addEventListener('click', changeGreen, false)
    buttons[5].addEventListener('click', changeThin, false)
    buttons[6].addEventListener('click', changeReg, false)
    buttons[7].addEventListener('click', changeThick, false)
}

const focusedElement = document.activeElement; // Get the currently focused element
function removeFocus() {
if (focusedElement) {
  focusedElement.blur();
}}