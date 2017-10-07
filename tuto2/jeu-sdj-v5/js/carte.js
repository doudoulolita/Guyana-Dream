/* Ce fichier js gère la carte en récupérant ses coordonnées dans un fichier json */

/* récupération du tileset (image servant de base à la carte) */

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

/* Récupération du fichier contenant les données du tableau du niveau actuel */

// Création de l'objet XmlHttpRequest

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(event) {
    // XMLHttpRequest.DONE === 4
    if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
		donneesFichierCarte = this.responseText;

		// Analyse des données du fichier json
		donneesCarte = JSON.parse(donneesFichierCarte);

		nomCarte=donneesCarte.carte1;	// on va chercher dans le fichier json les données de la carte (arbres) du niveau 1
        } else {
		console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
        }
    }
};

xhr.open('GET', fichierCarte, true);
xhr.send(null);




