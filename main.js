const tituloImagem = document.querySelector('.titulo');
const textoImagem = document.querySelector('.texto');
const linkImagem = document.querySelector('.link');
const previousArrow = document.querySelector('.bi-arrow-left-circle-fill');
const nextArrow = document.querySelector('.bi-arrow-right-circle-fill');
const bgImage = document.body.style.backgroundImage;
let currentImageIndex = 0;
let allImages = [
	'url("./images/imagem0.jpg")',
	'url("./images/imagem1.jpg")',
	'url("./images/imagem2.png")',
	'url("./images/imagem3.jpg")',
];
let allColors = ['#C50000', '#316088', '#627731', '#BE8D6C'];
let corSetaInativa = 'rgba(255, 255, 255, 0.5)';
let allTitles = [
	'MASP - Museu de Arte de São Paulo',
	'Beco do Batman',
	'Parque Ibirapuera',
	'Mercadão - Mercado Municipal de São Paulo',
];
let allTexts = [
	'Museu de Arte de São Paulo Assis Chateaubriand é um centro cultural e museu de arte brasileiro fundado em 1947 pelo jornalista paraibano Assis Chateaubriand. Entre os anos de 1947 e 1990, o crítico e marchand italiano Pietro Bardi assumiu a direção do MASP a convite de Chateaubriand.',
	'O Beco do Batman é uma travessa localizada na Vila Madalena, um bairro boêmio da zona oeste da cidade de São Paulo',
	'O Parque Ibirapuera é um parque urbano localizado na cidade de São Paulo, Brasil. Em 2017, foi o parque mais visitado da América Latina, com aproximadamente 14 milhões de visitas, além de ser um dos locais mais fotografados do mundo.',
	'Prédio histórico com praça de alimentação e boxes que vendem frutas raras, verduras, legumes e laticínios.',
];

function initialize() {
	updateInfo();
}

initialize();

function updateInfo() {
	document.body.style.backgroundImage = allImages[currentImageIndex];
	resetArrowStyles();
	updateArrowStyles();
	updateText();
}

function resetArrowStyles() {
	nextArrow.style.cursor = '';
	previousArrow.style.cursor = '';
	previousArrow.style.color = '';
	nextArrow.style.color = '';
	previousArrow.style.display = '';
	nextArrow.style.display = '';
}

function updateArrowStyles() {
	if (currentImageIndex === 0) {
		previousArrow.style.color = corSetaInativa;
		previousArrow.style.cursor = 'default';
	}
	if (currentImageIndex === allImages.length - 1) {
		nextArrow.style.color = corSetaInativa;
		nextArrow.style.cursor = 'default';
	}
}

function updateText() {
	linkImagem.style.color = allColors[currentImageIndex];
	tituloImagem.innerHTML = allTitles[currentImageIndex];
	textoImagem.innerHTML = allTexts[currentImageIndex];
}

previousArrow.addEventListener('click', onPreviousArrowClicked);

function onPreviousArrowClicked() {
	changeToPreviousImage();
}

function changeToPreviousImage() {
	if (currentImageIndex > 0) {
		currentImageIndex--;
		updateInfo();
	}
}

nextArrow.addEventListener('click', onNextArrowClicked);

function onNextArrowClicked() {
	changeToNextImage();
}

function changeToNextImage() {
	if (currentImageIndex < allImages.length - 1) {
		currentImageIndex++;
		updateInfo();
	}
}
