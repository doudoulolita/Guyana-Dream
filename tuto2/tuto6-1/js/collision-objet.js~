var objets = [[3,1] ,[8,2], [7,3], [21, 4]];

var numTuileNeutre=1;

var nbPoints = 0; // le nombre de points augmente quand on récupère des objets

var nbPointsObjet =0; 

var nbPointsMax=0;

var occurence = 1;

var numObjet = 21; // objet de la quête demandée par le Pnj

/* function pour la couleur du fond */
function couleurTuile(couleur, posXTuile, posYTuile) {
	// on remplit une tuile de couleur
	context1.fillStyle= couleur; // choix de la couleur sous forme de variable, déclarée plus haut
	context1.fillRect(posXTuile, posYTuile, tailleTuile, tailleTuile); // 0,0 sont les coordonnées x,y du coin supérieur haut du rectangle à remplir, les autres chiffre sont la largeur et la hauteur du rectangle
	context1.fill(); // on remplit !
}

// fonction pour effacer la tuile sur le canvas si le joueur passe dessus
function effaceObjet(i,j) {
		context1.clearRect(tailleTuile*i, tailleTuile*j, tailleTuile, tailleTuile); // efface
		couleurTuile(couleurfondCarte, tailleTuile*i, tailleTuile*j); // remplit de couleur
		dessineTuiles(numTuileNeutre, tailleTuile*i, tailleTuile*j); // dessine une tuile neutre dont la variable est plus haut
}

function comptePoints() {
	for (var num=0; num<cartes.length; num ++) {
		for (var j=0; j<cartes[num].length; j++) {//carte1 représente toute la carte
			for(var i=0; i<cartes[num][j].length; i++) {//carte1[j] représente maintenant une ligne de la carte	
				for (k=0; k<objets.length; k++) {
					if (cartes[num][j][i] == objets[k][0]) {nbPointsMax += objets[k][1];}
				}
			}
		}
	}
}

function effaceTuiles() {

	for (var j=0; j<cartes[numCarte-1].length; j++) {//carte1 représente toute la carte
		for(var i=0; i<cartes[numCarte-1][j].length; i++) {//carte1[j] représente maintenant une ligne de la carte	
			for (k=0; k<objets.length; k++) {
				if (cartes[numCarte-1][j][i] == objets[k][0] && x > (tailleTuile*i)-largeurPerso && x < (tailleTuile*i)+tailleTuile && y > (tailleTuile*j)-hauteurPerso && y < (tailleTuile*j)+tailleTuile) {  //si la carte présente un n° de tuile compris dans le tableau d'objet et si ses coordonnées du joueur sont comprises dans les limites de cette tuile

					effaceObjet(i,j); // appelle la fonction qui efface la tuile sur le canvas

					nbPoints += k+1;

					pointsEnergie += k; // les points d'énergie augmentent quand on récupère des objets

					vx *=1.1; // la vitesse augmente légèrement quand on récupère des objets

					dansInventaire();

					affichePointsObjet();



					cartes[numCarte-1][j][i] = numTuileNeutre; // change le numéro de la tuile sur la carte		
				}
			} 
		}
	}
}

function dansInventaire() {
					dessineTuiles(objets[k][0], largeurCanvas-(3*tailleTuile)+20, (k+2)*tailleTuile); // dessine l'objet sur le côté, dans la partie inventaire, en descendant d'une tuile à chaque occurence

					context3.clearRect(largeurCanvas-(2*tailleTuile)-10, (k+1.5)*tailleTuile, tailleTuile*2, tailleTuile); // efface le chiffre précédent
					context3.clearRect(largeurCanvas-(2*tailleTuile)-10, 20, tailleTuile*2, tailleTuile); // efface le chiffre précédent

					ajouteTexte(nbPoints+ " points", 12, largeurCanvas-(2*tailleTuile), tailleTuile + 10);// indique le total d'objets récupérés en utilisant la fonction de texte.
}

function affichePointsObjet() {

		nbPointsObjet = objets[k][1];

		ajouteTexte(nbPointsObjet, 12, largeurCanvas-tailleTuile, (k+2.5)*tailleTuile);// indique le nombre de points pour chaque objet

		objets[k][1] += objets[k][1];
}



