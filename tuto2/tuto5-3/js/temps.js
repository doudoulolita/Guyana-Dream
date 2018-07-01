var tempsJeu = 30000;
var intervalleTemps = 2000;


function compteTemps() {
		ajouteTexte("Temps : " + (tempsJeu/intervalleTemps)*2, 12, largeurCanvas-(2*tailleTuile)-20 , tailleTuile*9);

	setInterval(function() {
		context3.clearRect(largeurCanvas-(2*tailleTuile)-20, tailleTuile*8, tailleTuile*2.5, tailleTuile*1.5);

		tempsJeu -= intervalleTemps;

		ajouteTexte("Temps : " + (tempsJeu/intervalleTemps)*2, 12, largeurCanvas-(2*tailleTuile)-20 , tailleTuile*9);

	}, intervalleTemps);	
}




