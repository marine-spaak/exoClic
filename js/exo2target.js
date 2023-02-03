// Je sélectionne les boutons
const boutonHTMLyes = document.querySelector("#yes");
const boutonHTMLno = document.querySelector("#no");

// Je sélectionne le span
// C'est là où s'affichera le compteur
const spanHTMLyes = document.querySelector("#counter-yes");
const spanHTMLno = document.querySelector("#counter-no");

// Je vais définir mon compteur
let compteur_yes = 0;
let compteur_no = 0;

// Je crée la fonction qui incrémente le compteur YES
function handleClick(event) {

    const htmlButtonClicked = event.currentTarget;

    // Je récupère l'id 
    const idButton = htmlButtonClicked.id;

    if (idButton == "yes") {
        compteur_yes++;
        spanHTMLyes.textContent = compteur_yes;
    }

    else {
    compteur_no++;
    spanHTMLno.textContent = compteur_no;
    }
}

// Je n'oublie pas mon "écouteur"
// à l'aide du addEventListener
boutonHTMLyes.addEventListener('click', handleClick);
boutonHTMLno.addEventListener('click', handleClick);