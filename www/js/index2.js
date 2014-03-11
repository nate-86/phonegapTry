document.addEventListener('deviceready', initApp, false);

function initApp(){
	
	var model = document.getElementById('model');
	var uuid = document.getElementById('uuid');
	var width = document.getElementById('width');
	var platform = document.getElementById('platform');

	model.innerHTML = window.device.model;
	uuid.innerHTML = window.device.uuid;
	width.innerHTML = window.device.width;
	platform.innerHTML = window.device.platform;

	
	/*Ho eliminato il file index.js originale e implementato questo con questa funzione inizializzatrice... utilizzo Ripple per vedere come funziona la app creata combinando index.html e l'index2.js... Ripple è un emulatore di phonegap adottato nel momento in cui non si dispone di uno smartphone con un particolare OS o phonegap risulta lento... Per poter vedere le informazioni sopra esplicitate devo dare il seguente comando:
	phonegap local plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-device.git

	(l'indirizzo del plugin segue add)

	phonegap.js va copiato nella directory /www da platforms/android/assets/www ... altrimenti non riesce a trovare il file e non funziona. Nel file config.xml posso modificare il nome in modo da poter leggere + app sul telefonino */

}

/*Se utilizzo l'accelerometro, è essenziale assegnare alla callback success un oggetto che mi permetta di leggere il valore dei 3 assi (x,y e z) e potermi calcolare la velocità (radice quadrata della somma dei 3 valori al quadrato)... l'indirizzo è https://git-wip-us.apache.org/repos/asf/cordova-plugin-device-motion.git ... Il tel in caduta libera riporta 0 sui 3 assi*/


var options = { frequency: 3000 };

function onSuccess(acc){
	var element = document.getElementById('accelerometer');
    element.innerHTML = 'X: ' + acc.x + '<br />' +
                        'Y: ' + acc.y + '<br />' +
                        'Z: ' + acc.z + '<br />' +
                        'Timestamp: ' + acc.timestamp + '<br />';

	var m = Math.sqrt(Math.pow(acc.x,2) + Math.pow(acc.y,2) + Math.pow(acc.z,2));

	if (m<1) {
		document.body.style.background-color="red";
	}

	/* Sulla base di m è possibile determinare il comportamento dello smartphone, ad es. attivare una funzione, cambiare lo stile, etc... s = 1/2gt^2 ...ossia 1/2 * 9,81 * t^2 (determinato con il timestamp) */
}

function onError(){
	alert('Doesn\'t work!');
}

navigator.accelerometer.watchAcceleration(onSuccess, onError, options);