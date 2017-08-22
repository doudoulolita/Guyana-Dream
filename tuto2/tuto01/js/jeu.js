var canvas = document.querySelector('canvas'); //on récupère le canvas sur lequel on va dessiner
var context = canvas.getContext('2d'); //on indique le contexte

/* on remplit tout le canvas de couleur */
context.fillStyle="#5b6634"; // choix de la couleur (verte)
context.fillRect(0,0, 384, 384); // 0,0 sont les coordonnées x,y du coin supérieur haut du rectangle à remplir, les autres chiffre sont la largeur et la hauteur
context.fill(); // on remplit !
