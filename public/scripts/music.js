var play = "fa fa-play";
var pause = "fa fa-pause";
var audioElement = document.createElement('audio');
var songCount = 0;
var carryTime = 0;
var duration = 0;
var trackList = 
[   
    'https://www.zenyogawellness.com/_Media/01-root-chakra-muladhara.mp3',
    'https://www.zenyogawellness.com/_Media/02-root-chakra-muladhara.mp3',
    'https://www.zenyogawellness.com/_Media/03-sacral-chakra-svadhistha.mp3',
    'https://www.zenyogawellness.com/_Media/04-sacral-chakra-svadhistha.mp3',
    'https://www.zenyogawellness.com/_Media/05-solar-plexus-chakra.mp3',
    'https://www.zenyogawellness.com/_Media/06-solar-plexus-chakra.mp3',
    'https://www.zenyogawellness.com/_Media/07-heart-chakra-anahata.mp3',
    'https://www.zenyogawellness.com/_Media/08-heart-chakra-anahata.mp3',
    'https://www.zenyogawellness.com/_Media/09-throat-chakra-visuddha.mp3',
    'https://www.zenyogawellness.com/_Media/10-throat-chakra-visuddha.mp3',
    'https://www.zenyogawellness.com/_Media/11-third-eye-chakra-ajna.mp3',
    'https://www.zenyogawellness.com/_Media/12-third-eye-chakra-ajna.mp3',
    'https://www.zenyogawellness.com/_Media/13-crown-chakra-sahasrara.mp3',
    'https://www.zenyogawellness.com/_Media/14-crown-chakra-sahasrara.mp3'

];


audioElement.setAttribute('src', trackList[songCount]);
audioElement.ontimeupdate = function() {timer()};

function timer() {
    var time = Math.floor(audioElement.currentTime);
    var hours = Math.floor(time / 3600);
    var minutes = Math.floor((time - (hours * 3600)) / 60);
    var seconds = Math.floor(time - (hours * 3600) - (minutes * 60));
    var duration = audioElement.duration;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    else if(minutes < 10) {
        minutes = "0" + minutes;
    }
    else if(hours < 10) {
        hours = "0" + hours;
    }

    if (hours > 0) {
        document.querySelector(".duration").innerHTML = hours + ":" + minutes + ":" + seconds;    
    }
    else {
        document.querySelector(".duration").innerHTML = minutes + ":" + seconds;
    }
    
    
}

$('.btn-outline-primary').click(function() {
    if(document.querySelector(".btn-outline-primary").childNodes[1].className == play) {
        document.querySelector(".btn-outline-primary").childNodes[1].className = pause;
        console.log("Song playing");
        audioElement.play();
    }
    else {
        document.querySelector(".btn-outline-primary").childNodes[1].className = play;
        console.log("Song paused");
        audioElement.pause();
    }
});

audioElement.addEventListener('ended', function() {
    songCount++;
    audioElement.setAttribute('src',trackList[songCount]);
    audioElement.play();
    
    
    
}, false);

