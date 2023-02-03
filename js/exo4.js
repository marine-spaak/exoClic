// On sélectionne le formulaire dans la variable htmlForm
const htmlForm = document.querySelector("#colors-form");

// On sélectionne aussi l'input ? (car on en a besoin après)
let htmlInput = document.querySelector("#colors-input");

// On sélectionne aussi la liste (car on en a besoin encore après)
let htmlList = document.querySelector("#colors-list");

// On ajoute un écouteur d'événement au formulaire
htmlForm.addEventListener("submit", handleSubmit);

// On code la fonction Handler
function handleSubmit(event) {
  // Pour éviter le refresh de la page
  event.preventDefault();

  let valeurSaisie = htmlInput.value;
  console.log("Voici la valeur saisie : " + valeurSaisie);

  let liElement = document.createElement("li");
  liElement.textContent = valeurSaisie;

  htmlList.append(liElement);
  eraseInput();
}

/**
 * Fonction qui vide le champ du formulaire
 */
function eraseInput(){
  // On sélectionne notre champ
  const input = document.querySelector('#colors-input');

  // On définit la nouvelle de l'input comme étant une chaîne vide
  input.value = '';

  // On donne le focus au champ après l'avoir vidé
  input.focus();
}