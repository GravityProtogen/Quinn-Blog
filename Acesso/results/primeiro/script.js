// script.js

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play-button');
    const canvas = document.getElementById('visualizer');
    const ctx = canvas.getContext('2d');
    
    let audioContext = null;
    let analyser = null;
    let source = null;

    // Function to set up audio context and visualization
    function setupAudio() {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        source = audioContext.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioContext.destination);

        // Set up canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Visualization function
        function visualize() {
            requestAnimationFrame(visualize);

            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);

            analyser.getByteFrequencyData(dataArray);

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const barWidth = (canvas.width / bufferLength) * 2.5;
            let barHeight;
            let x = 0;

            for (let i = 0; i < bufferLength; i++) {
                barHeight = dataArray[i];

                ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                ctx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);

                x += barWidth + 1;
            }
        }

        // Start visualizer
        visualize();
    }

    playButton.addEventListener('click', function() {
        if (!audioContext) {
            setupAudio(); // Initialize audio context and setup on first click
        }

        // Resume AudioContext and play audio
        if (audioContext.state === 'suspended') {
            audioContext.resume().then(() => {
                if (audio.paused) {
                    audio.play().then(() => {
                        playButton.textContent = 'Paraben...';
                        playButton.disabled = true;
                    }).catch(error => {
                        console.error("Audio playback failed: ", error);
                    });
                }
            }).catch(error => {
                console.error("Audio context resume failed: ", error);
            });
        } else if (audio.paused) {
            audio.play().then(() => {
                playButton.textContent = 'Parabens...';
                playButton.disabled = true;
            }).catch(error => {
                console.error("Audio playback failed: ", error);
            });
        }
    });
});
