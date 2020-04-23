import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video'); // selecciona el elemento
const player = new MediaPlayer({
    el: video,
    plugins: [
        // new AutoPlay()
    ]
});

const button = document.querySelector('button');
button.onclick = () => player.togglePlay();

const unMuteButton = document.querySelector('#unMuteButton')
unMuteButton.onclick = () => player.toggleMute();