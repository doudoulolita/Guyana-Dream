var objets = [3 ,8, 7];

var numTuileNeutre=1;

var nbPoints=0;

var occurence = 1;

/* function pour la couleur du fond */
function couleurTuile(couleur, posXTuile, posYTuile) {
	/* on remplit tout le canvas de couleur */
	context1.fillStyle= couleur; // choix de la couleur sous forme de varaible, décalrée plus haut
	context1.fillRect(posXTuile, posYTuile, tailleTuile, tailleTuile); // 0,0 sont les coordonnées x,y du coin supérieur haut du rectangle à remplir, les autres chiffre sont la canvas et la hauteur
	context1.fill(); // on remplit !
}

// fonction pour effacer la tuile sur le canvas si le joueur passe dessus
function effaceObjet(i,j) {
		context1.clearRect((tailleTuile*i), (tailleTuile*j), tailleTuile, tailleTuile); // efface
		couleurTuile(couleurfondCarte, tailleTuile*i,tailleTuile*j); // remplit de couleur
		dessineTuiles(numTuileNeutre, tailleTuile*i, tailleTuile*j); // dessine une tuile neutre dont la variable est plus haut
}

function effaceTuiles() {
	for (var j=0; j<carte1.length; j++) {//carte1 représente toute la carte
		for(var i=0; i<carte1[j].length; i++) {//carte1[j] représente maintenant une ligne de la carte	
			for (k=0; k<objets.length; k++) {
				if (carte1[j][i] == objets[k] && x > (tailleTuile*i)-largeurPerso && x < (tailleTuile*i)+tailleTuile && y > (tailleTuile*j)-hauteurPerso && y < (tailleTuile*j)+tailleTuile) {  //si la carte présente un n° de tuile compris dans le tableau d'objet et si ses coordonnées du joueur sont comprises dans les limites de cette tuile

					effaceObjet(i,j); // appelle la fonction qui efface la tuile sur le canvas


					dessineTuiles(objets[k], largeurCanvas-(3*tailleTuile)+20,tailleTuile*occurence+tailleTuile); // dessine l'objet sur le côté, dans la partie inventaire, en descendant d'une tuile à chaque occurence

					occurence ++; // chaque fois qu'on rencontre un objet, on augemente le nombre d'occurences

					context3.clearRect(largeurCanvas-(2*tailleTuile)-10, tailleTuile, tailleTuile*2, tailleTuile); // efface le chiffre précédent

					carte1[j][i] = numTuileNeutre; // change le numéro de la tuile sur la carte				
				}
			} 
		}
	}
}


