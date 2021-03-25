const btnMenu = document.querySelector("i");
const listMenu = document.querySelector("nav");

let x = 0; 

btnMenu.addEventListener("click", function (){
    listMenu.classList.toggle("active");
})


const products =document.querySelector('.products');
const productsTab = ['fotos/s3.jpg', 'fotos/s2.jpg', 'fotos/s1.jpg'];
products.src = productsTab[x];



function change() {
    x++;
    if (x == 3) {
        x = 0;
    }
    products.src = productsTab[x];
}
setInterval(change, 4000);




//
 //$('.aboutUs').on('click', function () {
 // $('body, html').animate({
//   scrollTop: $('.aboutUs').offset().top
//  }, 500)
// }) 