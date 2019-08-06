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
    const shop = document.getElementById('Row');
    const shopItem = document.createElement("div");
    shopItem.classList.add("col-3",'shop-product');
    shopItem.innerHTML = `
           <div class="card" style="width: 20rem;">
                <img src="${this.path}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title shop-item-title">${this.name}</h5>
                    <p class="card-text currency"><span class="currency">R </span>${this.price}</p>
                    <p class="card-text item-description">${this.description}</p>
                    <button class="btn shop-button" type="button"><i class='fas fa-shopping-cart'></i>Add to cart</button>
                </div>
           </div>`;
    
    shop.appendChild(shopItem);
};


let jean_2 = new Product('Biker Jeans',550,'Nlu','/images/products/jeans/jeans_2.jpg');
let  jean_3 = new Product('Skinny Jeans',500,'Yung','/images/products/jeans/jeans_3.jpg');
let jean_4 = new Product('Skinny Blue',500,'Biker Blue','/images/products/jeans/jeans_4.jpg');
let jean_5 = new Product('Dark Biker',550,'NlU','/images/products/jeans/jeans_1.jpg');

const jean = new Array();
jean[0] = jean_2;
jean[1] = jean_3;
jean[2] = jean_4;
jean[3]= jean_5;

for (i=0; i < jean.length ;i++){

    jean[i].createHtml();
}


// add items to the cart function
(function(){
const cartButton = document.querySelectorAll('.shop-button');
cartButton.forEach (function(button){
    button.addEventListener('click', function(event) {
        if (event.target.parentElement.classList.contains("card-body")){

            let fullPath= event.target.parentElement.previousElementSibling.src;//get the path of the image file associated with this button
            let pos = fullPath.indexOf("images");
            let partPath = fullPath.slice(pos);
            console.log(partPath);
            //Create cart item object
            const item = {};
            item.img = partPath; //cart item image given a path
            let name = event.target.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
            item.name = name;
            let price = parseFloat(event.target.previousElementSibling.previousElementSibling.innerText.replace('R',''));
            item.price=price;

            const cartItem = document.createElement("div");
            cartItem.classList.add('row','cart-item-row')
            cartItem.innerHTML = `
             
                <div class="col-4 cart-item">
                    <img class="cart-item-image"src="${item.img}">
                    <span class="cart-text cart-item-title">${item.name}</span>
                </div>
                <div class=" col-4 cart-price">
                    <span class=" cart-text cart-item-price">R${item.price}</span>
                </div>
                <div class="col-4 cart-quantity">
                    <div class="quantity-container">
                            <input class="cart-quantity" type="number" value="1">
                            <button class="btn shop-button cart-button cart-text" type="button">Remove Item</button>
                    </div>
                    
                </div>
            </div>
            `;
            //Select the cart

            const cartSection = document.getElementById('cartSection');
            console.log(cartSection)
            const cartTotal = document.getElementById('cartTotal');
            console.log(cartTotal)
            cartSection.insertBefore(cartItem,cartTotal);
            alert('Item has been added to cart:)')
        };        

    });

});

})();

(function(){
    var removeCartButtons = document.getElementsByClassName('cart-button')
    for (var i = 0; i < removeCartButtons.length;i++) {
        var button = removeCartButtons[i]
        button.addEventListener('click', function(event){
            var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.parentElement.remove()
            updateCartTotal()
        });
    };
}());

// (function quantityChange(event) {
//     var input = event.target
//     if (isNaN(input.value)|| input.value <=0){
//         input.value = 1
//     }
//     updateCartTotal()

// })();

function updateCartTotal() {
var cartHolder = document.getElementsByClassName('cart-item')[0];
 var cart = cartHolder.getElementsByClassName('cart-item-row')
 for (var i = 0; i < cartRows.length; i++) {
     var cartRow = cartRows[i];
     var priceElem = cartRow.getElementsByClassName('cart-price')[0];
     var quantityElem = cartRow.getElementsByClassName('cart-quantity')[0];
 }
 console.log(priceElem)

}