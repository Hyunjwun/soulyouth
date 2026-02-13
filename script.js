$(document).ready(function () {
  const envelope = $("#envelope");
  const music = document.getElementById("bg-music");

  music.volume = 0.7;

  // Fungsi play sekali saja
  function startMusic() {
    music.play().catch(function (err) {
      console.log("Autoplay blocked:", err);
    });

    // Hapus listener supaya tidak play berulang
    document.removeEventListener("click", startMusic);
  }

  // Tunggu klik pertama user
  document.addEventListener("click", startMusic);

  $("#open").click(function () {
    envelope.removeClass("close").addClass("open");
  });

  $("#reset").click(function () {
    envelope.removeClass("open").addClass("close");
  });

  envelope.click(function () {
    envelope.toggleClass("open close");
  });
});
