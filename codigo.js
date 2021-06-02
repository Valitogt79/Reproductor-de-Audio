const d = document;

const playCancion = d.getElementsByClassName(`play`),
  stopCancion = d.getElementsByClassName(`stop`),
  volumen = d.querySelector(`.volumen`);

let audio;

for (elemento of playCancion) {
  elemento.addEventListener(`click`, function () {
    let cancion = this.getAttribute(`id`);
    audio = new Audio(`./audio/${cancion}.mp3`);
    audio.play();
  });
}

for (elemento of stopCancion) {
  elemento.addEventListener(`click`, function () {
    audio.pause();
  });
}

volumen.addEventListener(`click`, function () {
  let vol = this.value;
  audio.volume = vol;
});
