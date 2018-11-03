// La fonction qui initialise le tout
function init() {

	recupCanvas(); // appel de la fonction pour récupérer le canvas
        const joueur1 = new Joueur("sprites/joueur1.png", "joueur1", 32, 32, 0, 32, 2);

	joueur1.deplacePerso();

        const joueur2 = new Joueur("sprites/joueur2.png", "joueur2", 32, 48, 0, 96, 2);

	joueur2.deplacePerso();


}

/***** lorsque l'image est chargée, la fonction animePerso() est appelée *****/
window.onload = function() { init() };
