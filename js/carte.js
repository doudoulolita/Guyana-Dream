/* Ce fichier js gère la carte en récupérant ses coordonnées dans un fichier json */

/* variables */

// on définit la couleur de fond de la carte
var couleurfondCarte ="#5b6634";

// indique quelle image utiliser pour créer la carte
var imageTileset = "tilesets/tileset2.png";

// indique la taille de chaque tuile
var tailleTuile = 32; // largeur de la tuile

/* données changeantes */

// indique quel fichier utiliser pour avoir la tableau des éléments de la carte
var fichierCarte = "maps/map.json" // dans la carte json sont indiqués à quel endroit se trouveront les tuiles sur les canvas

var numNiveau = 1;

var texte1 = "Guyana-Dream";

var fonte = "px Arial";
var couleurTexte = "#5b6634";

/* récupération du canvas et du context */

// récupère tous les canvas sur lesquels on va dessiner
var canvas = document.querySelectorAll('canvas');//canvas[0] contient le premier canvas et canvas[6] le cinquième
var context = []; // initialise les contextes

// Largeur et hauteur du canvas 1 (les canvas commencent à 0)
var canvasLargeur = canvas[0].width;
var canvasHauteur = canvas[0].height;

// récupération des contexts qui permettent de dessiner sur les canvas
for (var i=0; i<canvas.length; i++) {//pourquoi faire une boucle ? car plus tard, nous rajouterons encore des canvas par dessus! on n'aura donc pas besoin de réadapter le code
	context[i] = canvas[i].getContext('2d');//context[0] contient le context du premier canvas et context[6] celui du septième
}

/* fonction pour la couleur de fond */

// on créée une fonction pour dessiner le fond de la carte dans une couleur unie
function couleurFond() {
	context[0].fillStyle=couleurfondCarte;	
	context[0].fillRect(0,0, canvasLargeur, canvasHauteur);
	context[0].fill();
}

/* récupération du tileset (image servant de base à la carte) */

// on crée une image nommée tileset et on donne son chemin. On indique la largeur des tuiles
var tileset = new Image(); // crée une nouvelle image
tileset.src = imageTileset;// donne le chemin de l'image


/* affichage du niveau initial */

// on initialise le niveau, qui sera affiché dans un élément (span en l'occurence) ayant comme id "niveau"
var niveau=document.getElementById("niveau");
niveau.innerHTML = numNiveau;
var texte2 = "Niveau"+numNiveau;

/* fonctions de dessin des tuiles */

// Méthode de dessin du tile numéro "numero" dans le contexte 2D "context" aux coordonnées x et y

function dessineTuiles(num, ctx, posX, posY) {
	var nbTuilesparLigne=tileset.width / tailleTuile; //nombre de tuiles sur une ligne du tileset 
	var xSourceEnTiles = num % nbTuilesparLigne; 

	if(xSourceEnTiles == 0) xSourceEnTiles = nbTuilesparLigne;
	var ySourceEnTiles = Math.ceil(num / nbTuilesparLigne); // si le nombre de tuile en largeur est dépassé, on ajoute une hauteur de tuile à y

    	var xSource = (xSourceEnTiles - 1) * tailleTuile;
	var ySource = (ySourceEnTiles - 1) * tailleTuile;

	ctx.drawImage(tileset, xSource, ySource, tailleTuile, tailleTuile, posX, posY, tailleTuile, tailleTuile); // dessin d'une tuile à une 
}
			
// dans la fonction qui dessine la carte, on boucle sur la carte trouvée dans le fichier json et on appelle la fonction de dessin de la tuile à chaque fois
function dessineCarte(nomCarte, ctx) { 
	for(var i=0, l = nomCarte.length; i < l ; i++) {
		var ligne= nomCarte[i];
		var y = i * tailleTuile;
		for(var j=0, k = ligne.length; j < k; j++) {
			dessineTuiles(ligne[j], ctx, j * tailleTuile, y);
		}
	}
}

/* Ajout de texte */
function ajouteTexte(texte, tailleTexte, x, y) {
	context[3].font = tailleTexte+fonte ;
	context[3].fillStyle = couleurTexte;
	context[3].fillText(texte,x,y);
}

/* cadre pour mettre le texte */
function cadreTexte() {
	/* on efface une partie du canvas */
	context[0].clearRect(canvasLargeur-(tailleTuile*7),canvasHauteur-(tailleTuile*3),tailleTuile*6, tailleTuile*2);
	context[3].clearRect(canvasLargeur-(tailleTuile*7),canvasHauteur-(tailleTuile*3),tailleTuile*6, tailleTuile*2);
	/* on place du texte dans cette zone */	
}

/* Récupération du fichier contenant les données du tableau du niveau actuel */

// Création de l'objet XmlHttpRequest
var xhr = new XMLHttpRequest();

// lance la requête vers le fichier json
xhr.open("GET", fichierCarte, false);

xhr.send(null);

if(xhr.readyState != 4 || (xhr.status != 200 && xhr.status != 0)) // Code == 0 en local
	throw new Error("Impossible de charger la carte nommée \"" + nom + "\" (code HTTP : " + xhr.status + ").");
var donneesFichierCarte = xhr.responseText;

// Analyse des données du fichier json
var donneesCarte = JSON.parse(donneesFichierCarte);

var nomCarte=donneesCarte.carte1;	// on va chercher dans le fichier json les données de la carte (arbres) du niveau 1

// lancement du jeu, quand on charge la page
window.onload = function() { 
	
	couleurFond(); // on remplit le canvas d'une couleur unie #5b6634

	dessineCarte(nomCarte, context[0]); // on dessine la carte en fonction des données précédentes sur le second canvas

	cadreTexte();
	ajouteTexte(texte1, 16, canvasLargeur-(tailleTuile*6) , canvasHauteur-(tailleTuile*2));
	ajouteTexte(texte2, 12, canvasLargeur-(tailleTuile*5) , canvasHauteur-(tailleTuile*1.5));
	addImageChoix(1);
	addImageChoix(2);
}
