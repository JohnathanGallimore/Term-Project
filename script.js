function showProductSelection(productName) {
    window.location.href = `products.html?product=${productName}`
}

//Function for carousel
let currentSlide = 0; 

function showSlide(n) {
    const slides = document.getElementsByClassName("carousel-slide");

    if (n >= slides.length) {
        currentSlide = 0;
    }

    if (n < 0) {
        currentSlide = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[currentSlide].style.display = "block";
}

function nextSlide() {
    showSlide(currentSlide += 1);
}

function prevSlide() {
    showSlide(currentSlide -= 1);
}

// Automatically advance slides every 5 seconds
setInterval(() => {
    nextSlide();
}, 5000);

// Initial slide display
document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);
});


//Function for search bar
function searchAndNavigate(){
    var query = document.getElementById("searchInput").value.toLowerCase();

    var productPages = {
        "fishing rods": "productVariety.html",
        "home":"welcome.html",
        "reels":"reelsVariety.html",
        "bait":"baitVariety.html",
        "tackle":"baitVariety.html",
        "license":"Licenses.html",
        "fishing licenses":"Licenses.html",
        "boating licenses":"Licenses.html"
    };

    if(productPages.hasOwnProperty(query)){
        window.location.href = productPages[query];
    }else{
        alert("Product not found!");
    }
}
document.getElementById("searchButton").addEventListener("click", searchAndNavigate);

//Function for checkout
function checkout(event){
    event.preventDefault();

    const name =document.getElementById('name').value;
    const email =document.getElementById('email').value;
    const zip = document.getElementById('zip').value;

    if(returningCustomer){
        alert('Welcome back, ${name}!');
    }else{
        alert('New Customer: ${name}');
    }

    alert('Address:${street}, ${state}, ${zip}');
    alert("Checkout functionality will go here");
}
document.querySelector('form').addEventListener('submit', checkout);

