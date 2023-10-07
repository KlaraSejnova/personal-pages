import WaveSurfer from "https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js";
import TimelinePlugin from "https://unpkg.com/wavesurfer.js@7/dist/plugins/timeline.esm.js";
// Create a timeline
const bottomTimline = TimelinePlugin.create({
  height: 20,
  timeInterval: 0.1,
  primaryLabelInterval: 5,

  style: {
    fontSize: "15px",
    color: "#6A3274",
  },
});

const wavesurfer = WaveSurfer.create({
  container: "#waveform",
  waveColor: "#9d375b",
  progressColor: "#383351",
  cursorColor: "#379d79",
  url: "file_example_MP3_700KB.mp3",
  plugins: [bottomTimline],
  //   mediaControls: true,
  autoplay: false,
  hideScrollbar: true,
  minPxPerSec: 1,
});

wavesurfer.on("ready", () => {
  wavesurfer.setTime(0);
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
//show current time
wavesurfer.on("audioprocess", function () {
  if (wavesurfer.isPlaying()) {
    var currentTime = wavesurfer.getCurrentTime();

    document.getElementById("time-current").innerText = currentTime.toFixed(1);
  }
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
    document.getElementById("pause").classList.toggle("show");
    document.getElementById("play").classList.toggle("show");
  };
});
const playButton2 = document.querySelector("#pause");
wavesurfer.once("decode", () => {
  document.querySelectorAll('input[type="checkbox"]').forEach((input) => {
    input.onchange = (e) => {
      wavesurfer.setOptions({
        [input.value]: e.target.checked,
      });
    };
  });

  playButton2.onclick = () => {
    wavesurfer.playPause();
    document.getElementById("pause").classList.toggle("show");
    document.getElementById("play").classList.toggle("show");
  };
});
