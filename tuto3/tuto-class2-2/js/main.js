// La fonction qui initialise le tout
function init() {

	recupCanvas(); // appel de la fonction pour récupérer le canvas
        const joueur1 = new Joueur("sprites/joueur1.png", "joueur1", 32, 32, 0, 32);
        joueur1.dessineJoueur();

        const joueur2 = new Joueur("sprites/joueur2.png", "joueur2", 32, 48, 64, 64);
        joueur2.dessineJoueur();

        const joueur3 = new Joueur("sprites/joueur3.png", "joueur3", 32, 40, 96, 128);
        joueur3.dessineJoueur();

}

/***** lorsque l'image est chargée, la fonction animePerso() est appelée *****/
window.onload = function() { init() };
