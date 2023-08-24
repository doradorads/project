document.addEventListener("DOMContentLoaded", function() {
    const buyButtons = document.querySelectorAll(".buy-button");

    buyButtons.forEach(button => {
        button.addEventListener("click", () => {
            const productName = button.getAttribute("data-product");
            const productPrice = parseInt(button.getAttribute("data-price"));
            const productImage = button.getAttribute("data-image"); // Récupérer le chemin de l'image
            addToCart(productName, productPrice, productImage);
            alert(`${productName} ajouté au panier !`);
            window.location.href = "panier.html"; // Rediriger vers la page du panier après l'ajout
        });
    });

    function addToCart(productName, productPrice, productImage) {
        const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
        cartItems.push({ name: productName, price: productPrice, image: productImage });
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsList = document.getElementById("cart-items");

    cartItems.forEach(item => {
        const listItem = document.createElement("li");
        const itemImage = document.createElement("img");
        itemImage.src = item.image;
        itemImage.alt = item.name;
        listItem.appendChild(itemImage);
        listItem.appendChild(document.createTextNode(`${item.name} - $${item.price}`));
        cartItemsList.appendChild(listItem);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsList = document.getElementById("cart-items");

    function updateCartItems() {
        cartItemsList.innerHTML = cartItems.map((item, index) => `
            <li>
                <span>${item.name} - $${item.price}</span>
                <button class="remove-button" data-index="${index}">Remove</button>
            </li>
        `).join("");
    }

    updateCartItems();

    cartItemsList.addEventListener("click", event => {
        if (event.target.classList.contains("remove-button")) {
            const itemIndex = parseInt(event.target.getAttribute("data-index"));
            cartItems.splice(itemIndex, 1);
            localStorage.setItem("cart", JSON.stringify(cartItems));
            updateCartItems();
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsList = document.getElementById("cart-items");
    const buyButton = document.getElementById("buy-button");

    function updateCartItems() {
        cartItemsList.innerHTML = cartItems.map(item => `
            <li>${item.name} - $${item.price}</li>
        `).join("");
    }

    updateCartItems();

    buyButton.addEventListener("click", () => {
        // Empty the cart and display a message
        localStorage.removeItem("cart");
        updateCartItems();
        alert("Thanks for your purchase!");
    });
})
document.addEventListener("DOMContentLoaded", function() {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsList = document.getElementById("cart-items");

    function updateCartItems() {
        cartItemsList.innerHTML = cartItems.map((item, index) => `
            <li>
                <span>${item.name} - $${item.price}</span>
                <button class="remove-button" data-index="${index}">Remove</button>
            </li>
        `).join("");
    }

    updateCartItems();

    cartItemsList.addEventListener("click", event => {
        if (event.target.classList.contains("remove-button")) {
            const itemIndex = parseInt(event.target.getAttribute("data-index"));
            cartItems.splice(itemIndex, 1);
            localStorage.setItem("cart", JSON.stringify(cartItems));
            updateCartItems();
        }
    });
});
