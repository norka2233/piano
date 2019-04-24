document.addEventListener('keydown', sound);
document.addEventListener('keyup', remove);

function sound(event){
  audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  pressedKey = document.querySelector(`button[data-key="${event.keyCode}"]`);
  pressedKey.className += " pressed_key";
  audio.play();

}

function remove(event) {
    pressedKey = document.querySelector(`button[data-key="${event.keyCode}"]`);
    pressedKey.classList.remove('pressed_key');
}
