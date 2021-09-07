const btnMenu = document.querySelector("i");
const listMenu = document.querySelector("nav");

let x = 0; 

btnMenu.addEventListener("click", function (){
    listMenu.classList.toggle("active");
})


const productsWrap =document.querySelector('.productsImgWrapper');
const products =document.querySelector('.productsImg');
const productsDescriptions =document.querySelector('.productsDescription');
const productsTab = ['fotos/s3.jpg', 'fotos/s2.jpg', 'fotos/s1.jpg'];
const productsDescriptTab = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquam ipsam voluptates doloremque nam expedita tempore numquam harum facere, ullam molestiae sequi similique vel veritatis placeat perferendis dolorum vitae pariatur!", "Animi fuga nulla dolorem, minus odit voluptatum nisi officia dicta numquam assumenda doloremque? Vitae exercitationem et nobis a laborum provident temporibus minus quis hic libero! In accusantium error nam ad.", " Ullam soluta laborum fugit ducimus! Voluptatibus assumenda, vitae praesentium, voluptates consequatur consectetur necessitatibus ducimus mollitia quae officia modi commodi sapiente suscipit architecto nesciunt laudantium molestias officiis"]
products.src = productsTab[x];


const showDescription = function (){
    console.log("dziala")
       productsDescriptions.textContent = productsDescriptTab[x]; 
       clearInterval(index);
}
const hideDescription = function (){
    console.log("dziala")
       productsDescriptions.textContent = "";
       
}
 productsWrap.addEventListener("mouseover", showDescription);
 productsWrap.addEventListener("mouseout", hideDescription);


function change() {
    x++;
    if (x == 3) {
        x = 0;
    }
    products.src = productsTab[x];
}
const index = setInterval(change, 4000);
