let autoplayEnabled = false;  // Flag to keep track of autoplay status

// Reset all audio elements' current time to 0 on page load
window.addEventListener('load', () => {
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
        audio.currentTime = 0;
    });

    // Set up event listeners for toggles
    document.getElementById('autoplayToggle').addEventListener('change', function() {
        autoplayEnabled = this.checked;
        const audios = document.querySelectorAll('audio');

        // Remove existing 'ended' event listeners from all audio elements
        audios.forEach(audio => {
            audio.removeEventListener('ended', handleAudioEnd);
        });

        if (autoplayEnabled) {
            // Add 'ended' event listeners to all audio elements if autoplay is enabled
            audios.forEach((audio) => {
                audio.addEventListener('ended', handleAudioEnd);
            });

            // Start autoplay if the first audio is not already playing
            if (!document.querySelector('audio').paused) {
                const firstAudio = document.querySelector('audio');
                firstAudio.play();
            }
        }
    });

    document.getElementById('shuffleToggle').addEventListener('change', function() {
        const shuffleEnabled = this.checked;
        const audios = Array.from(document.querySelectorAll('audio'));

        // Remove existing 'ended' event listeners from all audio elements
        audios.forEach(audio => {
            audio.removeEventListener('ended', handleAudioEnd);
        });

        if (shuffleEnabled) {
            // Shuffle the playlist
            for (let i = audios.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                audios[i].parentNode.insertBefore(audios[j], audios[i].nextSibling);
            }

            // Restart the playlist from the beginning if autoplay is enabled
            if (autoplayEnabled) {
                const firstAudio = audios[0];
                firstAudio.play();
            }
        }
    });
});

function handleAudioEnd() {
    if (autoplayEnabled) {
        const audios = Array.from(document.querySelectorAll('audio'));
        let index = audios.indexOf(this);
        let nextAudio = audios[index + 1];
        if (nextAudio) {
            nextAudio.play();
        }
    }
}
