/*
    <button id="button">Clic !</button>
    <div id="times">
        On a cliqué
        <span id="counter">0</span>
        fois
    </div>
*/

//- 1: stocker l'élement HTML bouton
const htmlButton = document.querySelector("#button");
//- 2: stocker l'élement HTML span
const htmlSpan = document.querySelector("#counter");

// je définis le compteur
let compteur = 0;

/*-3: On défini la fonction :
DEFINIR LES ACTIONS AU CLICK
    - incrémenter un compteur
    - on remplace la valeur dans le DOM 
    (grâce à la variable 2)*/
// Une petite précision : les fonctions avec addEventListener
// portent par convention le mot "handle" avant le nom de la fonction
// Un handler ne peut pas recevoir vos propres paramètres !

// handleIncrement / handleCounterIncrement / handleClick
function handleClick() {
    // Est-ce qu'on défini le compteur dans la fonction ? Oui/Non Pourquoi ?
    console.log("click sur le bouton");
    // incrémenter un compteur
    compteur = compteur + 1;

    // on remplace la valeur dans le DOM 
    htmlSpan.textContent = compteur;
}

/*-4: Liaison :
<element HTML 1>.addEventListener
  ('click', on appelle la fonction 3)*/
htmlButton.addEventListener('click', handleClick);
