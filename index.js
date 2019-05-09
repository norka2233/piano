document.addEventListener('keydown', sound);
document.addEventListener('keyup', remove);

function sound(event){
  let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  let pressedKey = document.querySelector(`button[data-key="${event.keyCode}"]`);
  pressedKey.className += " pressed_key";
  audio.play();

}

function remove(event) {
  const  pressedKey = document.querySelector(`button[data-key="${event.keyCode}"]`);
  const pressedKey.classList.remove('pressed_key');
}
