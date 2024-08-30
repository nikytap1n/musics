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
        displayName: 'Playah',
        cover: 'assets/playah.png',
        artist: 'Heygwuapo',
    },
    {
        path: 'assets/2.mp3',
        displayName: 'Gang Unit',
        cover: 'assets/gangunit.png',
        artist: 'Lil Loaded',
    },
    {
        path: 'assets/3.mp3',
        displayName: 'Violent Crimes',
        cover: 'assets/violentcrimes.png',
        artist: 'Kanye West (Jersey)',
    },
    {
        path: 'assets/4.mp3',
        displayName: 'Yoshimitsu',
        cover: 'assets/yoshimitsu.png',
        artist: 'Cochise',
    },
    {
        path: 'assets/5.mp3',
        displayName: 'God Is',
        cover: 'assets/godis.png',
        artist: 'Kanye West',
    },
    {
        path: 'assets/6.mp3',
        displayName: 'Lonely',
        cover: 'assets/lonely.png',
        artist: 'Akon',
    },
    {
        path: 'assets/7.mp3',
        displayName: 'Hell N Back',
        cover: 'assets/hellnback.png',
        artist: 'Bakar',
    },
    {
        path: 'assets/8.mp3',
        displayName: 'Jus Know',
        cover: 'assets/jusknow.png',
        artist: 'BlackMayo',
    },
    {
        path: 'assets/9.mp3',
        displayName: 'Lock It Up',
        cover: 'assets/lockitup.png',
        artist: 'Whethan',
    },
    {
        path: 'assets/1.mp3',
        displayName: '6locbaby',
        cover: 'assets/6locbaby.png',
        artist: 'Lil Loaded',
    },
    {
        path: 'assets/11.mp3',
        displayName: 'Knock Knock',
        cover: 'assets/knockknock.png',
        artist: 'SoFaygo',
    },    {
        path: 'assets/12.mp3',
        displayName: 'Down With Me',
        cover: 'assets/downwithme.png',
        artist: 'Lil Tecca',
    },
    {
        path: 'assets/13.mp3',
        displayName: 'Greed',
        cover: 'assets/greed.png',
        artist: 'LUCKI ft Lil Yatchy',
    },
    {
        path: 'assets/14.mp3',
        displayName: 'Still The Same',
        cover: 'assets/stillthesame.png',
        artist: 'Autumn!',
    },
    {
        path: 'assets/15.mp3',
        displayName: 'Rock With You Pt. 2',
        cover: 'assets/rockwithyou.png',
        artist: 'Lil God Dan',
    },
    {
        path: 'assets/16.mp3',
        displayName: 'one day',
        cover: 'assets/oneday.png',
        artist: 'Nevi',
    },
    {
        path: 'assets/17.mp3',
        displayName: 'Track 7',
        cover: 'assets/bashfortheworld.png',
        artist: 'Bashfortheworld',
    },
    {
        path: 'assets/18.mp3',
        displayName: 'ESSKEETIT',
        cover: 'assets/essk.png',
        artist: 'Lil Pump',
    },
    {
        path: 'assets/19.mp3',
        displayName: 'act i: stickerz 99',
        cover: 'assets/sticker99.png',
        artist: '4Batz',
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
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song) {
    music.src = song.path;
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
    
    // Set the page title to the current song's title
    document.title = song.displayName;
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
