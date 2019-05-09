document.addEventListener('keydown', sound);
document.addEventListener('keyup', remove);

function sound(event){
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const pressedKey = document.querySelector(`button[data-key="${event.keyCode}"]`);
  pressedKey.className += " pressed_key";
  audio.play();

}

function remove(event) {
   const pressedKey = document.querySelector(`button[data-key="${event.keyCode}"]`);
   pressedKey.classList.remove('pressed_key');
}
