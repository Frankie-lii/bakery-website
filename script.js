document.addEventListener("DOMContentLoaded", function() {
    const mobileMenu = document.getElementById("mobile-menu");
    const navAuth = document.querySelector(".nav-auth");
    const closeBtn = document.getElementById("close-btn");

    // Toggle the mobile sidebar when the hamburger icon is clicked
    mobileMenu.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevents the click from bubbling up to the document
        navAuth.classList.toggle("active");
    });

    // Close the sidebar when the X button is clicked
    closeBtn.addEventListener("click", function(event) {
        event.stopPropagation();
        navAuth.classList.remove("active");
    });

    // Close the sidebar if clicking anywhere outside of it (and outside the hamburger)
    document.addEventListener("click", function(event) {
        if (navAuth.classList.contains("active") &&
            !navAuth.contains(event.target) &&
            !mobileMenu.contains(event.target)) {
            navAuth.classList.remove("active");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const heroContent = document.querySelector('.hero-content');

    function checkFadeIn() {
        const rect = heroContent.getBoundingClientRect();
        // When the top of the hero content is within the viewport height, trigger fade in
        if (rect.top < window.innerHeight) {
            heroContent.classList.add('fade-in');
        }
    }

    // Check on scroll and on load
    window.addEventListener('scroll', checkFadeIn);
    checkFadeIn();
});

document.addEventListener("DOMContentLoaded", function() {
    const aboutContent = document.querySelector('.about-content');

    function checkFadeIn() {
        const rect = aboutContent.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            aboutContent.classList.add('fade-in');
        }
    }

    window.addEventListener('scroll', checkFadeIn);
    checkFadeIn();
});

document.addEventListener("DOMContentLoaded", function() {
    const menuSection = document.getElementById("menu");

    function revealMenu() {
        const rect = menuSection.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            menuSection.style.opacity = "1";
            menuSection.style.transform = "translateY(0)";
        }
    }

    window.addEventListener("scroll", revealMenu);
    revealMenu();
});

// Add interaction for a pop-up modal (future use)
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        alert(`You selected ${item.querySelector('h3').textContent}`);
    });
});

// contact.js
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Message sent successfully!");
        contactForm.reset();
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

// footer.js
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".footer-links a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});