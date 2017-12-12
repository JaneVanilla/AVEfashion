/*popup для навигации*/

var menu = document.querySelector(".top-content__nav-links--mens");
var navPopup = document.querySelector(".navigation-popup");
var showPopup = document.querySelector(".navigation-popup__close-btn");

menu.addEventListener("click", function(event) {
	event.preventDefault();
	navPopup.classList.add("navigation-popup__show-btn");
});
showPopup.addEventListener("click", function(event) {
	event.preventDefault();
	navPopup.classList.remove("navigation-popup__show-btn");
});

/*навигация для мобильной версии*/

var hamburger = document.querySelector(".top-content__nav-hamburger");
var navigation = document.querySelector(".top-content__navigation");
var showBtn = document.querySelector(".top-content__showBtn");
var closeBtn = document.querySelector(".top-content__close-hamburger");

hamburger.addEventListener("click", function(event1) {
   event1.preventDefault();
   navigation.classList.add("top-content__showBtn");
   hamburger.classList.add("top-content__closeBtn");
   closeBtn.classList.add("top-content__showBtn");
});

closeBtn.addEventListener("click", function(event2) {
    event2.preventDefault();
    navigation.classList.remove("top-content__showBtn");
    hamburger.classList.add("top-content__showBtn");
    closeBtn.classList.remove("top-content__showBtn")
    hamburger.classList.remove("top-content__closeBtn");
});

/*моб. версия, навигация, открытие подменю*/

var mensMenu = document.querySelector(".top-content__nav-links--mens");
var underNav = document.querySelector(".top-contnet__under-nav");
var itemsMenu = document.querySelector(".top-content__nav-items")

mensMenu.addEventListener("click", function(event3) {
	event3.preventDefault();
	underNav.classList.add("top-content__showBtn");
});
/*

mensMenu.addEventListener("click", function(event4) {
	event4.preventDefault();
	underNav.classList.remove("top-content__showBtn");
	underNav.classList.add("top-content__closeBtn");
});
*/

/*slider*/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


