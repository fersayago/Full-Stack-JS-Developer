var miVideo = document.getElementById('mi-video')
var btnPlay = document.getElementById('btn-play')
var btnPause = document.getElementById('btn-pause')
var btnStart = document.getElementById('btn-start')
var btnChange = document.getElementById('btn-change')

btnPlay.onclick = play;
btnPause.onclick = pause;
btnStart.onclick = start;
btnChange.onclick = change;


function play () {
  console.log('Play')
  miVideo.play()
}

function pause () {
  console.log('Pause')
  miVideo.pause()
}

function start () {
  console.log('Start')
  miVideo.load()
}

function change () {
  var otro = false;
  console.log('Change video')
  otro = !otro
  miVideo.src = otro? './IMG/video.mp4' : './IMG/video2.mp4'
  miVideo.load()
}