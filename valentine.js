let vinyl = document.getElementById("vinyl");
let audio = document.getElementById("audio");
let playPauseButton = document.getElementById("playPauseButton");
let isPlaying = false;

audio.addEventListener("canplaythrough", () => {
    console.log("Audio is ready to play.");
});

audio.addEventListener("error", (e) => {
    console.error("Audio error: ", e);
    alert("เกิดข้อผิดพลาดในการโหลดไฟล์เสียง กรุณาตรวจสอบชื่อไฟล์ หรือใช้ไฟล์ mp3 อื่น");
});

function togglePlayPause() {
    if (!audio) {
        console.error("Audio element not found!");
        return;
    }

    if (isPlaying) {
        audio.pause();
        vinyl.classList.remove("playing");
        playPauseButton.textContent = "Play";
        isPlaying = false;
    } else {
        audio.play().then(() => {
            vinyl.classList.add("playing");
            playPauseButton.textContent = "Pause";
            isPlaying = true;
        }).catch(error => {
            console.error("Playback failed:", error);
            alert("เบราว์เซอร์อาจบล็อกการเล่น กรุณาคลิกที่หน้าเว็บก่อนกด Play");
        });
    }
}