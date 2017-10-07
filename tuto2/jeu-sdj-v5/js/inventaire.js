// on fixe les tuiles qui réagiront lors des évènements

// sur ces tuiles, l'inventaire sera affiché et le score augmenté.
var tuileObjet1= 3;
var tuileObjet2= 8; // cette tuile comporte 2 objets, le score sera donc multiplié par 2 quand on passera dessus
var tuileObjet3= 7;
var tuileObjet4= 17;
var tuileObjet5= 21;

// n° de la tuile neutre qui remplacera les objets
var tuileNeutre = 1;
var tuileInterdite= [4, 11,12,15,16, 19,20, 23,24];
var tuileVide = 5;

// on initialise le score et le nombre de objets de l'inventaire, ainsi que le tableau qui récupérera leurs coordonnées
var score=0;
var nbObjets1=0;
var nbObjets2=0;
var nbObjets3=0;
var nbObjets4=0;
var nbObjets5=0;

/* fonctions permettant d'attraper les objets quand le joueur passe dessus et de les afficher dans l'inventaire. */
// fonction qui affichera le score dans le paragraphe dont l'identifiant est "score"
function monteScore() {
	var afficheScore=document.getElementById("score");
	afficheScore.innerHTML="Score= "+score;
}

// fonction qui récupérera les div des objets contenus dans l'inventaire et affiche le nombre de objets attrapés
function afficheObjets() {
	var objet1=document.getElementById("objet1");
	var objet2=document.getElementById("objet2");
	var objet3=document.getElementById("objet3");
	var objet4=document.getElementById("objet4");
	var objet5=document.getElementById("objet5");
	var afficheNbObjet1=document.getElementById("affichenbobjet1");
	var afficheNbObjet2=document.getElementById("affichenbobjet2");
	var afficheNbObjet3=document.getElementById("affichenbobjet3");	
	var afficheNbObjet4=document.getElementById("affichenbobjet4");	
	var afficheNbObjet5=document.getElementById("affichenbobjet5");	
	afficheNbObjet1.textContent=nbObjets1;
	afficheNbObjet2.textContent=nbObjets2;
	afficheNbObjet3.textContent=nbObjets3;
	afficheNbObjet4.textContent=nbObjets4;
	afficheNbObjet5.textContent=nbObjets5;
}

// pour cacher un objet par ex, on pourra grâce à cette fonction dessiner une tuile neutre (juste un peu d'herbe)aux coordonnées x et y
function dessineTuilesFond(x,y) { 
	context[0].clearRect(x,y,tailleTuile,tailleTuile);
	context[0].fillStyle=couleurfondCarte;	
	context[0].fillRect(x,y,tailleTuile,tailleTuile);
	context[0].fill();
	dessineTuiles(tuileNeutre, context[0], x, y);
}
	// fonction qui permet au perso d'"attraper" des objets : passer sur une tuile représentant des objets, la changer en une autre, afficher le score, afficher image et nombre de objets dans l'inventaire
function attrapeObjet() {
	// au début, on ne connaît pas les n° de lignes et de colonnes des objets sur la carte de fond, donc les tableaux de colonnes et de ligne où ils sont situés sont vides
	var tableauObjetX=[];
	var tableauObjetY=[];
	// on boucle donc pour entrer dans le tableau le n° de ligne  (Y) et de colonne (X) de tous les objets, en fonction des n° de tuiles
	for (Y=0; Y<nomCarte.length;Y++){
		for (X=0; X<nomCarte[Y].length;X++){
			if (nomCarte[Y][X]==tuileObjet1 || nomCarte[Y][X]==tuileObjet2 || nomCarte[Y][X]==tuileObjet3 || nomCarte[Y][X]==tuileObjet4 || nomCarte[Y][X]==tuileObjet5) {objetX = X; objetY = Y;tableauObjetX.push(objetX); tableauObjetY.push(objetY);}				

			// comme pour le changement de carte, une condition vérifie si le perso est bien sur une tuile de objets mais ici, il faut une boucle sur les tableaux des coordonnées des objets.
			for (i=0; i<tableauObjetX.length; i++) {
				condition2=posX>=(tableauObjetX[i]*tailleTuile) && posX<=((tableauObjetX[i]+1)*tailleTuile) && posY>=(tableauObjetY[i]*tailleTuile) && posY<=((tableauObjetY[i]+1)*tailleTuile);
				if (condition2){
					afficheObjets(); // on appelle la fonction qui récupére les div des objets contenus dans l'inventaire
					// on vérifie le numéro de tuile pour afficher le bon objet dans l'inventaire
					if(nomCarte[tableauObjetY[i]][tableauObjetX[i]]==tuileObjet1){
						objet1.style.display="inline"; // l'élément "objet1" (dans l'inventaire) est caché par défaut grâce à la feuille de style, on change donc ce style pour l'afficher
						score+=10;
						nbObjets1++;
					}
					if(nomCarte[tableauObjetY[i]][tableauObjetX[i]]==tuileObjet2){
						objet2.style.display="inline"; 
						score+=20; // comme il y a 2 objets sur l'image, le score est plus haut
						nbObjets2+=2; // 2 objets d'un coup pour l'inventaire !
					}
					if(nomCarte[tableauObjetY[i]][tableauObjetX[i]]==tuileObjet3){

						objet3.style.display="inline"; 
						score+=30;
						nbObjets3+=3;
					}
					if(nomCarte[tableauObjetY[i]][tableauObjetX[i]]==tuileObjet4){

						objet4.style.display="inline"; 
						score+=20;
						nbObjets4++;
					}
					if(nomCarte[tableauObjetY[i]][tableauObjetX[i]]==tuileObjet5){

						objet5.style.display="inline"; 
						score+=50;
						nbObjets5+=3;
					}
					nomCarte[tableauObjetY[i]][tableauObjetX[i]]=tuileNeutre; // une fois le objet attrapé, on remplace son numéro dans la carte par une case "banale" (n°66)
					dessineTuilesFond(tableauObjetX[i]*tailleTuile,tableauObjetY[i]*tailleTuile); // on dessine une tuile "banale" grâce à la fonction dédiée à l'endroit où était le objet
					monteScore(); // on appelle la fonction qui affiche le score

				}			
			} 
		}
	}		
	
}

