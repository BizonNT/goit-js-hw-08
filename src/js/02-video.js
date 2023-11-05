import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
let startTime = localStorage.getItem(STORAGE_KEY) ?? 0;

player.on('timeupdate', throttle(onPlay, 1000, { leading: false }));

function onPlay({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
}

player.setCurrentTime(startTime);
