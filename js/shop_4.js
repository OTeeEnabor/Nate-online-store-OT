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

let boot_1 = new Product('Bike Boots',700,'BBoot','/images/products/boots/boot_1.jpg');
let boot_2 = new Product('High Heel', 1000,'bikBlu','/images/products/boots/boots_2.jpg');
let boot_3 = new Product('low Heel',1200,"lowBl",'/images/products/boots/boots_3.jpg');
let boot_4 = new Product('Leather Boots',1500,'LethB','/images/products/boots/boots_4.jpg');

const boot = new Array();
boot[0] = boot_1;
boot[1]=boot_2;
boot[2] = boot_3;
boot[3] = boot_4;

for (i=0; i < boot.length ;i++){

    boot[i].createHtml();
}
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
    
    var removeCartButtons = document.getElementsByClassName('cart-button')
    for (var i = 0; i < removeCartButtons.length;i++) {
        var button = removeCartButtons[i]
        button.addEventListener('click', function(event){
            var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.parentElement.remove()
            updateCartTotal()
        })
    }