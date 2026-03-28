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

setRandomImage("australia-img", [
  "australia/humpbak.jpg",
  "australia/kokaburra.jpg",
  "australia/fisheagle.jpg"
]);

setRandomImage("southern_germany-img", [
  "images/Southern Germany/Bienenfresser.jpg",
  "images/Southern Germany/Schwarzwald/Wasseramsel.jpg",
  "images/Southern Germany/Schmetterlinge/Tagpfauenauge.jpg",
  "images/Southern Germany/Smaragdeidechs.jpg"
  ]);
