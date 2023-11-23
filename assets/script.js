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
	if (index <slides.length -1) { //si l'index n'a pas atteint le max 
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
	console.log(index);
	console.log(slides[index]);

	// changer le point actif 



	//  changer l'image
	// changer l'attribut src  de la banner-img 





	// changer le texte 

// changer le contenu du paragraphe dans banner

}











// let dot_selected = document.createElement("dot_selected ")
// dots = document.querySelector("dots")
// dots.appendChild(dot_selected)
// console.log(dot_selected)


// Ajoutez des bullet points au slider en HTML 

// let html = `
//             <div class="dot"></div>
// 			<div class="dot"></div>
// 			<div class="dot"></div>
// 			<div class="dot"></div>
// 			<div class="dot_selected "> </div>

// `




// // Ajout des IMG

// let slide2 = document.createElement("img");
// img.src = "images/slideshow/slide2.jpg";
// banner.appendChild(img)

// let slide3 = document.createElement("img");
// img.src = "images/slideshow/slide3.jpg";
// banner.appendChild(img)

// let slide4 = document.createElement("img");
// img.src = "images/slideshow/slide4.png";
// banner.appendChild(img)


