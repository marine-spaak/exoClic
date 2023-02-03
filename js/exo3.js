// récupérer les élements

// 1- le formulaire à récupérer
// 2- la valeur du input
// 3- la liste

const htmlForm = document.querySelector("#shop-item-form");
const htmlInput = document.querySelector("#shop-item-input");
const htmlList = document.querySelector("#shop-items");

// Les actions qui vont se produire à l'envoi du form

function handleSubmit(event) {
  // Pour éviter le refresh de la page
  // stopper la propagation
  event.preventDefault();

  // Je récupère le contenu du champs input (grâce à l'attribut value)
  let formValue = htmlInput.value;

  // On nettoie notre valeur pour supprimer les espaces en début et en fin de chaîne
  formValue = formValue.trim();

  console.log(formValue);

  if (formValue == "" || formValue == " ") {
    console.log("Attention, problème avec le contenu saisi");
  } else {
    let liElement = document.createElement("li");
    liElement.textContent = formValue;

    htmlList.append(liElement);
    eraseInput();
  }
}

/**
 * Fonction qui vide le champ du formulaire
 */
function eraseInput(){
    // On sélectionne notre champ
    const input = document.querySelector('#shop-item-input');

    // On définit la nouvelle de l'input comme étant une chaîne vide
    input.value = '';

    // On donne le focus au champ après l'avoir vidé
    input.focus();
}

// J'ajoue mon écouteur
htmlForm.addEventListener("submit", handleSubmit);
