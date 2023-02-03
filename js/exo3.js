
// récupérer les élements 

// 1- le formulaire à récupérer
// 2- la valeur du input
// 3- la liste 


const htmlForm = document.querySelector("#shop-item-form");
const htmlInput = document.querySelector("#shop-item-input");
const htmlList = document.querySelector("#shop-items");

// les actions qui vont se produire à l'envoi du form
function handleSubmit(event) {

    // Pour éviter le refresh de la page
    // stopper la propagation
    event.preventDefault();

    // Je récupère le contenu du champs input (grâce à l'attribut value)
    const formValue = htmlInput.value;
    console.log(formValue);

    // Je vais créer un élement li pour le rajouter dans la liste OL
    const elementLi = document.createElement("li");
    elementLi.textContent = formValue;

    htmlList.append(elementLi);

}

// Form => event : submit / handler : fonction
htmlForm.addEventListener('submit', handleSubmit);