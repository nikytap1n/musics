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
        displayName: 'Wrong',
        cover: 'assets/wrong.png',
        artist: 'Luh Kel',
    },
    {
        path: 'assets/2.mp3',
        displayName: 'The Box',
        cover: 'assets/thebox.png',
        artist: 'Roddy Ricch',
    },
    {
        path: 'assets/3.mp3',
        displayName: 'Need It',
        cover: 'assets/needit.png',
        artist: 'Migos',
    },
    {
        path: 'assets/5.mp3',
        displayName: 'Ransome',
        cover: 'assets/ransom.png',
        artist: 'Lil Tecca',
    },
    {
        path: 'assets/6.mp3',
        displayName: '223s',
        cover: 'assets/233.png',
        artist: 'YNW Melly',
    },
    {
        path: 'assets/7.mp3',
        displayName: 'Get You',
        cover: 'assets/getyou.png',
        artist: 'Daniel Caesar',
    },
    {
        path: 'assets/8.mp3',
        displayName: 'Revenge',
        cover: 'assets/revenge.png',
        artist: 'XXXTENTACION',
    },
    {
        path: 'assets/9.mp3',
        displayName: 'Prada',
        cover: 'assets/prada.png',
        artist: '24kgoldn',
    },
    {
        path: 'assets/1.mp3',
        displayName: 'Dilemma',
        cover: 'assets/dilemma.png',
        artist: 'Nelly',
    },
    {
        path: 'assets/11.mp3',
        displayName: 'Blueberry Faygo',
        cover: 'assets/blueberry.png',
        artist: 'Lil Mosey',
    },    {
        path: 'assets/12.mp3',
        displayName: 'Down With Me',
        cover: 'assets/downwithme.png',
        artist: 'Lil Tecca',
    },
    {
        path: 'assets/13.mp3',
        displayName: 'JETSKI',
        cover: 'assets/jetski.png',
        artist: 'Mosey & Lil Tecca',
    },
    {
        path: 'assets/14.mp3',
        displayName: 'ROXANNE',
        cover: 'assets/roxann.png',
        artist: 'Arizona Zervas',
    },
    {
        path: 'assets/15.mp3',
        displayName: 'Mood Swings',
        cover: 'assets/moodswing.png',
        artist: 'Pop Smoke',
    },
    {
        path: 'assets/16.mp3',
        displayName: 'one day',
        cover: 'assets/oneday.png',
        artist: 'Nevi',
    },
    {
        path: 'assets/17.mp3',
        displayName: 'Sad But Happy',
        cover: 'assets/sadbhappy.png',
        artist: 'dkj',
    },
    {
        path: 'assets/18.mp3',
        displayName: 'Crazy Story',
        cover: 'assets/crazy.png',
        artist: 'King Von',
    },
    {
        path: 'assets/19.mp3',
        displayName: 'Payphone',
        cover: 'assets/payphone.png',
        artist: 'Maroon 5',
    },
    {
        path: 'assets/20.mp3',
        displayName: 'Calling My Phone',
        cover: 'assets/calling.png',
        artist: 'Lil Tjay',
    },
    {
        path: 'assets/21.mp3',
        displayName: 'THE RACE',
        cover: 'assets/race.png',
        artist: 'Tay-K',
    },
    {
        path: 'assets/22.mp3',
        displayName: 'Can I Be Fr',
        cover: 'assets/befr.png',
        artist: 'Ladi',
    },
    {
        path: 'assets/23.mp3',
        displayName: 'LET GO',
        cover: 'assets/letgo.png',
        artist: 'AARON MAY',
    },
    {
        path: 'assets/24.mp3',
        displayName: 'Pop Up',
        cover: 'assets/popup.png',
        artist: 'Polo G ft Lil Tjay',
    },
    {
        path: 'assets/25.mp3',
        displayName: 'Baby',
        cover: 'assets/baby.png',
        artist: 'Justin Bieber',
    },
    {
        path: 'assets/26.mp3',
        displayName: 'Did It Again',
        cover: 'assets/diditagain.png',
        artist: 'Lil Tecca',
    },
    {
        path: 'assets/27.mp3',
        displayName: 'Party Girl',
        cover: 'assets/party.png',
        artist: 'StaySolidRocky',
    },
    {
        path: 'assets/28.mp3',
        displayName: '679',
        cover: 'assets/679.png',
        artist: 'Fetty Wap',
    },
    {
        path: 'assets/29.mp3',
        displayName: 'Sugar',
        cover: 'assets/sugar.png',
        artist: 'Maroon 5',
    },
    {
        path: 'assets/30.mp3',
        displayName: 'Watch Me',
        cover: 'assets/watchme.png',
        artist: 'Maroon 5',
    },
    {
        path: 'assets/31.mp3',
        displayName: 'Juju on that beat',
        cover: 'assets/juju.png',
        artist: 'Zay Hilfigerrr & Zayion McCall',
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

    document.title = song.displayName;

    // Update duration when metadata is loaded
    music.addEventListener('loadedmetadata', () => {
        durationEl.textContent = formatTime(music.duration);
    });
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

    currentTimeEl.textContent = formatTime(currentTime);
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
};

// Event listeners
playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeMusic(-1));
nextBtn.addEventListener('click', () => changeMusic(1));
music.addEventListener('ended', () => changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);
music.addEventListener('error', (e) => {
    console.error("Error playing audio: ", e);
});

// Initial load
loadMusic(songs[musicIndex]);
