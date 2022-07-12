'use strict';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// записує в localStorage час не частіше, ніж раз на секунду.
player.on('timeupdate', throttle(function(data) {
    // data is an object containing properties specific to that event
   localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
}, 1000));

const savedSeconds = localStorage.getItem("videoplayer-current-time");

// перевірка чи є в змінній дані
if (savedSeconds) {
 player.setCurrentTime(JSON.parse(savedSeconds));
  }

