// Query the DOM for all h2 and assign it to a variable 
let h2styles = document.querySelectorAll('h2');
//Add  a class to all h2 elements in the web page to change their css styling.
h2styles.forEach(h2stlye => {

    h2stlye.classList.add('heading-2')
});

//create a product object using constructor function

function Product(name, price,brand) {
    this.name = name;
    this.price = price;
    this.brand = brand;
}
Product.prototype.description = function () {
    let snippet = "This " + this.name + " is made by " + this.brand + ". Do best and get yours now."
    return snippet;
};
