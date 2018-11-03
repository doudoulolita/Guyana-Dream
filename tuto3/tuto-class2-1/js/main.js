// La fonction qui initialise le tout
function init() {

	recupCanvas(); // appel de la fonction pour récupérer le canvas
        const joueur1 = new Joueur("sprites/joueur1.png", "joueur1", 32, 32, 0, 32);
        joueur1.dessineJoueur();

}

/***** lorsque l'image est chargée, la fonction animePerso() est appelée *****/
window.onload = function() { init() };
