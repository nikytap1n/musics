const image = document.getElementById('cover'),
    title = document.getElementById('music-title'),
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img');

const music = new Audio();

const songs = [
    {
        path: 'assets/10.mp3',
        displayName: 'Feeling',
        cover: 'assets/feeling.jpg',
        artist: 'Juice Wrld',
    },
    {
        path: 'assets/2.mp3',
        displayName: 'Make No Sense',
        cover: 'assets/nosense.png',
        artist: 'YoungBoy Never Broke Again',
    },
    {
        path: 'assets/3.mp3',
        displayName: 'Rover',
        cover: 'assets/rover.png',
        artist: 'S1mba',
    },
    {
        path: 'assets/5.mp3',
        displayName: 'Ransome',
        cover: 'assets/ransom.png',
        artist: 'Lil Tecca',
    },
    {
        path: 'assets/6.mp3',
        displayName: 'Pick Up The Phone',
        cover: 'assets/pickup.jpg',
        artist: 'Young Thug & Travis Scott',
    },
    {
        path: 'assets/7.mp3',
        displayName: 'Chanel',
        cover: 'assets/gogetit.jpg',
        artist: 'Young Thug Lil Baby Gunna',
    },
    {
        path: 'assets/8.mp3',
        displayName: 'Revenge',
        cover: 'assets/revenge.png',
        artist: 'XXXTENTACION',
    },
    {
        path: 'assets/9.mp3',
        displayName: 'You Lied',
        cover: 'assets/youlied.jpg',
        artist: 'Rayy Dubb',
    },
    {
        path: 'assets/1.mp3',
        displayName: 'Love Me',
        cover: 'assets/loveme.jpg',
        artist: 'Lil Tecca',
    },
    {
        path: 'assets/11.mp3',
        displayName: 'Tuff',
        cover: 'assets/tuff.png',
        artist: 'Jaah SLT',
    },    {
        path: 'assets/12.mp3',
        displayName: 'Doja',
        cover: 'assets/doja.png',
        artist: 'Central Cee',
    },
    {
        path: 'assets/13.mp3',
        displayName: 'Shotta Flow',
        cover: 'assets/shotta.png',
        artist: 'NLE Choppa',
    },
    {
        path: 'assets/14.mp3',
        displayName: 'Skrilla',
        cover: 'assets/skrilla.jpg',
        artist: 'Kodak Black',
    },
    {
        path: 'assets/15.mp3',
        displayName: 'Elevate',
        cover: 'assets/elevate.png',
        artist: 'NEMZZZ',
    },
    {
        path: 'assets/16.mp3',
        displayName: 'Bad Time',
        cover: 'assets/badtime.png',
        artist: 'Lil Tecca',
    },
    {
        path: 'assets/17.mp3',
        displayName: 'Genie',
        cover: 'assets/genie.jpg',
        artist: 'YoungBoy never broke again',
    },
    {
        path: 'assets/18.mp3',
        displayName: 'Crazy Story',
        cover: 'assets/crazy.png',
        artist: 'King Von',
    },
    {
        path: 'assets/19.mp3',
        displayName: 'Realest',
        cover: 'assets/realest.jpg',
        artist: 'Stizzy',
    },
    {
        path: 'assets/20.mp3',
        displayName: 'Calling My Phone',
        cover: 'assets/calling.png',
        artist: 'Lil Tjay',
    },
    {
        path: 'assets/21.mp3',
        displayName: 'Kills',
        cover: 'assets/kills.png',
        artist: 'Chief Keef',
    },
    {
        path: 'assets/22.mp3',
        displayName: 'Want U',
        cover: 'assets/wantu.png',
        artist: 'Clara La San',
    },
    {
        path: 'assets/23.mp3',
        displayName: 'Ladbroke Grove',
        cover: 'assets/ladbroke.png',
        artist: 'AJ Tracey',
    },
    {
        path: 'assets/24.mp3',
        displayName: 'B.E.D',
        cover: 'assets/bed.png',
        artist: 'Jacquees',
    },
    {
        path: 'assets/25.mp3',
        displayName: 'Ballin',
        cover: 'assets/ballin.jpg',
        artist: 'Mustard',
    },
    {
        path: 'assets/26.mp3',
        displayName: 'Murder On My Mind',
        cover: 'assets/mind.png',
        artist: 'YNW Melly',
    },
    {
        path: 'assets/27.mp3',
        displayName: 'Barking',
        cover: 'assets/barking.png',
        artist: 'Ramz',
    },
    {
        path: 'assets/28.mp3',
        displayName: 'PTSD',
        cover: 'assets/ptsd.png',
        artist: 'NEMZZZ',
    },
    {
        path: 'assets/29.mp3',
        displayName: 'Quality Control',
        cover: 'assets/qualitycontrol.jpg',
        artist: 'Lil Baby DaBaby',
    },
    {
        path: 'assets/30.mp3',
        displayName: 'Old Town Road',
        cover: 'assets/oldtownroad.jpg',
        artist: 'Lil Nas X',
    },
    {
        path: 'assets/31.mp3',
        displayName: 'Leave Me Alone',
        cover: 'assets/leave.png',
        artist: 'Flipp Dinero',
    },
    {
        path: 'assets/32.mp3',
        displayName: 'New Drop',
        cover: 'assets/newdrop.png',
        artist: 'Don Toliver',
    },
    {
        path: 'assets/33.mp3',
        displayName: '505',
        cover: 'assets/505.png',
        artist: 'Arctic Monkeys',
    }
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
}

function playMusic() {
    isPlaying = true;
    // Change play button icon
    playBtn.classList.replace('fa-play', 'fa-pause');
    // Set button hover title
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    // Change pause button icon
    playBtn.classList.replace('fa-pause', 'fa-play');
    // Set button hover title
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
}

function changeMusic(direction) {
    musicIndex = (musicIndex + direction + songs.length) % songs.length;
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) => String(Math.floor(time)).padStart(2, '0');
    durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(currentTime % 60)}`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(songs[musicIndex]);
