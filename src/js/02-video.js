import Player from '@vimeo/player';
const _ = require('lodash');

const iFrame = document.querySelector('#vimeo-player');
const player = new Player(iFrame);

player.on('play', function () {
  console.log('Playing');
});

player.on('pause', () => {
  console.log('Paused');
});

function timerUpd(data) {
  // console.log(data.seconds);
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

player.on('timeupdate', _.throttle(timerUpd, 1000));

const time = localStorage.getItem('videoplayer-current-time') || 0;
// console.log(time);

player.setCurrentTime(time);
