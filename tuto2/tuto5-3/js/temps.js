let tempsJeu = 30000; // temps du jeu en ms, il sera affiché en secondes
let intervalleTemps = 2000; // intervalle de temps pour appeler la fonction qui affiche le temps écoulé

function compteTemps() {
		ajouteTexte("Temps : " + (tempsJeu/intervalleTemps)*2, 12, largeurCanvas-(2*tailleTuile)-20 , tailleTuile*9);

	setInterval(function() {
		context3.clearRect(largeurCanvas-(2*tailleTuile)-20, tailleTuile*8, tailleTuile*2.5, tailleTuile*1.5);

		tempsJeu -= intervalleTemps;

		ajouteTexte("Temps : " + (tempsJeu/intervalleTemps)*2, 12, largeurCanvas-(2*tailleTuile)-20 , tailleTuile*9); // le temps n'est affiché que toutes les 2 secondes, en secondes

	}, intervalleTemps);	
}




