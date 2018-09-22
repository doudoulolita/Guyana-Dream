/* Récupération du canvas pour pouvoir dessiner dessus */

// Récupére les canvas à partir de leur id
let canvas1 = document.getElementById("tuiles");
context1 = canvas1.getContext('2d');

let canvas2 = document.getElementById("persos");
context2 = canvas2.getContext('2d');

// Définit les dimensions du canvas
largeurCanvas = canvas1.width;
hauteurCanvas = canvas1.height;
