// Scroll to products when "Shop Now" button is clicked
document.getElementById("shopNowBtn").addEventListener("click", () => {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
});

// Add to Cart buttons functionality
const addToCartButtons = document.querySelectorAll(".product button");

addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Item added to cart!");
    });
});
