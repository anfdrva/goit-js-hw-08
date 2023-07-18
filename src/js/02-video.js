import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const frame = document.querySelector('iframe');
const player = new Player(frame);


const getTimeUpdate = function({seconds}) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
}

player.on('timeupdate', throttle(getTimeUpdate, 1000));

const LS = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(LS).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});



