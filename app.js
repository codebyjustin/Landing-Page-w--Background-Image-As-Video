const backVideo = document.getElementById("backVideo");
const playBtn = document.getElementById("playBtn");
const icon = document.getElementById("icon");

playBtn.onclick = function () {
  backVideo.style.display = "block";
  if (backVideo.paused) {
    backVideo.play();
    icon.src = "Resources/pause.png";
  } else {
    backVideo.pause();
    icon.src = "Resources/play.png";
  }
};
