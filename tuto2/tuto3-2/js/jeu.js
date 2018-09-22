function recupCanvas() {
/** Récupération du canvas **/
	let canvas = document.querySelector('canvas');
	context = canvas.getContext('2d');

	// Définit les dimensions du canvas
	largeurCanvas = canvas.width;
	hauteurCanvas = canvas.height;
}
