document.addEventListener("DOMContentLoaded", function () {
    // Highlight current navigation menu item
    const navLinks = document.querySelectorAll(".navbar ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Add to Cart Functionality
    const cartIcon = document.querySelector(".navbar img[alt='cart']");
    const productButtons = document.querySelectorAll(".btn");
    let cartCount = 0;

    productButtons.forEach(button => {
        button.addEventListener("click", function () {
            cartCount++;
            alert("Product added to cart!");
            cartIcon.setAttribute("data-cart", cartCount); // Show cart count
        });
    });

    // Back to Top Button
    const backToTop = document.createElement("button");
    backToTop.textContent = "↑ Top";
    backToTop.style.position = "fixed";
    backToTop.style.bottom = "20px";
    backToTop.style.right = "20px";
    backToTop.style.padding = "10px";
    backToTop.style.border = "none";
    backToTop.style.backgroundColor = "#000";
    backToTop.style.color = "#fff";
    backToTop.style.cursor = "pointer";
    backToTop.style.display = "none";

    document.body.appendChild(backToTop);

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    // Toggle Mobile Menu
    const menuToggle = document.querySelector(".navbar .menu-toggle");
    const navMenu = document.querySelector(".navbar nav");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});
