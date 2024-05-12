const navLinks = document.querySelectorAll('#navLinks a');

const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function () {
        let currentSection = '';

        sections.forEach(function (section) {
            const sectionTop = section.offsetTop - 100; // Adjusted offset for better detection
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
