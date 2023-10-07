import WaveSurfer from "https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js";

const wavesurfer = WaveSurfer.create({
  container: "#waveform",
  waveColor: "#4F4A85",
  progressColor: "#383351",
  url: "file_example_MP3_700KB.mp3",
});

wavesurfer.on("interaction", () => {
  wavesurfer.play();
});
// Update the zoom level on slider change
wavesurfer.once("decode", () => {
  const slider = document.querySelector('input[type="range"]');

  slider.addEventListener("input", (e) => {
    const minPxPerSec = e.target.valueAsNumber;
    wavesurfer.zoom(minPxPerSec);
  });
});

// play button to play and stop the wave
const playButton = document.querySelector("#play");
wavesurfer.once("decode", () => {
  document.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    input.onchange = (e) => {
      wavesurfer.setOptions({
        [input.value]: e.target.checked,
      });
    };
  });

  playButton.onclick = () => {
    wavesurfer.playPause();
  };
});
