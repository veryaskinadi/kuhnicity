const catalogMenu = document.getElementById("catalogMenu");
const catalogSubmenu = document.getElementById("catalogSubmenu");

catalog.onclick = function () {
	catalogMenu.classList.toggle("header__catalogMenu_active");
	catalogSubmenu.style.display = "none";
}

kitchen.onclick = subMenuActive
countertops.onclick = subMenuActive
appliances.onclick = subMenuActive
wardrobes.onclick = subMenuActive
diningGroups.onclick = subMenuActive
promotions.onclick = subMenuActive
sale.onclick = subMenuActive
portfolio.onclick = subMenuActive

function subMenuActive() {
	catalogSubmenu.style.display = "block";
}


const plusReviews = document.getElementById("right-reviews");
const minusReviews = document.getElementById("left-reviews");
const leftArrowReviews = document.getElementById("arrowLeft-reviews");
const leftArrowWhiteReviews = document.getElementById("arrowLeftWhite-reviews");
const rightArrowReviews = document.getElementById("arrowRight-reviews");
const rightArrowWhiteReviews = document.getElementById("arrowRightWhite-reviews");

function plusSlideReviews() {
	plusReviews.classList.add("slider__circle_active");
	minusReviews.classList.remove("slider__circle_active");
	leftArrowWhiteReviews.style.display = "none";
	leftArrowReviews.style.display = "block";
	rightArrowWhiteReviews.style.display = "block";
	rightArrowReviews.style.display = "none";
}

function minusSlideReviews() {
	minusReviews.classList.add("slider__circle_active");
	plusReviews.classList.remove("slider__circle_active");
	leftArrowWhiteReviews.style.display = "block";
	leftArrowReviews.style.display = "none";
	rightArrowWhiteReviews.style.display = "none";
	rightArrowReviews.style.display = "block";
}


const plusChoise = document.getElementById("right-choise");
const minusChoise = document.getElementById("left-choise");
const leftArrowChoise = document.getElementById("arrowLeft-choise");
const leftArrowWhiteChoise = document.getElementById("arrowLeftWhite-choise");
const rightArrowChoise = document.getElementById("arrowRight-choise");
const rightArrowWhiteChoise = document.getElementById("arrowRightWhite-choise");

function plusSlideChoise() {
	plusChoise.classList.add("slider__circle_active");
	minusChoise.classList.remove("slider__circle_active");
	leftArrowWhiteChoise.style.display = "none";
	leftArrowChoise.style.display = "block";
	rightArrowWhiteChoise.style.display = "block";
	rightArrowChoise.style.display = "none";
}

function minusSlideChoise() {
	minusChoise.classList.add("slider__circle_active");
	plusChoise.classList.remove("slider__circle_active");
	leftArrowWhiteChoise.style.display = "block";
	leftArrowChoise.style.display = "none";
	rightArrowWhiteChoise.style.display = "none";
	rightArrowChoise.style.display = "block";
}


const plusSpecialOffer = document.getElementById("right-specialOffer");
const minusSpecialOffer = document.getElementById("left-specialOffer");
const leftArrowSpecialOffer = document.getElementById("arrowLeft-specialOffer");
const leftArrowWhiteSpecialOffer = document.getElementById("arrowLeftWhite-specialOffer");
const rightArrowSpecialOffer = document.getElementById("arrowRight-specialOffer");
const rightArrowWhiteSpecialOffer = document.getElementById("arrowRightWhite-specialOffer");

function plusSlideSpecialOffer() {
	plusSpecialOffer.classList.add("slider__circle_active");
	minusSpecialOffer.classList.remove("slider__circle_active");
	leftArrowWhiteSpecialOffer.style.display = "none";
	leftArrowSpecialOffer.style.display = "block";
	rightArrowWhiteSpecialOffer.style.display = "block";
	rightArrowSpecialOffer.style.display = "none";
}

function minusSlideSpecialOffer() {
	minusSpecialOffer.classList.add("slider__circle_active");
	plusSpecialOffer.classList.remove("slider__circle_active");
	leftArrowWhiteSpecialOffer.style.display = "block";
	leftArrowSpecialOffer.style.display = "none";
	rightArrowWhiteSpecialOffer.style.display = "none";
	rightArrowSpecialOffer.style.display = "block";
}


const modal = document.getElementById("modal")

buttonStock.onclick = openModal
calculate.onclick = openModal
stockCircle.onclick = openModal
buttonDesigns.onclick = openModal

modalClose.onclick = closeModal

function openModal() {
modal.style.display = "block";
}

function closeModal() {
	modal.style.display = "none";
}


$('.slider').slick({
	speed: 300,
	arrows: false,
	slidesToShow: 1,
	centerMode: false,
	variableWidth: true,
});

$('.slick-prev').on('click', function() {
	$('.slider').slick('slickPrev');
});
$('.slick-next').on('click', function() {
	$('.slider').slick('slickNext');
});