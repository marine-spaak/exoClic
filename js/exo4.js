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

  // Validation de l'Input
  let valeurSaisie = getInputValue();

  if (valeurSaisie == false) {
    console.log("Problem, problemo");
  } else {
    console.log("Voici la valeur saisie : " + valeurSaisie);
    let liElement = document.createElement("li");
    liElement.textContent = valeurSaisie;
    liElement.style.color = valeurSaisie;
  
    htmlList.append(liElement);
  }

  eraseInput();
}

/**
 * Fonction qui vide le champ du formulaire
 */
function eraseInput() {
  // On sélectionne notre champ
  const input = document.querySelector("#colors-input");

  // On définit la nouvelle de l'input comme étant une chaîne vide
  input.value = "";

  // On donne le focus au champ après l'avoir vidé
  input.focus();
}

function getInputValue() {
  // On sélectionne l'objet "input" dans le code HTML avec querySelector
  // C'est déjà fait au début du code

  // On récupère sa valeur avec objet.value
  let value = htmlInput.value;
  value = value.trim();

  // On fait un filtre sur la valeur qui renvoie FALSE si incorrect
  // On définit les condit° qui renvoient FALSE
  // 1) Commence par un #,
  if (value[0] != "#") {
    // Méthode 1 on donne la valeur false à value
    // value = false;

    // Méthode 2 plus logiue : on fait directement un return
    return false;
  }

  // 2) Nb de char < 4 ou > 7
  if (value.length < 4 || value.length > 7) {
    return false;
  }

  // 3) Nb de char >4 et <7
  if (value.length > 4 && value.length < 7) {
    return false;
  }

  // Ou qui renvoie la valeur si elle est au bon format
  return value;
}


