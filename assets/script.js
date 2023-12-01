// DONNEES

const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// VARIABLES ET ELEMENTS HTML

let index = 0  // slide actif 
const arrow_left = document.querySelector("#banner .arrow_left")
const arrow_right = document.querySelector("#banner .arrow_right")
const dots = document.querySelector(".dots")
const bannerimg = document.querySelector("#banner .banner-img")
const bannertagline = document.querySelector("#banner  p")



// ECOUTEURS/LISTENERS D'EVENEMENTS EXECUTER UNE FOIS

//  Event Listeners sur les flèches  

arrow_left.addEventListener("click", () => {
	console.log("j'ai cliqué sur arrow_left")

	if (index > 0) {  ///si l'index n'a pas atteint 0
		index-- //baisse l'index
	}
	update() //mettre à jour les éléments de la page

})


arrow_right.addEventListener("click", () => {
	console.log("j'ai cliqué sur arrow_right")
	if (index < slides.length - 1) { //si l'index n'a pas atteint le max 
		index++ //augmente l'index
	}
	update() // mettre à jour les éléments de la page
})

// PROCESSUS INITIAL (AU LANCEMENT DE LA PAGE)


// Ajoutez des bullet points au slider
// créer autant de point pour chaque d'image
for (let i = 0; i < slides.length; i++) {
	// creer un point
	const dot = document.createElement("div")
	//ajouter la classe dot au point
	dot.classList.add("dot")
	// PASSER LE PREMIER POINT EN SELECTIONNE
	if (i === 0) {
		dot.classList.add("dot_selected")
	}
	// Ajouter le point à la DIV "dots"
	dots.appendChild(dot)

}


// FONCTIONS (APPELES)

// Utiliser pour mettre a jour differents elements  quand en change de slide
function update() {

	console.log(slides[index]);

	// CHANGER LE PARAGRAPHE AU CHANGEMENT D'IMAGE
	const tagLine = slides[index].tagLine; // RETROUVER LA PHRASE DU SLIDE ACTIF
	bannertagline.innerHTML = tagLine; // Ajouer la tagline en HTML

	//  changer l'image 
	// changer l'attribut src  de la banner-img
	bannerimg.src = "./assets/images/slideshow/" + slides[index].image

	// changer le point actif 
	// recuperer les points
	const alldots = document.querySelectorAll(".dot")
	// Deseleectionner tous les points
	for (const dot of alldots) {
		dot.classList.remove('dot_selected');
	}
	// Selectionner le point actif
	const activeDot = alldots[index]
	activeDot.classList.add('dot_selected');








}










