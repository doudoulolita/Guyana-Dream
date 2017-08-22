/* Ce fichier js gère les èvènements */

/* déclaration et initialisation des variables */

// on fixe les positions X et Y qui provoqueront un changement de carte (en nombre de tuiles)
posChangeMapX = 22;
posChangeMapY = 12;

posChangeMapX2 = 0;
posChangeMapY2 = 0;

// on fixe les tuiles qui réagiront lors des évènements

// sur ces tuiles, l'inventaire sera affiché et le score augmenté.
var tuileFruit1= 3;
var tuileFruit2= 8; // cette tuile comporte 2 fruits, le score sera donc multiplié par 2 quand on passera dessus
var tuileFruit3= 7;
var tuileFruit4= 17;
var tuileFruit5= 21;

// n° de la tuile neutre qui remplacera les fruits
var tuileNeutre = 1;
var tuileInterdite= [4, 11,12,15,16, 19,20, 23,24];
var tuileVide = 5;

// on initialise le score et le nombre de fruits de l'inventaire, ainsi que le tableau qui récupérera leurs coordonnées
var score=0;
var nbFruits1=0;
var nbFruits2=0;
var nbFruits3=0;
var nbFruits4=0;
var nbFruits5=0;

var canvasHasFocus = false;

var canvases = document.querySelectorAll('canvas');
var canvas = canvases[canvases.length - 1]
canvas.addEventListener('mouseenter', function(event) {
  canvasHasFocus = true;
}, false);

canvas.addEventListener('mouseleave', function(event) {
  canvasHasFocus = false;
}, false);


// fonction qui gère les touches de clavier, ici les flèches du pavé directionnel
function touchesClavier() {
	document.onkeydown = function(e) { // quand on appuie sur la touche
		if (!canvasHasFocus) return;
		e.preventDefault();
		switch(e.keyCode) {
			case 37://code pour la gauche
				if (directionX!=-1 && directionY==0) {dir = 2;}//Si on ne se dirige vers nulle part, on oriente le perso
				directionX = -1;
			break;
			case 38://code pour le haut
				if (directionX==0 && directionY!=-1) {dir = 3;}//Si on ne se dirige vers nulle part, on oriente le perso
				directionY = -1;
			break;
			case 39://code pour la droite
				if (directionX!=1 && directionY==0) {dir = 1;}//Si on ne se dirige vers nulle part, on oriente le perso
				directionX = 1;
			break;
			case 40://code pour le bas
				if (directionX==0 && directionY!=1) {dir = 0;}//Si on ne se dirige vers nulle part, on oriente le perso
				directionY = 1;
			break;
			
		}
	},		
	
	document.onkeyup = function(e) { // quand on relache la touche
		if (!canvasHasFocus) return;
		e.preventDefault();
		switch(e.keyCode) {
			case 37://quand on arrête d'appuyer sur la gauche
				if (directionY!=0) {//si on se dirige vers le bas ou le haut
					if (directionY==-1) {//si on se dirige vers le haut
						dir=3;//on retourne le bonhomme vers le haut
					} else { dir=0; }//sinon, on le retourne de nouveau vers le bas
				}
				directionX = 0;//on arrête de se déplacer horizontalement
			break;
			case 38://quand on arrête d'appuyer sur le haut
				if (directionX!=0) {//si on se dirige vers la droite ou la gauche
					if (directionX==-1) {//si on se dirige vers la gauche
						dir=2;//on redirige le bonhomme vers la gauche
					} else { dir=1; }//sinon, on redirige le bonhomme vers la droite
				}
				directionY = 0;//on arrête de se déplacer verticalement
			break;
			case 39://quand on arrête d'appuyer sur la droite
				if (directionY!=0) {//si on se dirige vers le bas ou le haut
					if (directionY==-1) {//si on se dirige vers le haut
						dir=3;//on redirige le bonhomme vers le haut
					} else { dir=2; }//sinon, on redirige le bonhomme vers la gauche
				}
				directionX = 0;//on arrête de se déplacer horizontalement
			break;
			case 40://quand on arrête d'appuyer sur le bas
				if (directionX!=0) {//si on se dirige vers la droite ou la gauche
					if (directionX==-1) {//si on se dirige vers la gauche
						dir=2;//on redirige le bonhomme vers la gauche
					} else { dir=1; }//sinon, on redirige le bonhomme vers la droite
				}
				directionY = 0;//on arrête de se déplacer verticalement
			break;
			
		}
	}

}

/* changement de carte */

/* fonction pour récupérer les données d"une tuile sur la carte en fonction de son emplacement sur le tableau de map
function recupCoordsTuile() {
	for (Y=0; Y<nomCarte.length;Y++){
		for (X=0; X<nomCarte[Y].length;X++){
			if (nomCarte[Y][X]==tuileChangeCarte) {posFX = X; posFY = Y} // on repère où est située la tuile qui provoque le changement de carte pour avoir ses n° de ligne (posFY)et de colonne (posFX)
		// alert((posFY/tailleTuile)+" - "+(posFY/tailleTuile));
		}
	}
} */

// fonction qui gère le changement de niveau, et donc de carte
function changeCarte(posChangeMapX, posChangeMapY, posChangeMapX2, posChangeMapY2, numNiveau) {

	// si la tuile est celle qui provoque le changement de carte, une condition vérifiera si le perso (coordonnées =  posX et posY) est sur la tuile choisie (celle-ci correspond à un intervalle de coordonnées : du bord gauche au bord droit, du haut au bas de la tuile). 
	// En partant des n° de lignes et de colonnes, le chiffre en px s'obtient en multipliant le n° de ligne posFY et de colonne posFX par la largeur de la tuile.
	if (niveau.innerHTML==1) {
		condition1=posX>=posChangeMapX*tailleTuile;
	}


	if(niveau.innerHTML==1 && condition1) {	
		context[0].clearRect(0,0,canvasLargeur,canvasHauteur); // on efface le premier canvas
		couleurFond(); // on le remplit de couleur
		nomCarte=donneesCarte.carte2; // on récupère les données de la carte 2 (arbres)
		dessineCarte(nomCarte, context[0]); // on dessine la carte 2 (les arbres) sur le deuxième canvas
		niveau.innerHTML=2; // on indique le nouveau n° de niveau dans le span dont l'id est "niveau"
		texte2 = "Niveau"+niveau.innerHTML;
		ajouteTexte(texte2, 12, canvasLargeur-(tailleTuile*5) , canvasHauteur-(tailleTuile*1.5));
	}

	if (niveau.innerHTML==2) {
		condition2 = posX <= posChangeMapX2*persoLargeur;
	}
	
	if(niveau.innerHTML==2 && condition2) {
		context[0].clearRect(0,0,canvasLargeur,canvasHauteur); // on efface le premier canvas
		couleurFond(); // on le remplit de couleur
		nomCarte=donneesCarte.carte1; // on récupère les données de la carte 2 (arbres)
		dessineCarte(nomCarte, context[0]); // on dessine la carte 2 (les arbres) sur le deuxième canvas
		niveau.innerHTML=1; // on indique le nouveau n° de niveau dans le span dont l'id est "niveau"
		texte2 = "Niveau"+niveau.innerHTML;
		ajouteTexte(texte2, 12, canvasLargeur-(tailleTuile*5) , canvasHauteur-(tailleTuile*1.5));
	}
			
}

/* fonctions permettant d'attraper les fruits quand le joueur passe dessus et de les afficher dans l'inventaire. */
// fonction qui affichera le score dans le paragraphe dont l'identifiant est "score"
function monteScore() {
	var afficheScore=document.getElementById("score");
	afficheScore.innerHTML="Score= "+score;
}

// fonction qui récupérera les div des fruits contenus dans l'inventaire et affiche le nombre de fruits attrapés
function afficheFruits() {
	var fruit1=document.getElementById("fruit1");
	var fruit2=document.getElementById("fruit2");
	var fruit3=document.getElementById("fruit3");
	var fruit4=document.getElementById("fruit4");
	var fruit5=document.getElementById("fruit5");
	var afficheNbFruit1=document.getElementById("affichenbfruit1");
	var afficheNbFruit2=document.getElementById("affichenbfruit2");
	var afficheNbFruit3=document.getElementById("affichenbfruit3");	
	var afficheNbFruit4=document.getElementById("affichenbfruit4");	
	var afficheNbFruit5=document.getElementById("affichenbfruit5");	
	afficheNbFruit1.textContent=nbFruits1;
	afficheNbFruit2.textContent=nbFruits2;
	afficheNbFruit3.textContent=nbFruits3;
	afficheNbFruit4.textContent=nbFruits4;
	afficheNbFruit5.textContent=nbFruits5;
}

// pour cacher un fruit par ex, on pourra grâce à cette fonction dessiner une tuile neutre (juste un peu d'herbe)aux coordonnées x et y
function dessineTuilesFond(x,y) { 
	context[0].clearRect(x,y,tailleTuile,tailleTuile);
	context[0].fillStyle=couleurfondCarte;	
	context[0].fillRect(x,y,tailleTuile,tailleTuile);
	context[0].fill();
	dessineTuiles(tuileNeutre, context[0], x, y);
}
	// fonction qui permet au perso d'"attraper" des fruits : passer sur une tuile représentant des fruits, la changer en une autre, afficher le score, afficher image et nombre de fruits dans l'inventaire
function attrapeFruit() {
	// au début, on ne connaît pas les n° de lignes et de colonnes des fruits sur la carte de fond, donc les tableaux de colonnes et de ligne où ils sont situés sont vides
	var tableauFruitX=[];
	var tableauFruitY=[];
	// on boucle donc pour entrer dans le tableau le n° de ligne  (Y) et de colonne (X) de tous les fruits, en fonction des n° de tuiles
	for (Y=0; Y<nomCarte.length;Y++){
		for (X=0; X<nomCarte[Y].length;X++){
			if (nomCarte[Y][X]==tuileFruit1 || nomCarte[Y][X]==tuileFruit2 || nomCarte[Y][X]==tuileFruit3 || nomCarte[Y][X]==tuileFruit4 || nomCarte[Y][X]==tuileFruit5) {fruitX = X; fruitY = Y;tableauFruitX.push(fruitX); tableauFruitY.push(fruitY);}				

			// comme pour le changement de carte, une condition vérifie si le perso est bien sur une tuile de fruits mais ici, il faut une boucle sur les tableaux des coordonnées des fruits.
			for (i=0; i<tableauFruitX.length; i++) {
				condition2=posX>=(tableauFruitX[i]*tailleTuile) && posX<=((tableauFruitX[i]+1)*tailleTuile) && posY>=(tableauFruitY[i]*tailleTuile) && posY<=((tableauFruitY[i]+1)*tailleTuile);
				if (condition2){
					afficheFruits(); // on appelle la fonction qui récupére les div des fruits contenus dans l'inventaire
					// on vérifie le numéro de tuile pour afficher le bon fruit dans l'inventaire
					if(nomCarte[tableauFruitY[i]][tableauFruitX[i]]==tuileFruit1){
						fruit1.style.display="inline"; // l'élément "fruit1" (dans l'inventaire) est caché par défaut grâce à la feuille de style, on change donc ce style pour l'afficher
						score+=10;
						nbFruits1++;
					}
					if(nomCarte[tableauFruitY[i]][tableauFruitX[i]]==tuileFruit2){
						fruit2.style.display="inline"; 
						score+=20; // comme il y a 2 fruits sur l'image, le score est plus haut
						nbFruits2+=2; // 2 fruits d'un coup pour l'inventaire !
					}
					if(nomCarte[tableauFruitY[i]][tableauFruitX[i]]==tuileFruit3){

						fruit3.style.display="inline"; 
						score+=30;
						nbFruits3+=3;
					}
					if(nomCarte[tableauFruitY[i]][tableauFruitX[i]]==tuileFruit4){

						fruit4.style.display="inline"; 
						score+=20;
						nbFruits4++;
					}
					if(nomCarte[tableauFruitY[i]][tableauFruitX[i]]==tuileFruit5){

						fruit5.style.display="inline"; 
						score+=50;
						nbFruits5+=3;
					}
					nomCarte[tableauFruitY[i]][tableauFruitX[i]]=tuileNeutre; // une fois le fruit attrapé, on remplace son numéro dans la carte par une case "banale" (n°66)
					dessineTuilesFond(tableauFruitX[i]*tailleTuile,tableauFruitY[i]*tailleTuile); // on dessine une tuile "banale" grâce à la fonction dédiée à l'endroit où était le fruit
					monteScore(); // on appelle la fonction qui affiche le score

				}			
			} 
		}
	}		
	
}












