import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let startTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));

player.on('timeupdate', throttle(onPlay, 1000, { leading: false }));

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
}

player.setCurrentTime(startTime).then(function (seconds) {});
