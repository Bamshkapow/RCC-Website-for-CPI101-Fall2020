// Slide for the home page
var slideIndex = 1;
showSlides(slideIndex);

//To have the addition images ready
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//To show the image that matches the current slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//Show the slide and the dots
//Also match the dots with the slides
function showSlides(n) {
  var NumberOfSlides;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (NumberOfSlides = 0; NumberOfSlides < slides.length; NumberOfSlides++) {
      slides[NumberOfSlides].style.display = "none";
  }
  for (NumberOfSlides = 0; NumberOfSlides < dots.length; NumberOfSlides++) {
      dots[NumberOfSlides].className = dots[NumberOfSlides].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
