let slideIndex = 0;
const plus = document.getElementById("right");
const minus = document.getElementById("left");
const leftArrow = document.getElementById("1");
const leftArrowWhite = document.getElementById("2");
const rightArrow = document.getElementById("3");
const rightArrowWhite = document.getElementById("4");
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
	showSlides(slideIndex += 1);
	plus.classList.add("slider__circle_active");
	minus.classList.remove("slider__circle_active");
	leftArrowWhite.style.display = "none";
	leftArrow.style.display = "block";
	rightArrowWhite.style.display = "block";
	rightArrow.style.display = "none";
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
	showSlides(slideIndex -= 1);
	minus.classList.add("slider__circle_active");
	plus.classList.remove("slider__circle_active");
	leftArrowWhite.style.display = "block";
	leftArrow.style.display = "none";
	rightArrowWhite.style.display = "none";
	rightArrow.style.display = "block";
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
	showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
	let slides = document.getElementsByClassName("reviews__item");
	slideIndex = n % slides.length

	if (n < 0) {
		slideIndex = slides.length - 1
	}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	console.log(n)
	console.log(slideIndex)
	console.log(slides)

	slides[slideIndex].style.display = "flex";
	slides[slideIndex + 1].style.display = "flex";
	slides[slideIndex + 2].style.display = "flex";

}
