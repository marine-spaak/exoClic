// Je sélectionne les boutons
// const boutonHTMLYES = document.querySelector("#yes");
// const boutonHTMLNO = document.querySelector("#no");

// Je sélectionne le span
// C'est là où s'affichera le compteur
const spanHTML = document.querySelector("#counter");

// Je vais définir mon compteur
let compteur = 0;

// Je crée la fonction qui incrémente le compteur
function handleClick() {
    compteur = compteur++;
    spanHTML.textContent(compteur);
}

// Je n'oublie pas mon "écouteur"
// à l'aide du addEventListener
boutonHTML.addEventListener('click', handleClick);