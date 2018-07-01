var objets = [[3,1], [8,2], [7,3], [21, 4]]; // les numéros des tuiles qu'on peut récupérer dans l'inventaire et le nombre de points qu'elles donnent : [numéro, points] selon leur position dans le tableau

var numTuileNeutre=1; // une tuile sur laquelle il n'y a rien

var nbPoints = 0; // le nombre de points augmentera quand on récupèrera des objets

var nbPointsObjet =0; // nombre de points pour un objet (quand il y a plusieurs fois le même sur la carte)

var nbPointsMax=0; // nombre maximum de points si on récupère tous les objets

var objetQuete = 21; // objet de la quête demandée par le Pnj

/* function pour la couleur du fond */
function couleurTuile(couleur, posXTuile, posYTuile) {
	// on remplit une tuile de couleur
	context[0].fillStyle= couleur; // choix de la couleur sous forme de variable, déclarée plus haut
	context[0].fillRect(posXTuile, posYTuile, tailleTuile, tailleTuile); // 0,0 sont les coordonnées x,y du coin supérieur haut du rectangle à remplir, les autres chiffre sont la largeur et la hauteur du rectangle
	context[0].fill(); // on remplit !
}

// fonction pour effacer la tuile sur le canvas si le joueur passe dessus
function effaceObjet(i,j) {
		context[0].clearRect(tailleTuile*i, tailleTuile*j, tailleTuile, tailleTuile); // efface
		couleurTuile(couleurfondCarte, tailleTuile*i, tailleTuile*j); // remplit de couleur
		dessineTuiles(numTuileNeutre, tailleTuile*i, tailleTuile*j); // dessine une tuile neutre dont la variable est plus haut
}

// fonction pour compter le nombre maximum de points qu'on peut avoir en récupérant tous les objets
function comptePoints() {
	for (var num=0; num<cartes.length; num ++) { // on parcourt le tableau des cartes
		for (var j=0; j<cartes[num].length; j++) {//cartes[num] représente toute la carte
			for(var i=0; i<cartes[num][j].length; i++) {//cartes[num][j] représente maintenant une ligne de la carte	
				for (k=0; k<objets.length; k++) { // on parcourt le tableau des objets à attraper
					if (cartes[num][j][i] == objets[k][0]) {nbPointsMax += objets[k][1];} // si le numéro de la tuile est le premier numéro du tableau, on augmente les points
				}
			}
		}
	}
}

// fonction effaçant l'objet quand le perso passe dessus et le plaçant dans l'inventaire avec ses points
function deplaceTuiles() {
	for (var j=0; j<cartes[numCarte-1].length; j++) {//cartes[numCarte-1] représente toute la carte
		for(var i=0; i<cartes[numCarte-1][j].length; i++) {//cartes[numCarte-1][j] représente maintenant une ligne de la carte	
			for (k=0; k<objets.length; k++) {
				if (cartes[numCarte-1][j][i] == objets[k][0] && joueur.posX > (tailleTuile*i)-joueur.largeur && joueur.posX < (tailleTuile*i)+tailleTuile && joueur.posY > (tailleTuile*j)-joueur.hauteur && joueur.posY < (tailleTuile*j)+tailleTuile) {  //si la carte présente un n° de tuile compris dans le tableau d'objet et si ses coordonnées du joueur sont comprises dans les limites de cette tuile

					effaceObjet(i,j); // appelle la fonction qui efface la tuile sur le canvas

					nbPoints += k+1; // le nombre de points est donné par la position dans le tableau (deuxième numéro)

					pointsEnergie += k; // les points d'énergie augmentent quand on récupère des objets

					vx *=1.1; // la vitesse augmente légèrement quand on récupère des objets

					dansInventaire(); // appel de la fonction qui place la tuile dans l'inventaire

					affichePointsObjet(); // appel de la fonction qui donne les points pour chaque objet

					bulleQuete(i, j); // texte affiché dans une bulle quand l'objet de la quête est trouvé

					cartes[numCarte-1][j][i] = numTuileNeutre; // change le numéro de la tuile sur la carte	et met celui de la tuile neutre	
				}
			} 
		}
	}
}

// fonction dessinant la tuile dans l'inventaire, avec le nombre de points total en haut
function dansInventaire() {
	dessineTuiles(objets[k][0], largeurCanvas-(3*tailleTuile)+20, (k+2)*tailleTuile); // dessine l'objet sur le côté, dans la partie inventaire, en descendant d'une tuile à chaque occurence

	context[4].clearRect(largeurCanvas-(2*tailleTuile)-10, (k+1.5)*tailleTuile, tailleTuile*2, tailleTuile); // efface le chiffre précédent
	context[4].clearRect(largeurCanvas-(2*tailleTuile)-10, 20, tailleTuile*2, tailleTuile); // efface le chiffre précédent

	ajouteTexte(nbPoints+ " points", 12, largeurCanvas-(2*tailleTuile), tailleTuile + 10);// indique le total d'objets récupérés en utilisant la fonction de texte.
}

// fonction affichant le nombre de points pour chaque objet de l'inventaire
function affichePointsObjet() {

		nbPointsObjet = objets[k][1]; // les points pour un objet sont donnés par le deuxième chiffre

		ajouteTexte(nbPointsObjet, 12, largeurCanvas-tailleTuile, (k+2.5)*tailleTuile);// indique le nombre de points pour chaque objet

		objets[k][1] += objets[k][1]; // augmente le nombre de points dans le tableau
}

// fonction affichant une bulle de dialogue avec un texte quand le perso passe sur l'objet de la quête et ajoutant des points et de la vitesse
function bulleQuete(i, j) {

	if (cartes[numCarte-1][j][i] == objetQuete && pnj.collision==1) {  //si la carte correspond à la quête du Pnj

		textePnj = textePnjQueteOk; // texte à afficher

		bulleTexte(textePnj, pnj.posX2, pnj.posY2); // bulle de dialogue avec un texte

		pointsEnergie += 10; // les points d'énergie augmentent beaucoup quand on récupère cet objet
		
		vx *= 1.05;	 // la vitesse augmente un peu quand on récupère cet objet

		context[2].globalAlpha += 0.005;
	}
}


