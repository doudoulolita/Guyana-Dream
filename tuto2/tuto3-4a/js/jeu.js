/** Récupération du canvas **/
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

largeurCanvas = canvas.width; // récupère la largeur du canvas
hauteurCanvas = canvas.height; // récupère la hauteur du canvas

/***** lorsque l'image est chargée, la fonction animePerso() est appelée *****/
window.onload = function() { animePerso(); persoBouge(e) };
 
