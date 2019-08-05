// Query the DOM for all h2 and assign it to a variable 
let h2styles = document.querySelectorAll('h2');
//Add  a class to all h2 elements in the web page to change their css styling.
h2styles.forEach(h2stlye => {

    h2stlye.classList.add('heading-2')
});

//create a product object using constructor function
function Product(name, price,brand,path) {
    this.name = name;
    this.price = price;
    this.brand = brand;
    this.path = path;
    this.description = "This " + this.name + " is made by " + this.brand + ". Do best and get yours now.";
}

//Product Prototypes

Product.prototype.description = function () {
    let snippet = "This " + this.name + " is made by " + this.brand + ". Do best and get yours now."
    return snippet;
};

Product.prototype.createHtml = function() {
    const shop = document.getElementById('shopSection');
    const shopItem = document.createElement("div");
    shopItem.classList.add("contianer","shop-item");
    shopItem.innerHTML = `<div class="row">
    <div class="col-sm-12 col-lg-12 shop-product">
           <div class="card" style="width: 20rem;">
                <img src="${this.path}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title heading-3">${this.name}</h5>
                    <p class="card-text currency"><span class="currency">R </span>${this.price}</p>
                    <p class="card-text item-description">${this.description}</p>
                    <a href="#" class="btn shop-button"><i class='fas fa-shopping-cart'></i>Add to cart</a>
                </div>
           </div>
    </div>
</div>`;
    // `        <div class="row">
    //                 <div class=" col-sm-12 col-md-offset-2 col-lg-4 shop-image">
    //                     <img class="image"src="${this.path}">
    //                 </div>
    //                 <!--Product information column-->
    //                 <div class="col-sm-12 col-lg-6 shop-info">
    //                         <div class="row boot-strap-row">
    //                             <div class="col-sm-12 col-lg-6 shop-item-heading">
    //                                 <h3 class=" heading-3 shop-item-name">${this.name}</h3>
    //                             </div>
    //                         </div>
    //                         <div class="row boot-strap-row">
    //                             <div class="col-sm-12 col-lg-6 shop-descrip bg-primary">
    //                                 <p class="shop-item-description">${this.description}</p>
    //                             </div>
    //                         </div>
    //                         <div class="row boot-strap-row">
    //                             <div class="col-sm-12 col-lg-6 shop-price">
    //                                 <span class="currency">R</span><span class="shop-item-price">${this.price}</span>
    //                             </div>
    //                         </div>
    //                         <div class="row boot-strap-row">
    //                             <div class="col-sm-12 col-lg-6 shop-button-container">
    //                                 <button type="button" class=" btn shop-button"><i class='fas fa-shopping-cart'></i>  Add to cart</button>
    //                             </div>
    //                         </div>
    //                 </div>      
    //     </div>
    //     `;
    console.log(shopItem);
    shop.appendChild(shopItem);
    // return shopItem;
};

// //
//
// let jacket_2 = new Product('Leather Jacket',500,'Freedom','/images/products/jackets/jacket_2.jpg');
// jacket_2.createHtml();

// let jean_2 = new Product('Biker Jeans',550,'Nlu','/images/products/jeans/jeans_2.jpg');
// let  jean_3 = new Product('Skinny Jeans',500,'Yung','/images/products/jeans/jeans_3.jpg');
// let jean_4 = new Product('Skinny Blue',500,'Biker Blue','/images/products/jeans/jeans_4.jpg');

// const jean = new Array();
// jean[0] = jean_2;
// jean[1] = jean_3;
// jean[2] = jean_4;

// for (i=0; i < jean.length ;i++){

//     jean[i].createHtml();
// }

// console.log(jean);

let blue_denm = new  Product ('Blue Denim Jacket',500,"Freedom","/images/featured_product_1.jpeg");
let rainbow_jack = new Product('Rainbow Jacket', 1500, 'Rainbow Free','/images/featured_product_2.jpeg');
let dark_jacket = new Product('Dark Blue Denim Jacket', 1000,"Denim Blue",'/images/featured_product_3.jpeg');
let jacket_2 = new Product('Leather Jacket',500,'Freedom','/images/products/jackets/jacket_2.jpg');
 
const jacket = new Array();
jacket[0] = blue_denm;
jacket[1] = rainbow_jack;
jacket[2] = dark_jacket;
jacket[3] = jacket_2;

for (i=0; i < jacket.length ;i++){

    jacket[i].createHtml();
}

// let shirt_1 = new Product('Plain Blue Shirt',200,"Rum",'/images/products/shirts/shirt_1.jpg');
// let shirt_2 = new Product('Heart Shirt', 250, "RuP",'/images/products/shirts/shirt_2.jpg');
// let shirt_3 = new Product('Black shirt',200,'PRu',"/images/products/shirts/shirt_3.jpg");
// let shirt_4 = new Product('Plain Long Sleeve Tshirt',300,"FPro",'"/images/products/shirts/shirt_4.jpg"');

// const shirt = new Array();
// shirt[0] = shirt_1;
// shirt[1] = shirt_2;
// shirt[2] = shirt_3;
// shirt[3] = shirt_4;

// for (i=0; i < shirt.length ;i++){

//     shirt[i].createHtml();
// }

// let boot_1 = new Product('Bike Boots',700,'BBoot','/images/products/boots/boot_1.jpg');
// let boot_2 = new Product('High Heel', 1000,'bikBlu','/images/products/boots/boots_2.jpg');
// let boot_3 = new Product('low Heel',1200,"lowBl",'/images/products/boots/boots_3.jpg');
// let boot_4 = new Product('Leather Boots',1500,'LethB','/images/products/boots/boots_4.jpg');

// const boot = new Array();
// boot[0] = boot_1;
// boot[1]=boot_2;
// boot[2] = boot_3;
// boot[3] = boot_4;

// for (i=0; i < boot.length ;i++){

//     boot[i].createHtml();
// }
