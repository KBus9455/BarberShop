const btnMenu = document.querySelector("i");
const listMenu = document.querySelector("nav");

let x = 0;
let w = window.innerWidth;
btnMenu.addEventListener("click", function () {
    listMenu.classList.toggle("active");
})

const productsWrap = document.querySelector('.productsImgWrapper');
const products = document.querySelector('.productsImg');
const productsDescriptions = document.querySelector('.productsDescription');
const productsTab = ['fotos/s3.jpg', 'fotos/s2.jpg', 'fotos/s1.jpg'];
// 

if (w < 1200) {
    products.src = productsTab[x];
    let index = setInterval(change, 2000);

    function change() {
        x++;
        if (x == 3) {
            x = 0;
        }
        products.src = productsTab[x];
    }
}
if (w >= 1200) {
    const product2 = document.createElement('img');
    productsWrap.appendChild(product2);
    product2.src = 'fotos/s1.jpg';
    product2.classList.add("productsImg");
    const product3 = document.createElement('img');
    productsWrap.appendChild(product3);
    product3.src = 'fotos/s3.jpg';
     product3.classList.add("productsImg");
}


// const productsDescriptTab = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquam ipsam voluptates doloremque nam expedita tempore numquam harum facere, ullam molestiae sequi similique vel veritatis placeat perferendis dolorum vitae pariatur!", "Animi fuga nulla dolorem, minus odit voluptatum nisi officia dicta numquam assumenda doloremque? Vitae exercitationem et nobis a laborum provident temporibus minus quis hic libero! In accusantium error nam ad.", " Ullam soluta laborum fugit ducimus! Voluptatibus assumenda, vitae praesentium, voluptates consequatur consectetur necessitatibus ducimus mollitia quae officia modi commodi sapiente suscipit architecto nesciunt laudantium molestias officiis"]
// const showDescription = function (){
//     console.log("dziala")
//        productsDescriptions.textContent = productsDescriptTab[x]; 
//        clearInterval(index);
// }
// const hideDescription = function (){
//     console.log("dziala")
//        productsDescriptions.textContent = "";
//        index = setInterval(change, 2000);

// }
//  productsWrap.addEventListener("mouseover", showDescription);
//  productsWrap.addEventListener("mouseout", hideDescription);