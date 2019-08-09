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
    shopItem.classList.add("col-3",'shop-product');
    shopItem.innerHTML = `
           <div class="card" style="width: 20rem;">
                <img src="${this.path}" class="card-img-top" alt="${this.name}">
                <div class="card-body">
                    <h5 class="card-title shop-item-title">${this.name}</h5>
                    <p class="card-text currency"><span class="currency">R </span>${this.price}</p>
                    <p class="card-text item-description">${this.description}</p>
                    <button class="btn shop-button" type="button" onclick="load()"><i class='fas fa-shopping-cart'></i>Add to cart</button>
                </div>
           </div>`;
    
    shop.appendChild(shopItem);
};

//The code block below creates 4 jeans objects
let jean_2 = new Product('Biker Jeans',550,'Nlu','/images/products/jeans/jeans_2.jpg');
let  jean_3 = new Product('Skinny Jeans',500,'Yung','/images/products/jeans/jeans_3.jpg');
let jean_4 = new Product('Skinny Blue',500,'Biker Blue','/images/products/jeans/jeans_4.jpg');
let jean_5 = new Product('Dark Biker',550,'NlU','/images/products/jeans/jeans_1.jpg');
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

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded',load)
} else{
    load()
}

 function load() {

    let removeButton = document.getElementsByClassName('cart-button')
    for (var i = 0; i < removeButton.length; i++) {
        var button = removeButton[i];
        button.addEventListener('click',removeCartItem);
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change',quantityChanged);

    }

    let addToCartButton = document.getElementsByClassName('shop-button');
    for (var i = 0; i < addToCartButton.length; i++) {
        var button = addToCartButton[i];
        button.addEventListener('click',addToCart);
    }


 };

 function removeCartItem(event) {
     var buttonClicked = event.target
     console.log(buttonClicked);
     buttonClicked.parentElement.parentElement.parentElement.remove();
     updateCartTotal()
 }

 function quantityChanged(event) {
     var input = event.target
     if (isNaN(input.value) || input.value <=0) {
         
        input.value = 1
     }
     updateCartTotal()
        

 }

 function updateCartTotal() {
    //get the all rows in the cart
    let cartItemRows  = document.getElementsByClassName("cart-item-row");
    let total = 0;
    for (let i = 0; i < cartItemRows.length;i++){
       let cartItemRow = cartItemRows[i];
      let priceItem = cartItemRow.getElementsByClassName('cart-item-price')[0];
      let quantityItem = cartItemRow.getElementsByClassName('cart-quantity-input')[0];
       let price= parseFloat(priceItem.innerText.replace('R',''));
       let quantity = quantityItem.value;
       //increment the total amount in the cart by the price and quantity of each item in the cart. 

       total = total + (price * quantity)
       console.log(price*quantity)
    }
    document.getElementsByClassName('cart-total-amount')[0].innerText = "Total Amount: R"+ total;
    // let totalAmount = document.getElementsByClassName('cart-total-amount')[0];
    // console.log(totalAmount)
    // totalAmount.innerText = total;
    // console.log(total)
    // let total = document.getElementsByClassName('cart-item-price')[0];
    // let totals = parseFloat(total.innerText.replace('R',''));
    // console.log(totals)
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
            <img class="cart-item-image"src="${item.img}">
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




































































// // add items to the cart function
// (function(){
// const cartButton = document.querySelectorAll('.shop-button');
// cartButton.forEach (function(button){
//     button.addEventListener('click', function(event) {
//         if (event.target.parentElement.classList.contains("card-body")){
//             let fullPath= event.target.parentElement.previousElementSibling.src;//get the path of the image file associated with this button
//             let pos = fullPath.indexOf("images");
//             let partPath = fullPath.slice(pos);
//             //Create cart item object
//             const item = {};
//             item.img = partPath; //cart item image given a path
//             let name = event.target.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
//             item.name = name;
//             let price = parseFloat(event.target.previousElementSibling.previousElementSibling.innerText.replace('R',''));
//             item.price=price;

//             const cartItem = document.createElement("div");
//             cartItem.classList.add('row','cart-item-row')
//             cartItem.innerHTML = `
             
//                 <div class="col-4 cart-item">
//                     <img class="cart-item-image"src="${item.img}">
//                     <span class="cart-text cart-item-title">${item.name}</span>
//                 </div>
//                 <div class=" col-4 cart-price">
//                     <span class=" cart-text cart-item-price">R${item.price}</span>
//                 </div>
//                 <div class="col-4 cart-quantity">
//                     <div class="quantity-container">
//                             <input class="cart-quantity" type="number" value="1">
//                             <button class="btn shop-button cart-button cart-text" type="button">Remove Item</button>
//                     </div>
                    
//                 </div>
//             </div>
//             `;
//             //This code selects the names of items in the cart.
//             let cartItemNames = document.getElementsByClassName('cart-item-title');
//             //Loop through all the item names in the cart
//              for (let i = 0; i < cartItemNames.length; i++) {
//                 if (cartItemNames[i].innerText == name){
//                     alert(`${item.name} has already been added to the cart, increase your quantity.`)
//                     return
//                 }
//             }
//             alert(`${item.name} has been added to the cart`)
//             const cartSection = document.getElementById('cartSection');
//             const cartTotal = document.getElementById('cartTotal');
//             cartSection.insertBefore(cartItem,cartTotal);
//             let removeCartButtons = document.getElementsByClassName('cart-button');
// console.log(removeCartButtons)
            
//         };        

//     });

// });
// })();
// cartNotEmpty = document.getElementsByClassName('cart-button');
// console.log(cartNotEmpty)
// if (document.readyState == 'loading' & cartNotEmpty != null) {
// document.addEventListener('DOMContentLoaded',loaded)

// } else {
//     loaded()
// }

// function loaded(){
//      let removeCart = document.getElementsByClassName('cart-button');
//      console.log(removeCart)
//     for (let i = 0; i < removeCart.length;i++) {
//         let button = removeCart[i]
//         button.addEventListener('click', function(event) {
//             var buttonClicked = event.target
//             console.log(buttonClicked.parentElement.parentElement.parentElement)
//             buttonClicked.parentElement.parentElement.parentElement.remove()
//         });
//     }

// }

// function removeCartItem(event) {

//             var buttonClicked = event.target
//             console.log(buttonClicked.parentElement.parentElement.parentElement)
//             buttonClicked.parentElement.parentElement.parentElement.remove()
// }
// (function() {
//     let removeCart = document.getElementsByClassName('cart-button');
//      console.log(removeCart)
//     for (let i = 0; i < removeCart.length;i++) {
//         let button = removeCart[i]
//         button.addEventListener('click', function(event) {
//             var buttonClicked = event.target
//             console.log(buttonClicked.parentElement.parentElement.parentElement)
//             buttonClicked.parentElement.parentElement.parentElement.remove()
//         });
//     }
// })();



// (function quantityChange(event) {
//     var input = event.target
//     if (isNaN(input.value)|| input.value <=0){
//         input.value = 1
//     }
//     updateCartTotal()

// })();

// function updateCartTotal() {
// var cartHolder = document.getElementsByClassName('cart-item')[0];
//  var cart = cartHolder.getElementsByClassName('cart-item-row')
//  for (var i = 0; i < cartRows.length; i++) {
//      var cartRow = cartRows[i];
//      var priceElem = cartRow.getElementsByClassName('cart-price')[0];
//      var quantityElem = cartRow.getElementsByClassName('cart-quantity')[0];
//  }
 

// }

// function showTotal(){

//     console.log(alert('sdsd'))
// };