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
let index = 0  // slide actif 
// ajouter banniere 
// ajouter le paragraphe de banner

//  Event Listeners sur les flèches 

let arrow_left = document.querySelector("#banner .arrow_left")
console.log(arrow_left)

arrow_left.addEventListener("click", () => {
	console.log("j'ai cliqué sur arrow_left")

	if (index > 0) {  ///si l'index n'a pas atteint 0
		index-- //baisse l'index
	}
	update() //mettre à jour les éléments de la page

})

let arrow_right = document.querySelector("#banner .arrow_right")
console.log(arrow_right)

arrow_right.addEventListener("click", () => {
	console.log("j'ai cliqué sur arrow_right")
	if (index < slides.length - 1) { //si l'index n'a pas atteint le max 
		index++ //augmente l'index
	}
	update() // mettre à jour les éléments de la page
}
)

// Ajoutez des bullet points au slider
let dots = document.querySelector(".dots")

// console.log(slides.length);crée autant de point pour chaque d'image
for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("div")
	dot.classList.add("dot")
	dots.appendChild(dot)
	console.log(dots);
}

function update() {
	const slide = slides[index]; // retrouver le slide selectionné
	console.log(slides[index]);

	// changer le point actif 



	//  changer l'image
                                                                                                        
	



// changer l'attribut src  de la banner-img

	let bannerimg = document.querySelector("#banner .banner-img")
	bannerimg.src = "./assets/images/slideshow/" + slide.image
	






	// changer le texte 

	// changer le contenu du paragraphe dans banner

}










