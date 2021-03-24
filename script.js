const btnMenu = document.querySelector("i");
const listMenu = document.querySelector("nav");


btnMenu.addEventListener("click", function (){
    listMenu.classList.toggle("active");
})




 $('.aboutUs').on('click', function () {
  $('body, html').animate({
   scrollTop: $('.aboutUs').offset().top
  }, 500)
 })
