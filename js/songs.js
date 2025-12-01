document.addEventListener("DOMContentLoaded", function () {
    const players = document.querySelectorAll(".player");
    let currentMusic = null;
    let currentPlayBtn = null;

    players.forEach((player) => {

        const music = player.querySelector(".music-element");
        const playBtn = player.querySelector(".play");
        const seekbar = player.querySelector(".seekbar");
        const currentTimeEl = player.querySelector(".current-time");
        const durationEl = player.querySelector(".duration");
        const favIcon = player.querySelector(".favorite");
        const repIcon = player.querySelector(".repeat");
        const volIcon = player.querySelector(".volume");
        const volBox = player.querySelector(".volume-box");
        const volumeRange = player.querySelector(".volume-range");
        const volumeDown = player.querySelector(".volume-down");
        const volumeUp = player.querySelector(".volume-up");

        playBtn.addEventListener("click", () => {
            if (music.paused) {
                if (currentMusic && currentMusic !== music) {
                    currentMusic.pause();
                    if (currentPlayBtn) {
                        currentPlayBtn.classList.remove("pause");
                        currentPlayBtn.classList.add("play");
                        currentPlayBtn.innerHTML = '<i class="material-icons">play_arrow</i>';
                    }
                }

                music.play();
                playBtn.classList.remove("play");
                playBtn.classList.add("pause");
                playBtn.innerHTML = '<i class="material-icons">pause</i>';
                currentMusic = music;
                currentPlayBtn = playBtn;

            } else {
                music.pause();
                playBtn.classList.remove("pause");
                playBtn.classList.add("play");
                playBtn.innerHTML = '<i class="material-icons">play_arrow</i>';

                if (currentMusic === music) {
                    currentMusic = null;
                    currentPlayBtn = null;
                }
            }
        });

        music.addEventListener("ended", () => {
            playBtn.classList.remove("pause");
            playBtn.classList.add("play");
            playBtn.innerHTML = '<i class="material-icons">play_arrow</i>';
            music.currentTime = 0;

            if (currentMusic === music) {
                currentMusic = null;
                currentPlayBtn = null;
            }
        });

        music.addEventListener("loadeddata", () => {
            seekbar.max = music.duration;

            const totalMinutes = Math.floor(music.duration / 60);
            const totalSeconds = Math.floor(music.duration % 60)
                .toString()
                .padStart(2, "0");

            durationEl.textContent = `${totalMinutes}:${totalSeconds}`;
        });

        music.addEventListener("timeupdate", () => {
            seekbar.value = music.currentTime;

            const curMinutes = Math.floor(music.currentTime / 60);
            const curSeconds = Math.floor(music.currentTime % 60)
                .toString()
                .padStart(2, "0");

            currentTimeEl.textContent = `${curMinutes}:${curSeconds}`;
        });

        seekbar.addEventListener("input", () => {
            music.currentTime = seekbar.value;
        });

        if (favIcon) {
            favIcon.addEventListener("click", () => {
                favIcon.classList.toggle("active");
            });
        }

        if (repIcon) {
            repIcon.addEventListener("click", () => {
                music.loop = !music.loop;
                repIcon.classList.toggle("active");
            });
        }

        if (volumeRange) {
            music.volume = volumeRange.value / 100;

            volumeRange.addEventListener("input", () => {
                music.volume = volumeRange.value / 100;
            });
        }

        if (volIcon && volBox) {
            volIcon.addEventListener("click", () => {
                volBox.classList.toggle("active");
                volIcon.classList.toggle("active");
            });
        }

        if (volumeDown && volumeRange) {
            volumeDown.addEventListener("click", () => {
                volumeRange.value = Math.max(0, Number(volumeRange.value) - 20);
                music.volume = volumeRange.value / 100;
            });
        }

        if (volumeUp && volumeRange) {
            volumeUp.addEventListener("click", () => {
                volumeRange.value = Math.min(100, Number(volumeRange.value) + 20);
                music.volume = volumeRange.value / 100;
            });
        }
    });
});
