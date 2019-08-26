// Fonctionnalité 1 :

// let footerClic = document.getElementsByTagName('footer');

// let onFooterClic = function(){
// 	footerClic[0] = console.log('clique');
// };

// footerClic[0].addEventListener('click', onFooterClic);





// Fonctionnalité 1 bis :

let footerClic = document.getElementsByTagName('footer');
let clic = 0;

let onFooterClic = function(){
	clic += 1;
	footerClic[0] = console.log('clique n°' + clic); // OU  footerClic[0] = console.log('clique n°' + ++clic); >> tu incrémente de 1 et ensuite tu affiche le resultat de clic

};

footerClic[0].addEventListener('click', onFooterClic);




// Fonctionnalité 2:

let collapseElt = document.getElementById('navbarHeader');
let buttonMenu = document.getElementsByClassName('navbar-toggler');
console.log(buttonMenu);

function collapseToggle(){
	collapseElt.classList.toggle('collapse');
}


buttonMenu[0].addEventListener('click', collapseToggle);





// Fonctionnalité 3:

let cardElt = document.getElementsByClassName('card')[0];
console.log(cardElt);

let btnElt = cardElt.getElementsByClassName('btn')[1];
console.log(btnElt);

let textElt = cardElt.getElementsByClassName('card-text')[0];
console.log(textElt);

function editText() {
	textElt.style.color = 'red';
}

btnElt.addEventListener('click', editText);




// Fonctionnalité 4:

let cardElt2 = document.getElementsByClassName('card')[1];
console.log(cardElt2);

let btnElt2 = cardElt2.getElementsByClassName('btn')[1];
console.log(btnElt2);

let textElt2 = cardElt2.getElementsByClassName('card-text')[0];
console.log(textElt2);

function editText2() {
	if (textElt2.style.color === ''){
		textElt2.style.color = 'green';
	} else {
		textElt2.style.color = ''
	}
}

btnElt2.addEventListener('click', editText2);





// Fonctionnalité 5:

let navbarElt = document.getElementsByClassName('navbar')[0];
console.log(navbarElt);

let stylesheet = document.styleSheets[0];

function disableCss() {

	if (stylesheet.disabled === false) { 
		stylesheet.disabled = true ;
}	else { stylesheet.disabled = false;

	}
}

navbarElt.addEventListener("dblclick", disableCss);






// Fonctionnalité 6:

let cardElt3 = document.getElementsByClassName('card')[0];
console.log(cardElt3);

let btnViewElt = cardElt3.getElementsByClassName('btn')[0];
console.log(btnViewElt);

let textCardElt = cardElt3.getElementsByClassName('card-text')[0];
console.log(textCardElt);

let imgElt = cardElt3.getElementsByClassName('card-img-top')[0];
console.log(imgElt);

function change() {
	textCardElt.classList.toggle('collapse');
	
	if (imgElt.style.width === ''){
		imgElt.style.width = '20%';
	} else {
		imgElt.style.width = '';
	}
}


btnViewElt.addEventListener("mouseover", change);



// //Création d'une fonction pour redimentionner l'image
// function toggleImageSize(cardImg) {
//     if (cardImg.style.width === "20%") {
//         cardImg.style.width = "";
//     } else {
//         cardImg.style.width = "20%";
//     }
// }

// //Création d'une fonction pour changer le design d'une carte
// function reduceCard(card) {
//     let cardTextElt = card.getElementsByClassName("card-text")[0];
//     cardTextElt.classList.toggle("collapse");
//     let cardImgElt = card.getElementsByClassName("card-img-top")[0];
//     toggleImageSize(cardImgElt);
// }
// //Récupération de la liste des cartes
// let cardsElt = document.getElementsByClassName("card");
// //On fait une boucle sur toutes les cartes
// for (let i=0 ; i<cardsElt.length ; i++) {
//     //Définition de la carte en cours
//     let card = cardsElt[i];
//     //Récupération du bouton "view" de la carte
//     let buttonViewElt = card.getElementsByClassName("btn-success")[0];
//     //Ajout de l'évènement click sur le bouton
//     buttonViewElt.addEventListener("mouseover", function() {
//         reduceCard(card);
//     });
// }




// Fonctionnalité 7:

let containerElmt = document.getElementsByClassName('container')[2];
let linkElmt = containerElmt.getElementsByTagName('a')[1];
console.log(linkElmt);



function changePlace() {
	let cardsElt = document.getElementsByClassName('col-md-4');
	console.log(cardsElt);
	let parent = cardsElt[0].parentNode;
	parent.insertBefore(cardsElt[cardsElt.length - 1], cardsElt[0]);
}



linkElmt.addEventListener("click", changePlace);




// Fonctionnalité 8:

let linkElmt2 = containerElmt.getElementsByTagName('a')[0];
console.log(linkElmt2);

linkElmt2.addEventListener("click", function(e){
	e.preventDefault(); //Bloque l'action par défaut (la direction vers href) Mais ne bloque pas le reste
	let cardsElt = document.getElementsByClassName('col-md-4');
	let parent = cardsElt[0].parentNode;
	parent.appendChild(cardsElt[0]); //appendChild(nouvelle position)
});



//// Fonctionnalité 9:


//Récupération du logo
let logoElt = document.getElementsByClassName("navbar-brand")[0];
//Récupération du body
let bodyElt = document.body;

function changeSize(e) {
  switch (e.key) {
    case "a":
        bodyElt.classList = "";
        bodyElt.classList.add("col-4");
        break;
    case "y":
        bodyElt.classList = "";
        bodyElt.classList.add("col-4");
        bodyElt.classList.add("offset-4");
        break;
    case "p":
        bodyElt.classList = "";
        bodyElt.classList.add("col-4");
        bodyElt.classList.add("offset-8");
        break;
    case "b":
        bodyElt.classList = "";
        break;
  }
}

//Ajout de l'évènement keypress sur le logo
logoElt.addEventListener('keypress', changeSize);
