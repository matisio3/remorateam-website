document.addEventListener("DOMContentLoaded", function () {
  const downloadTile = document.getElementById("downloadTile");
  const configTile = document.querySelector(".tile-purple");
  const galleryTile = document.querySelector(".tile-teal");

  if (downloadTile) {
    downloadTile.addEventListener("click", function () {
      window.location.href = "https://github.com/matisio3/RevertMetro/releases";
    });
  }

  if (configTile) {
    configTile.addEventListener("click", function () {
      alert("Konfiguracja będzie dostępna wkrótce.");
    });
  }

  if (galleryTile) {
    galleryTile.addEventListener("click", function () {
      window.location.href = "https://imgur.com/a/MvgQqP2";
    });
  }
});
