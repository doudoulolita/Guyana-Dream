function afficheImage(dir, pose, posX, posY) {
	context.drawImage(joueur, pose*largeurPerso, dir*hauteurPerso, largeurPerso, hauteurPerso, posX, posY, largeurPerso, hauteurPerso);//on dessine la tuile à l'endroit voulu
}

function afficheDirections() {
	for (dir=0; dir<4; dir++) {
		afficheImage(dir, 0, dir*largeurPerso, 0); // affiche la postion 0 de chaque ligne de la spritesheet
	}
}

function affichePoses(dir) {
	context.clearRect(0, hauteurPerso, largeurCanvas, hauteurCanvas);
	for (pose=1; pose<5; pose++) {
		afficheImage(dir, pose, (pose-1)*largeurPerso, 2*hauteurPerso); // affiche la postion 0 de chaque ligne de la spritesheet
	}
}
