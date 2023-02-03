/*
LOGIQUE DE CODE

Déclaration des 2 compteurs

1- stocker l'element HTML button#Yes
2 stocker l'element HTML span#counter-yes
3- stocker l'element HTML button#No
4- stocker l'element HTML span#counter-no
*/

let compteurYes = 0;
const htmlButtonYes = document.querySelector("button#yes");
const htmlSpanCounterYes = document.querySelector("span#counter-yes");

let compteurNo = 0;
const htmlButtonNo = document.querySelector("button#no");
const htmlSpanCounterNo = document.querySelector("span#counter-no");

// FCT1 : incrémenter le compteur YES, modifier le span (2) avec la valeur de ce compteur
function handleClickYes() {
    compteurYes++;
    htmlSpanCounterYes.textContent = compteurYes;
}


// FCT2 : incrémenter le compteur NO, modifier le span (4) avec la valeur de ce compteur
function handleClickNo() {
    compteurNo++;
    htmlSpanCounterNo.textContent = compteurNo;
}


// On peut améliorer les deux fonctions pour n'en faire qu'une seule
// les handlers ne peuvent pas recevoir vos propres paramètres


function handleClick(event) {

    // Pour conditionner il me faut le event
    const htmlButtonClicked = event.currentTarget;

    // Je récupère l'attribut id 
    const idButton = htmlButtonClicked.id;

    // condition sur quoi ?
    // on veut savoir si on a cliquer sur l'élement YES ou sur l'élement NO

    if(idButton == "yes") {
        compteurYes++;
        htmlSpanCounterYes.textContent = compteurYes;
    } else {
        compteurNo++;
        htmlSpanCounterNo.textContent = compteurNo;
    }
}

htmlButtonYes.addEventListener('click', handleClick);
htmlButtonNo.addEventListener('click', handleClick);


/*
7- addEventListener -> element 1 au click, 
on declenche la fonction 1
8- addEventListener ->element 3 au click
on declenche la fonction 2
*/