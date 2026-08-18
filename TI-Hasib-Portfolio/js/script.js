// ================================
// MOBILE MENU
// ================================

const menuToggle = document.getElementById("menu-toggle");

const navMenu = document.getElementById("nav-menu");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// ================================
// CLOSE MENU AFTER CLICK
// ================================

const navLinks = document.querySelectorAll(".nav-menu a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ================================
// CONTACT FORM
// ================================

const contactForm =
    document.getElementById("contact-form");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
        "Thank you for contacting me! I will get back to you soon."
    );

    contactForm.reset();

});
