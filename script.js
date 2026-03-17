// Rechtsklick deaktivieren
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
});

// Drag & Drop verhindern
document.addEventListener("dragstart", function(e) {
  e.preventDefault();
});
