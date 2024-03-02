document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior

            const targetId = this.getAttribute('href'); // Get the href attribute value

            // Scroll to the target section smoothly
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
