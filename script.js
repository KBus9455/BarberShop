const btnMenu = document.querySelector("i");


const listMenu = document.querySelector("nav");


btnMenu.addEventListener("click", function (){
    console.log(btnMenu)
    btnMenu.classList.toggle("inactiveicon");
    listMenu.classList.toggle("inactivemenu");
})




 $('.aboutUs').on('click', function () {
  $('body, html').animate({
   scrollTop: $('.aboutUs').offset().top
  }, 500)
 })
