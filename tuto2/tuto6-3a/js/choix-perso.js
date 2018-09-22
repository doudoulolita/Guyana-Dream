/*** fonction pour effacer le canvas et dessiner le PNJ ***/
function dessineJoueur(perso, context, x, y, largeur, hauteur, pose, dir) {
	context.drawImage(perso, largeur*pose, hauteur*dir, largeur, hauteur,  x, y, largeur, hauteur);
}

function dessineJoueurs() {
	for (i=joueurs.length-1; i>=0; i--) {
		dessineJoueur(joueurs[i], context[4], largeurCanvas-(2*tailleTuile)-(tailleTuile*i+1), tailleTuile*6.5, joueurs[i].largeur, joueurs[i].hauteur, Math.floor(joueurs[i].pose), dirJoueur);
	}

}

// clic sur le canvas
function clicCanvas(e){	
	// position de la souris / document
	xSourisDocument = e.pageX; 
    	ySourisDocument = e.pageY;
	// position du canvas / document
	canvas.offsetLeft = 190;
	canvas.offsetTop = 83;
	xCanvas = canvas.offsetLeft;
	yCanvas = canvas.offsetTop;
	console.log('Clic document = '+ xSourisDocument+'-'+ySourisDocument+'\n');
	// position du clic / canvas
	xSourisCanvas = xSourisDocument - xCanvas;
	ySourisCanvas = ySourisDocument - yCanvas;

	console.log('Clic canvas = '+xSourisCanvas+'-'+ySourisCanvas+'\n');

	clicJoueur();
}



function clicJoueur() {
	for (i=joueurs.length-1; i>=0; i--) {
		if(xSourisCanvas>largeurCanvas-(tailleTuile*(i+2)) && xSourisCanvas<largeurCanvas-(tailleTuile*(i+2))+joueur1.largeur && ySourisCanvas>tailleTuile*6.5 && ySourisCanvas<tailleTuile*6.5+joueur2.hauteur) {
			console.log(joueurs[i].name);
			joueur.spritesheet = joueurs[i].spritesheet; 
			joueur.src = joueurs[i].spritesheet;
			joueur.largeur = joueurs[i].largeur;
			joueur.hauteur = joueurs[i].hauteur;
			joueur.vx = joueurs[i].vx;
			joueur.endurance = joueurs[i].endurance;
		
		}
	}
}

	canvas = document.getElementById('textes');

	canvas.addEventListener("click", clicCanvas, false);	// vérifie si on clique sur un des singes

