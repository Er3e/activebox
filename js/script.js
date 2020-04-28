var currentSlide = 0;

function changeSlide(){
   var slide = document.getElementsByClassName('slide'),
      dot = document.getElementsByClassName('dot');
   
      slide[currentSlide].classList.add('hiden');
      dot[currentSlide].classList.remove('active-dot');

   if ((currentSlide + 1) === slide.length){
      currentSlide = 0;
   } else {
      currentSlide++;
   }

   slide[currentSlide].classList.remove('hiden');
   dot[currentSlide].classList.add('active-dot');
}