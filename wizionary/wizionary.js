import WaveSurfer from "https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js";
import TimelinePlugin from "https://unpkg.com/wavesurfer.js@7/dist/plugins/timeline.esm.js";
// Create a timeline
const bottomTimline = TimelinePlugin.create({
  height: 20,
  timeInterval: 0.1,
  primaryLabelInterval: 5,

  style: {
    fontSize: "15px",
    color: "#379d79",
  },
});

const wavesurfer = WaveSurfer.create({
  container: "#waveform",
  waveColor: "#9d375b",
  progressColor: "#383351",
  cursorColor: "#379d79",
  url: "file_example_MP3_700KB.mp3",
  plugins: [bottomTimline],
  autoplay: false,
  hideScrollbar: true,
  minPxPerSec: 1,
});

wavesurfer.on("ready", () => {
  wavesurfer.setTime(0);
});
wavesurfer.on("interaction", () => {
  wavesurfer.play();
  document.getElementById("pause").classList.toggle("show");
  document.getElementById("play").classList.toggle("show");
});
// Update the zoom level on slider change
wavesurfer.once("decode", () => {
  const slider = document.querySelector('input[type="range"]');

  slider.addEventListener("input", (e) => {
    const minPxPerSec = e.target.valueAsNumber;
    console.log(minPxPerSec);
    wavesurfer.zoom(minPxPerSec);
  });
});
// update zoom in/out on button click
let minPxPerSec = 0;
wavesurfer.once("decode", () => {
  const zoomBtnOut = document.querySelector("#zoomout");

  zoomBtnOut.addEventListener("click", (e) => {
    minPxPerSec = minPxPerSec + 50;
    wavesurfer.zoom(minPxPerSec);
    minPxPerSec > 200
      ? (document.querySelector("#zoomout").disabled = true)
      : (document.querySelector("#zoomout").disabled = false);

    minPxPerSec < 0
      ? (document.querySelector("#zoomin").disabled = true)
      : (document.querySelector("#zoomin").disabled = false);
  });
  const zoomBtnIn = document.querySelector("#zoomin");
  zoomBtnIn.addEventListener("click", (e) => {
    minPxPerSec = minPxPerSec - 50;
    wavesurfer.zoom(minPxPerSec);
    minPxPerSec > 150
      ? (document.querySelector("#zoomout").disabled = true)
      : (document.querySelector("#zoomout").disabled = false);

    minPxPerSec < 0
      ? (document.querySelector("#zoomin").disabled = true)
      : (document.querySelector("#zoomin").disabled = false);
  });
});

//show current time
wavesurfer.on("audioprocess", function () {
  if (wavesurfer.isPlaying()) {
    var currentTime = wavesurfer.getCurrentTime();
    console.log(currentTime);
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
