/**
 * Fonction appelée quand on soumet le formulaire
 */
 function handleSubmit(event){
    // On bloque le comportement par défaut du navigateur lors d'une soumission. C'est à dire rediriger la page vers l'url inscrite dans l'attribut action (ou la recharger s'il est vide).
    event.preventDefault();

    // On récupère la valeur écrite par l'utilisateur dans l'input
    const userValue = getInputValue();

    // Si la valeur inscrite est valable (donc que le champ n'est pas vide), alors on procède à la suite des opérations
    if(userValue !== false) {
        // On envoie la valeur à la fonction addItem dont le but est de l'afficher sur la page.
        addItem(userValue);
        // On vide le champ
        eraseInput();
    }
}

/**
 * Fonction permettant de récupérer la valeur inscrite dans le champ du formulaire.
 * Si le champ est vide, la fonction retourne false.
 */
function getInputValue(){
    // On sélectionne notre champ
    const input = document.querySelector('#shop-item-input');

    // On récupère la valeur inscrite dedans
    let value = input.value;

    // On nettoie notre valeur pour supprimer les espaces en début et en fin de chaîne
    value = value.trim();

    // Si cette dernière vide, on affiche un message d'erreur dans la console
    // Pour améliorer l'UX, il faudrait l'afficher directement sur la page !
    if(value == '') {
        console.error('Il faut remplir le champ, pardi !');
        return false;
    } else {
        return value;
    }
}

/**
 * Fonction permettant d'ajouter un nouvel élément à la liste dans le DOM
 */
function addItem(item) {
    // On sélectionne notre liste
    const list = document.querySelector('#shop-items');
    // On ajoute à la fin de notre ol, une balise li qui contient la valeur entrée par l'utilisateur.
    list.innerHTML += "<li>" + item + "</li>";
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

// On sélectionne le formulaire afin de pouvoir surveiller les nouvelles entrées de l'utilisateur.
const form = document.querySelector('#shop-item-form');

// On place un écouteur d' évènements sur le formulaire. Il va surveiller les  évènements "submit". Ceux-ci sont déclenchés quand on clique sur le bouton OK ou quand on fait entrée dans le formulaire.
// Quand on détecte un submit, on va alors exécuter notre handler "handleSubmit" (handler = fonction appelée par un écouteur d' évènements).
form.addEventListener('submit', handleSubmit);