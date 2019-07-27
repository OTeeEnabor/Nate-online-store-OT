// Query the DOM for all h2 and assign it to a variable 
let h2styles = document.querySelectorAll('h2');
//add a a class to all h2 elements in the web page to change their css styling.
h2styles.forEach(h2stlye => {

    h2stlye.classList.add('heading-2')
});


