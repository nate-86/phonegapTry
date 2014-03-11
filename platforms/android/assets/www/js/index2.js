document.addEventListener('deviceready', initApp, false);

function initApp(){
	
	var model = document.getElementById('model');
	var uuid = document.getElementById('uuid');
//	var width = document.getElementById('width');
	var platform = document.getElementById('platform');

	model.innerHTML = window.device.model;
	uuid.innerHTML = window.device.uuid;
//	width.innerHTML = window.device.width;
	platform.innerHTML = window.device.platform;
    alert('iii');
	/*Ho eliminato il file index.js originale e implementato questo con questa funzione inizializzatrice... utilizzo Ripple per vedere come funziona la app creata combinando index.html e l'index2.js... Ripple è un emulatore di phonegap adottato nel momento in cui non si dispone di uno smartphone con un particolare OS o phonegap risulta lento*/

}