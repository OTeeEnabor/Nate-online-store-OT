// Query the DOM for all h2 and assign it to a variable 
let h2styles = document.querySelectorAll('h2');
//Add  a class to all h2 elements in the web page to change their css styling.
h2styles.forEach(h2stlye => {

    h2stlye.classList.add('heading-2')
});
//Create a read more function the blog
function readMore() {
    var extra = document.getElementById("extra");
    var moreText = document.getElementsByClassName("more-text");
    console.log(moreText)
    var btnText = document.getElementById("readBtn");
  
    if (extra.style.display === "none") {
      extra.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      for (var i=0;i<moreText.length;i+=1){
        moreText[i].style.display = 'none';
      }
    } else {
      extra.style.display = "none";
      btnText.innerHTML = "Read less"; 
      for (var i=0;i<moreText.length;i+=1){
        moreText[i].style.display = 'block';
      }
    }
  }


//create a product object using constructor function
function Product(name, price,brand,path) {
    this.name = name;
    this.price = price;
    this.brand = brand;
    this.path = path;
    this.description = "This " + this.name + " is made by " + this.brand + ". Do best and get yours now.";
}
//Product Prototypes
//The code below creates a prototype method for the Product object that gives a brief description of the object
Product.prototype.description = function () {
    let snippet = "This " + this.name + " is made by " + this.brand + ". Do best and get yours now."
    return snippet;
};
//The code below creates a prototype method for the Product object that adds the object into the DOM of the shop page
Product.prototype.createHtml = function() {
    const shop = document.getElementById('Row');
    const shopItem = document.createElement("div");
    //add the following list of classes to the div created- in ShopItem
    shopItem.classList.add("col-sm-12","col-lg-3",'shop-product');
    shopItem.innerHTML = `
           <div class="card mt-4">
                <img src="${this.path}" class="card-img-top" alt="${this.name}">
                <div class="card-body">
                    <h5 class="card-title shop-item-title">${this.name}</h5>
                    <p class="card-text currency shop-currency"><span class="currency shop-currency">R </span>${this.price}</p>
                    <p class="card-text item-description">${this.description}</p>
                    <button class="btn shop-button" type="button" onclick="load()"><i class='fas fa-shopping-cart'></i>Add to cart</button>
                </div>
           </div>`;
    
    shop.appendChild(shopItem);
};

//The code block below creates 4 jeans objects
let jean_2 = new Product('Slim Leg Jeans',550,'Country Street','/images/products/jeans/Embellished-Slim-Leg-Jeans-SHOP.jpg');
let  jean_3 = new Product('Zip Stretch Jeggings',500,'Flavor Yung','/images/products/jeans/Zip-Detail-Ultra-Stretch-Jeggings-SHOP.jpg');
let jean_4 = new Product('Animal Skinny Jeans',500,'Animal Blue','/images/products/jeans/Animal-Print-Skinny-Jeans-SHOP.jpg');
let jean_5 = new Product('Super Skinny Jeans',550,'Super Jeans','/images/products/jeans/Super-Stretch-Skinny-Jeans-SHOP.jpg');
//Create an array to store the 4 jeans objects
const jean = new Array();
jean[0] = jean_2;
jean[1] = jean_3;
jean[2] = jean_4;
jean[3]= jean_5;

//For loop to loop through the array and place each jean object into the shop page DOM
for (i=0; i < jean.length ;i++){
    jean[i].createHtml();
}
//This block of code will wait for the DOM to be fully loaded before the following code will be activated.
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded',load)
} else{
    load()
}

 function load() {
// add an event listener to the buttons with the class name cart-button
    let removeButton = document.getElementsByClassName('cart-button')
    for (var i = 0; i < removeButton.length; i++) {
        var button = removeButton[i];
        //button with a click event will activate the function RemoveCartItem
        button.addEventListener('click',removeCartItem);
    }
//add an event listener to the quantity input field with the class name cart-quantity
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    //run a loop through all the input fields with the class name above
    for (var i = 0; i < quantityInputs.length; i++) {
        // for each input field add an event listener that will activate the quantityChanged function when clicked
        var input = quantityInputs[i];
        input.addEventListener('change',quantityChanged);

    }
// add an event listener to the buttons with the class name shop button
    let addToCartButton = document.getElementsByClassName('shop-button');
    for (var i = 0; i < addToCartButton.length; i++) {
        //for each button add a click event which will activate the addToCart function
        var button = addToCartButton[i];
        button.addEventListener('click',addToCart);
    }


 };

 //The following functions are linked to the event listeners created above


//This function will remove the cart item associated with the remove button that is clicked. 
 function removeCartItem(event) {
     var buttonClicked = event.target
     buttonClicked.parentElement.parentElement.parentElement.remove();
     //Update the cart total after the cart item has been removed.
     updateCartTotal()
 }

 // This function will set the value of the input field if the user tries to go below 1 or inputs a value that is not a number
 function quantityChanged(event) {
     var input = event.target
     if (isNaN(input.value) || input.value <=0) {
        input.value = 1
     }
     updateCartTotal()
 }
//This function updates the cart total.
 function updateCartTotal() {
    //Get all the items in the cart with the class name cart-item-row
    let cartItemRows  = document.getElementsByClassName("cart-item-row");

    let total = 0;
    // For each item in the cart, run a loop that gets the quantity input and price of the item. Add all of them to the total amount in the cart. 
    for (let i = 0; i < cartItemRows.length;i++){
       let cartItemRow = cartItemRows[i];
      let priceItem = cartItemRow.getElementsByClassName('cart-item-price')[0];
      let quantityItem = cartItemRow.getElementsByClassName('cart-quantity-input')[0];
       let price= parseFloat(priceItem.innerText.replace('R',''));
       let quantity = quantityItem.value;
       //increment the total amount in the cart by the price and quantity of each item in the cart. 
       total = total + (price * quantity)
      
    }
    document.getElementsByClassName('cart-total-amount')[0].innerText = "Total Amount: R"+ total;
 }

 function addToCart(event){
     var button = event.target
     var shopItem = button.parentElement.classList.contains("card-body");

     //Create cart item object
     const item = {};
     //  get the path of the image file associated with this button
     let fullPath= event.target.parentElement.previousElementSibling.src;
    let pos = fullPath.indexOf("images");
    let partPath = fullPath.slice(pos);
    item.img = partPath; 
    //cart item image given a path
    //get the name of the shop item associated with the add to cart button clicked
    let name = event.target.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
    //Assign the name of the shop item to as a property of the item object
    item.name = name;
    //get the price of the shop item associated with the add to cart button clicked
    let price = parseFloat(event.target.previousElementSibling.previousElementSibling.innerText.replace('R',''));
    //Assign the price of the shop item clicked as a property of the item
    item.price=price;
     //Create a div container to place this cart item object
    const cartItem = document.createElement("div");
    cartItem.classList.add('row','cart-item-row');
    cartItem.innerHTML = `
        <div class="col-4 cart-item">
            <img class="cart-item-image"src="${item.img}" alt="Image of ${item.img}">
            <span class="cart-text cart-item-title">${item.name}</span>
        </div>
        <div class=" col-4 cart-price">
            <span class=" cart-text cart-item-price">R${item.price}</span>
        </div>
        <div class="col-4 cart-quantity">
            <div class="quantity-container">
                    <input class="cart-quantity-input" type="number" value="1" onclick="quantityChanged(event)">
                    <button class="btn shop-button cart-button cart-text" type="button" onclick="removeCartItem(event)">Remove Item</button>
            </div>
            
        </div>
    </div>
    `;


    //This code selects the names of items in the cart.
    let cartItemNames = document.getElementsByClassName('cart-item-title');

    //Loop through all the item names in the cart

    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == name){
            alert(`${item.name} has already been added to the cart, increase your quantity.`)
            return
        }
    }
    alert(`${item.name} has been added to the cart`);

    const cartSection = document.getElementById('cartSection');
    const cartTotal = document.getElementById('cartTotal');

    cartSection.insertBefore(cartItem,cartTotal);

    updateCartTotal();
 };



































































