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
        displayName: 'Like a Tattoo',
        cover: 'assets/likeatattoo.jpg',
        artist: 'Sade',
    },
    {
        path: 'assets/2.mp3',
        displayName: 'Barking',
        cover: 'assets/barking.png',
        artist: 'Ramz',
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
        displayName: '223s',
        cover: 'assets/233.png',
        artist: 'YNW Melly',
    },
    {
        path: 'assets/7.mp3',
        displayName: 'Already',
        cover: 'assets/already.png',
        artist: 'Kodak Black',
    },
    {
        path: 'assets/8.mp3',
        displayName: 'Revenge',
        cover: 'assets/revenge.png',
        artist: 'XXXTENTACION',
    },
    {
        path: 'assets/9.mp3',
        displayName: 'Wishing on a Star',
        cover: 'assets/wishing.png',
        artist: 'Rose Royce',
    },
    {
        path: 'assets/1.mp3',
        displayName: 'What You Heard',
        cover: 'assets/wyh.jpg',
        artist: 'Sonder',
    },
    {
        path: 'assets/11.mp3',
        displayName: 'Blueberry Faygo',
        cover: 'assets/blueberry.png',
        artist: 'Lil Mosey',
    },    {
        path: 'assets/12.mp3',
        displayName: 'Doja',
        cover: 'assets/doja.png',
        artist: 'Central Cee',
    },
    {
        path: 'assets/13.mp3',
        displayName: 'Jack In The Box',
        cover: 'assets/jack.png',
        artist: 'WhyDee',
    },
    {
        path: 'assets/14.mp3',
        displayName: 'Sunday Best',
        cover: 'assets/sunday.png',
        artist: 'Surfaces',
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
        displayName: 'Baby',
        cover: 'assets/baby.png',
        artist: 'Justin Bieber',
    },
    {
        path: 'assets/26.mp3',
        displayName: 'Birthday S*x',
        cover: 'assets/birthday.png',
        artist: 'Jjeremih',
    },
    {
        path: 'assets/27.mp3',
        displayName: 'Party Girl',
        cover: 'assets/party.png',
        artist: 'StaySolidRocky',
    },
    {
        path: 'assets/28.mp3',
        displayName: 'PTSD',
        cover: 'assets/ptsd.png',
        artist: 'NEMZZZ',
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
        artist: 'Silent6',
    },
    {
        path: 'assets/31.mp3',
        displayName: 'Juju on that beat',
        cover: 'assets/juju.png',
        artist: 'Zay Hilfigerrr & Zayion McCall',
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
    if (direction === 1) { // Random next song
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === musicIndex); // Avoid playing the same song
        musicIndex = randomIndex;
    } else { // Previous song (keep the original behavior for going backwards)
        musicIndex = (musicIndex - 1 + songs.length) % songs.length;
    }
    loadMusic(songs[musicIndex]);
    playMusic();
}

function updateProgressBar() {
    const { duration, currentTime } = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = ${progressPercent}%;

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
    return ${minutes}:${seconds};
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
