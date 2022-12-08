document.querySelector('html').addEventListener('click', function() {
    alert("arrêtez de cliquer n'importe où...");
	for (h2 of document.getElementsByTagName('h2')){
		h2.textContent = "tic tac, tic tac.";
	}
	for (h4 of document.getElementsByTagName('h4')){
		h4.textContent = "Le temps est compté, rappelez-vous";
	}

});


