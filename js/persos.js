/* Ce fichier js gère les personnages */

var tableauPersos = [
	["joueur1",32, 32],
	["joueur2", 32, 48]
]; //Le tableau donne les noms de nos personnages

var dossierPersos="sprites/"; // dans notre jeu, les fichiers concerment les persos sont rangés dans ce dossier
var extensionPerso=".png"; // dans notre jeu, tous les fichiers des persos finissent par 2 et sont des png

/* initialisation des données du perso */

var posX = 0*tailleTuile, posY = 1 * tailleTuile-(tailleTuile/2);//position du personnage joueurau début du jeu en fonction de la largeur des tuiles

var 	persoLargeur = 32, // largeur du perso
	persoHauteur = 32; // hauteur du perso

// chaque perso est une instance de la classe Perso et l'attribut est un élément du tableau précédent.

var perso=new Image();

/* indicatiosn du nombre de pose pour l'animation */
var stepMax = 5-1;// on a 5 positions (1 statique et 4 pour la marche) mais comme les chiffres commencent à 0, on doit enlever 1

/* initialisation des données du personnage non-joueur */

var tableauPnjs = ["pnj1"]; //Le tableau donne les noms des PNJ (personnages non joueur)

var pnj1Nom= tableauPnjs[0];
pnj1 = new Image();
pnj1.src=dossierPersos+name+extensionPerso;

// Les dimensions du pnj (personnage non-joueur)sont différentes
var 	pnjLargeur = 48,
	pnjHauteur = 32;
	
var pnjX = canvasLargeur-2*tailleTuile, pnjY = 7*tailleTuile;//position du PNJ au début du jeu	
	
pnj1 = new Image();
pnj1.src= dossierPersos+tableauPnjs[0]+extensionPerso;


// on recherche l'identifiant du div correspondant au choix du perso (situé à gauche du canvas)et on insère l'image correspondant à son nom
function addImageChoix(numPerso) {
	choixJoueurs=document.getElementById("choixJoueur"+numPerso);
	choixJoueurs.style.height = "60px";
	choixJoueurs.innerHTML='<img class="'+tableauPersos[numPerso-1][0]+'" src="'+dossierPersos+'/choix-joueur'+numPerso+extensionPerso+'" />'+tableauPersos[numPerso-1][0];
	imagesJoueurs = document.getElementsByClassName('joueur'+numPerso);
	maClasse = choixJoueurs.firstChild.getAttribute('class');
	imageJoueur= imagesJoueurs[0];
	//alert(maClasse);
	imageJoueur.onclick = function() {
		perso.src= dossierPersos+"joueur"+numPerso+extensionPerso; // on indique quel est le chemin de l'image du perso qui sera affichée sur la carte
		dessinePerso(numPerso, 0,0, nomCarte); // une fois la spritesheet (= image qui contient toutes les positions) du perso chargée , on dessine le personnage de face (ligne 0 sur la spritesheet) et statique (colonne 0 sur la spritesheet)

	}
}

var directionX = 0, directionY = 0;
var dir = 0;//direction du personnage
var nbrFrame = 0;

var pnjDirectionX = 0, pnjDirectionY = 0;
var pngDir = 0;//direction du personnage


/* permet de dessiner le perso sur le canvas en fonction de sa direction, du pas qu'il fait (pendant la marche) et du nom de la carte */
function dessinePerso(numPerso, direction, step, nomCarte) {

		touchesClavier();

		attrapeFruit();

		if (directionX!=0 || directionY!=0) {//si on se déplace
		nbrFrame++;
		if (nbrFrame>2) {//si 2 frames ont passé depuis le dernier changement d'étape du pas
			step++;//on rajoute une étape au pas du personnage
			nbrFrame = 0;//on remet à 0 le compteur de frame
		}
		if (step>stepMax) {step=1;}//si on a fini toutes les étapes du pas du personnage, on recommence. (on ne remet pas à 0 car 0 est l'étape ou on ne bouge pas. Et quand on marche, il n'y a jamais d'étape ou l'on ne bouge pas!)
	} else {//on ne bouge pas
		step=0;//on remet l'étape du pas à 0, ce qui correspond à la position immobile
	}
	persoLargeur= tableauPersos[numPerso-1][1];
	persoHauteur= tableauPersos[numPerso-1][2];

	context[2].clearRect(0,0,canvasLargeur,canvasHauteur);//on efface le second canvas
	context[2].drawImage(perso, step*persoLargeur, direction*persoHauteur, persoLargeur, persoHauteur, posX, posY, persoLargeur, persoHauteur);//on dessine le personnage
	
	if (directionX != 0 || directionY != 0) {//si on bouge
		if (autorisationBouger(posX+directionX*1, posY, nomCarte)) {//si au prochain déplacement horizontal, on n'est pas sur une mauvaise case
			posX += 1*directionX;//on change sa position horizontale
		}
		if (autorisationBouger(posX, posY+directionY*1, nomCarte)) {//si au prochain déplacement vertical, on n'est pas sur une mauvaise case
			posY += 1*directionY;//on change sa position verticale
		}
	}
	requestAnimationFrame(function() { 
		dessinePerso(numPerso, dir,step, nomCarte); 
		cadreTexte();
		ajouteTexte(texte1, 16, canvasLargeur-(tailleTuile*6) , canvasHauteur-(tailleTuile*2));
		ajouteTexte(texte2, 12, canvasLargeur-(tailleTuile*5) , canvasHauteur-(tailleTuile*1.5));

	});//on rappelle la fonction qui sera exécutée plusieurs ( une trentaine ) de fois par seconde

}

window.requestAnimationFrame = (function(){//on crée la fonction pour gérer l'animation
	return window.requestAnimationFrame || // La forme standardisée
	window.webkitRequestAnimationFrame  || // Pour Chrome et Safari
	window.mozRequestAnimationFrame     || // Pour Firefox
	window.oRequestAnimationFrame       || // Pour Opera
	window.msRequestAnimationFrame      || // Pour Internet Explorer
	function(callback) {                   // Pour les élèves du dernier rang
		window.setTimeout(callback, 1000 / 60);
	};
})();

/* le perso ne doit pas passer sur (ni sous) les arbres, ceux-ci doivent l'empêcher de passer. On vérifie donc si le perso a le droit ou non d'aller sur une case  */
function autorisationBouger(newPosX, newPosY, nomCarte) {

	//on regarde si avec la position de coordonnées (newPosX, newPosY) on n'est pas sur une mauvaise case
	var centrePersoX = newPosX+(persoLargeur/2);//on crée un carré virtuel de coté 32 (taille de la tuile et largeur du perso) et de centre (centrePersoX, centrePersoY)
	var centrePersoY = newPosY+(persoHauteur-(tailleTuile/2));
 
	var nbTuilesurLigneCanvas = canvasLargeur/tailleTuile // nombre de tuiles disposables sur une ligne de canvas
	var tile = Math.ceil(centrePersoX/tailleTuile) + (nbTuilesurLigneCanvas*Math.floor(centrePersoY/tailleTuile));//on enregistre le numéro de la tuile par rapport à la map sur laquelle se trouve le perso
	var ligne = Math.ceil(tile/nbTuilesurLigneCanvas);//on cherche sur quelle ligne se trouve le perso
	var colonne = tile-((ligne-1)*nbTuilesurLigneCanvas);//on cherche sur quelle colonne se trouve le perso

	var l = [ligne-2,ligne-2,ligne-2,ligne-1,ligne-1,ligne-1,ligne,ligne,ligne];//on enregistre les 9 cases autour du carré jaune
	var c = [colonne-2,colonne-1,colonne,colonne-2,colonne-1,colonne,colonne-2,colonne-1,colonne];//ces 9 cases ont pour coordonnées (l[i];c[i]) mais attention, ces coordonnées ne sont pas en pixels! Ces coordonnées représentent le nombre de cases à partir du haut et de la droite
	for (var i=0; i<l.length; i++) {
		var centreCarreX = (c[i]*tailleTuile)+(tailleTuile/2), centreCarreY = (l[i]*tailleTuile)+(tailleTuile/2) ;//on cherche le centre de chaque carré autour du carré jaune afin de pouvoir vérifier plus facilement si on le touche				
		if (centrePersoX+(tailleTuile/2)>centreCarreX-(tailleTuile/2) && centrePersoX-(tailleTuile/2)<centreCarreX+(tailleTuile/2) && centrePersoY+(tailleTuile/2)>centreCarreY-(tailleTuile/2) && centrePersoY-(tailleTuile/2)<centreCarreY+(tailleTuile/2)) {//si le carré jaune touche une case autour…

			if(nomCarte[l[i]]!=undefined){ // ceci permet d'éviter un bug en bord de canvas
				if (niveau.innerHTML==1){ // on teste la carte de niveau 1
					nomCarte=donneesCarte.carte1;


					changeCarte(posChangeMapX, posChangeMapY, 1);

					for(j=0; j<tuileInterdite.length; j++) {

						if (nomCarte[l[i]][c[i]]==tuileInterdite[j]) {//…et si on n'a pas l’autorisation de marcher sur la case car on n'est pas sur une tuile vide
						return false ;//on arrête tout, on n'a pas le droit de se trouver ici avec le bonhomme
						}
					}	
				}
				if (niveau.innerHTML==2){ // on teste la carte de niveau 2
					nomCarte=donneesCarte.carte2;

					changeCarte(posChangeMapX2, posChangeMapY2, 2);

					for(j=0; j<tuileInterdite.length; j++) {

						if (nomCarte[l[i]][c[i]]==tuileInterdite[j]) {//…et si on n'a pas l’autorisation de marcher sur la case car on n'est pas sur une tuile vide
							return false ;//on arrête tout, on n'a pas le droit de se trouver ici avec le bonhomme
						}
					}	
				}				
			}
			else {return false ;}
		}
	}
	return true ;//si on a pas retourné false plus haut, on a le droit de se situer ici avec le personnage. On renvoie donc true.
}

function dessinePnj(pnjDirection, step, nomCarte) {
		nbrFrame++;
		if (nbrFrame>2) {//si 2 frames ont passé depuis le dernier changement d'étape du pas
			step++;//on rajoute une étape au pas du personnage
			nbrFrame = 0;//on remet à 0 le compteur de frame
		}
		if (step>stepMax) {step=1;}//si on a fini toutes les étapes du pas du personnage, on recommence. (on ne remet pas à 0 car 0 est l'étape ou on ne bouge pas. Et quand on marche, il n'y a jamais d'étape ou l'on ne bouge pas!)

	context[1].clearRect(0,0,canvasLargeur,canvasHauteur);//on efface le second canvas
	context[1].drawImage(pnj1, step*pnjLargeur, pnjDirection*pnjHauteur, pnjLargeur, pnjHauteur, pnjX, pnjY, pnjLargeur, pnjHauteur);//on dessine le personnage

	requestAnimationFrame(function() {dessinePnj(pnjDirection,step, nomCarte); });//on rappelle la fonction qui sera exécutée plusieurs ( une trentaine ) de fois par seconde

}

perso.onload = function() {	

	dessinePnj(0,0, nomCarte);	// le personnage non joueur est placé sur la carte


}






