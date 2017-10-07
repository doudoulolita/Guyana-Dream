/* Ce fichier js gère les personnages */

var tableauPersos = [
	["joueur1",32, 32],
	["joueur2", 32, 48]
]; //Le tableau donne les noms de nos personnages

var dossierPersos="sprites/"; // dans notre jeu, les fichiers concerment les persos sont rangés dans ce dossier
var extensionPerso=".png"; // dans notre jeu, tous les fichiers des persos finissent par 2 et sont des png


function cheminPerso(numPerso) {
	cheminImagePerso = dossierPersos+"joueur"+numPerso+extensionPerso;
	prechargerImage(cheminImagePerso);
}

/* initialisation des données du perso */

var posX = 0*tailleTuile, posY = 1 * tailleTuile-(tailleTuile/2);//position du personnage joueurau début du jeu en fonction de la largeur des tuiles

var 	persoLargeur = 32, // largeur du perso
	persoHauteur = 32; // hauteur du perso

// chaque perso est une instance de la classe Perso et l'attribut est un élément du tableau précédent.

var perso=new Image();

/* indicatiosn du nombre de pose pour l'animation */
var stepMax = 5-1;// on a 5 positions (1 statique et 4 pour la marche) mais comme les chiffres commencent à 0, on doit enlever 1

// on recherche l'identifiant du div correspondant au choix du perso (situé à gauche du canvas)et on insère l'image correspondant à son nom
function addImageChoix(numPerso) {
	choixJoueurs=document.getElementById("choixJoueur"+numPerso);
	choixJoueurs.style.height = persoHauteur+30+'px';
	choixJoueurs.innerHTML='<img class="'+tableauPersos[numPerso-1][0]+'" src="'+dossierPersos+'/choix-joueur'+numPerso+extensionPerso+'" />'+tableauPersos[numPerso-1][0];
	imagesJoueurs = document.getElementsByClassName('joueur'+numPerso);
	maClasse = choixJoueurs.firstChild.getAttribute('class');
	imageJoueur= imagesJoueurs[0];
	//alert(maClasse);
	imageJoueur.onclick = function() {
		cheminPerso(numPerso); 
		perso.src= cheminImagePerso; // on indique quel est le chemin de l'image du perso qui sera affichée sur la carte
		dessinePerso(numPerso, 0,0, nomCarte); // une fois la spritesheet (= image qui contient toutes les positions) du perso chargée , on dessine le personnage de face (ligne 0 sur la spritesheet) et statique (colonne 0 sur la spritesheet)

	}
}

var directionX = 0, directionY = 0;
var dir = 0;//direction du personnage
var nbrFrame = 0;






