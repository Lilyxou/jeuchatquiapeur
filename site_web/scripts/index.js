let myHeading = document.querySelector('h2');
myHeading.textContent = "Vite le temps est compté.";

alert("Rendez vous sur la page d'hubble pour en apprendre plus sur hubble. De plus, si vous n'êtes pas sur firefox, veuillez vous y rendre.");
alert('Ne cliquez pas sur la case si dessous svp. ça arreterais le jeu.');
let newtitre = document.querySelector('h1');
newtitre.textContent = "Rdv sur hubble, lien en bas de cette page.";
let retard = document.querySelector('p');
retard.textContent = "Vous allez être en retard... dépéchez vous !";
document.querySelector('html').addEventListener('click', function() {
    alert("arrêtez de cliquer n'importe où !!");
});




