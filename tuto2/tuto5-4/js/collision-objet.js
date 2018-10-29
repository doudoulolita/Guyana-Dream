let objets = [[3,1], [8,2], [7,3], [21, 4]]; // les numéros des tuiles qu'on peut récupérer dans l'inventaire et le nombre de points qu'elles donnent : [numéro, points] selon leur position dans le tableau

let numTuileNeutre=1; // une tuile sur laquelle il n'y a rien

let nbPoints = 0; // le nombre de points augmentera quand on récupèrera des objets

let nbPointsObjet = 0; // nombre de points pour un objet (quand il y a plusieurs fois le même sur la carte)

let nbPointsMax=0; // nombre maximum de points si on récupère tous les objets

/* function pour remplir une tuile avec la couleur du fond (appelée dans la fonction effaceObjet) */
function couleurTuile(couleur, posXTuile, posYTuile) {
	// on remplit une tuile de couleur
	context[0].fillStyle= couleur; // choix de la couleur sous forme de variable, déclarée plus haut
	context[0].fillRect(posXTuile, posYTuile, tailleTuile, tailleTuile); // 0,0 sont les coordonnées x,y du coin supérieur haut du rectangle à remplir, les autres chiffre sont la largeur et la hauteur du rectangle
	context[0].fill(); // on remplit !
}

// fonction pour effacer la tuile sur le canvas si le joueur passe dessus (appelée dans la fonction deplaceTuiles)
function effaceObjet(i,j) {
		context[0].clearRect(tailleTuile*i, tailleTuile*j, tailleTuile, tailleTuile); // efface
		couleurTuile(couleurfondCarte, tailleTuile*i, tailleTuile*j); // remplit de couleur
		dessineTuiles(numTuileNeutre, tailleTuile*i, tailleTuile*j); // dessine une tuile neutre dont la variable est plus haut
}

// fonction pour compter le nombre maximum de points qu'on peut avoir en récupérant tous les objets (appelée dans la fonction ecranJeu du fichier ecran.js)
function comptePoints() {
	for (j=0; j<carte1.length; j++) {//carte1 représente toute la carte
		for(i=0; i<carte1[j].length; i++) {//carte1[j] représente maintenant une ligne de la carte	
			for (k=0; k<objets.length; k++) { // on parcourt le tableau des objets à attraper
				if (carte1[j][i] == objets[k][0]) {nbPointsMax += objets[k][1];} // si le numéro de la tuile est le premier numéro du tableau, on augmente les points
			}
		}
	}
}

// fonction dessinant la tuile dans l'inventaire, avec le nombre de points total en haut (appelée dans la fonction deplaceTuiles)
function dansInventaire() {
	dessineTuiles(objets[k][0], largeurCanvas-(3*tailleTuile)+20, (k+2)*tailleTuile); // dessine l'objet sur le côté, dans la partie inventaire, en descendant d'une tuile à chaque occurence

	context[4].clearRect(largeurCanvas-(2*tailleTuile)-10, (k+1.5)*tailleTuile, tailleTuile*2, tailleTuile); // efface le chiffre précédent
	context[4].clearRect(largeurCanvas-(2*tailleTuile)-10, 20, tailleTuile*2, tailleTuile); // efface le chiffre précédent

	ajouteTexte(nbPoints+ " points", 12, largeurCanvas-(2*tailleTuile), tailleTuile + 10);// indique le total d'objets récupérés en utilisant la fonction de texte.
}

// fonction effaçant l'objet quand le perso passe dessus et le plaçant dans l'inventaire avec ses points (appelée dans la fonction animePerso du fichier animation.js)
function deplaceTuiles() {
	for (j=0; j<carte1.length; j++) {//cartes[numCarte-1] représente toute la carte
		for(i=0; i<carte1[j].length; i++) {//cartes[numCarte-1][j] représente maintenant une ligne de la carte	
			for (k=0; k<objets.length; k++) {
				if (carte1[j][i] == objets[k][0] && joueur.posX > (tailleTuile*i)-joueur.largeur && joueur.posX < (tailleTuile*i)+tailleTuile && joueur.posY > (tailleTuile*j)-joueur.hauteur && joueur.posY < (tailleTuile*j)+tailleTuile) {  //si la carte présente un n° de tuile compris dans le tableau d'objet et si ses coordonnées du joueur sont comprises dans les limites de cette tuile

					effaceObjet(i,j); // appelle la fonction qui efface la tuile sur le canvas

					nbPoints += k+1; // le nombre de points est donné par la position dans le tableau (deuxième numéro)

					pointsEnergie += k; // les points d'énergie augmentent quand on récupère des objets

					joueur.vx *=1.1; // la vitesse augmente légèrement quand on récupère des objets

					dansInventaire(); // appel de la fonction qui place la tuile dans l'inventaire

					affichePointsObjet(); // appel de la fonction qui donne les points pour chaque objet

					carte1[j][i] = numTuileNeutre; // change le numéro de la tuile sur la carte	et met celui de la tuile neutre	
				}
			} 
		}
	}
}

// fonction affichant le nombre de points pour chaque objet de l'inventaire (appelée dans la fonction deplaceTuiles)
function affichePointsObjet() {

		nbPointsObjet = objets[k][1]; // les points pour un objet sont donnés par le deuxième chiffre

		ajouteTexte(nbPointsObjet, 12, largeurCanvas-tailleTuile, (k+2.5)*tailleTuile);// indique le nombre de points pour chaque objet

		objets[k][1] += objets[k][1]; // augmente le nombre de points dans le tableau
}

let tempsJeu = 50000; // temps au bout du quel on lancera la fonction chrono()

let intervalleTemps = 2000; // intervalle de temps pour appeler la fonction qui affiche la vitesse et l'énergie et celle qui affiche le temps

let pointsEnergie = nbPointsMax; // initialise les points d'énergie en fonction du nombre de points maximum basé sur le nombre d'objets (fichier collision-objet.js)

function compteTemps() { // fonction appelée dans la fonction ecranJeu du fichier ecrans.js
	ajouteTexte("Temps : " + (tempsJeu/intervalleTemps)*2, 12, largeurCanvas-(2*tailleTuile)-20 , tailleTuile*10); // affiche le temps qui reste

	setInterval(function() { // cette fonction est appelée régulièrement
		context[4].clearRect(largeurCanvas-(2*tailleTuile)-20, tailleTuile*9.5, tailleTuile*2.5, 12*2); // efface le texte déjà affiché

		tempsJeu -= intervalleTemps; // soustrait l'intervalle de temps décidé en variable

		ajouteTexte("Temps : " + (tempsJeu/intervalleTemps)*2, 12, largeurCanvas-(2*tailleTuile)-20 , tailleTuile*10); // affiche le temps qui reste

	}, intervalleTemps); // indique à quel intervalle on appelle la fonction	
}


function gereEnergie() { // fonction appelée dans la fonction ecranJeu du fichier ecrans.js
	pointsEnergie = nbPointsMax + 1 + Math.floor(Math.random() * Math.floor(nbPointsMax)); // calcule l'énergie en fonction du nombre d'objets et ajoute un nombre aléatoire au résultat
	ajouteTexte("Energie : " + pointsEnergie, 12, largeurCanvas-(2*tailleTuile)-20 , tailleTuile*10 + 20); // affiche l'énergie
	ajouteTexte("Vitesse : " + Math.round(joueur.vx*20), 12, largeurCanvas-(2*tailleTuile)-20 , tailleTuile*10 + 40); // affiche la vitesse

	setInterval(function() { // cette fonction est appelée régulièrement
		context[4].clearRect(largeurCanvas-(2*tailleTuile)-20, tailleTuile*10, tailleTuile*2.5, tailleTuile*2); // efface le texte déjà affiché
		ajouteTexte("Energie : " + pointsEnergie, 12, largeurCanvas-(2*tailleTuile)-20 , tailleTuile*10 + 20); // affiche la nouvelle énergie

		pointsEnergie -= 1; // on perd un point d'énergie au fil du temps
		joueur.vx *= joueur.endurance; // on perd de la vitesse quand on perd de l'énergie	
		ajouteTexte("Vitesse : " + Math.round(joueur.vx*20), 12, largeurCanvas-(2*tailleTuile)-20 , tailleTuile*10 + 40); // affiche la nouvelle vitesse
	}, intervalleTemps); // indique à quel intervalle on appelle la fonction
}
