document.addEventListener("DOMContentLoaded", function () {
    const playButtons = document.querySelectorAll(".fa-play");
    let currentAudio = null;
  
    playButtons.forEach((button, index) => {
      button.addEventListener("click", function () {
        const songFiles = [
          "music/chaleya.mp3",
          "music/khairiyat.mp3",
          "music/mere_yaara.mp3",
          "music/heeriye.mp3",
          "music/shayad.mp3",
          "music/ae_watan.mp3",
          "music/closer.mp3",
          "music/drivers_license.mp3",
          "music/shape_of_you.mp3",
          "music/see_you_again.mp3",
          "music/skyfall.mp3",
          "music/perfect.mp3",
        ];
  
        const audio = new Audio(songFiles[index]);
  
        if (currentAudio && currentAudio !== audio) {
          currentAudio.pause();
          currentAudio.currentTime = 0; 
          const prevButton = currentAudio.parentNode.querySelector(".fa-pause");
          if (prevButton) {
            prevButton.classList.remove("fa-pause");
            prevButton.classList.add("fa-play");
          }
        }
  
        if (audio.paused) {
          audio.play();
          button.classList.remove("fa-play");
          button.classList.add("fa-pause");
        } else {
          audio.pause();
          button.classList.remove("fa-pause");
          button.classList.add("fa-play");
        }
  
        currentAudio = audio;
      });
    });
  });
  
