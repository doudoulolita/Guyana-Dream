window.onload = function()
{
	var canvas = document.getElementById('mon_canvas');
        if(!canvas)
        {
		alert("Impossible de récupérer le canvas");
		return;
        }
		var context = canvas.getContext('2d');
		if(!context)
        {
		alert("Impossible de récupérer le context du canvas");
		return;
        }
	context.font = "18px Helvetica";//On passe à l'attribut "font" de l'objet context une simple chaîne de caractères composé de la taille de la police, puis de son nom.


	var myInterval = setInterval(animate, 1000/30);
	var mon_image = new Image();
	mon_image.src = "ara11-trois-quart-spritesheet.png";
	var tile=0;
	var posX = 550;
	var posY= 400;

	var vitesseX=-1;
	var vitesseY=-1;

	function animate()
	{
        	context.clearRect(0, 0, 700, 500);//Cette fonction permet de réinitialiser notre canvas. 

		context.fillText("Mon ara peut voler !", 20, 30);

		context.drawImage(mon_image, tile, 0, 392, 259, posX, posY, 392/3, 259/3);

		if(posX<10)
		{
			tile=392;
			vitesseX=+1;	
		}

		if(posX>550)
		{
			tile=0;
			vitesseX=-1;	
		}

		posX += vitesseX;

		if(posY<50)
		{
			vitesseY=+1;	
		}

		if(posY>400)
		{
			vitesseY=-1;	
		}

		posY += vitesseY;
	} 


}
