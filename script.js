// Rechtsklick deaktivieren
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
});

// Drag & Drop verhindern
document.addEventListener("dragstart", function(e) {
  e.preventDefault();
});

// um random Bilder für die Alben zu laden
function setRandomImage(id, images) {
  const random = images[Math.floor(Math.random() * images.length)];
  document.getElementById(id).src = random;
}

setRandomImage("africa-img", [
  "images/africa25/wilddog4.jpg",
  "images/africa25/Giraffen.jpg",
  "images/africa25/Geparden.jpg"
]);

setRandomImage("europe-img", [
  "images/albums/europe1.jpg",
  "images/albums/europe2.jpg"
]);
