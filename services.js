 (function() {
            // mobile menu toggle
            const menuToggle = document.getElementById('menu-toggle');
            const navLinks = document.getElementById('nav-links');
            if (menuToggle) {
                menuToggle.addEventListener('click', () => {
                    navLinks.classList.toggle('show');
                });
            }

            // current year
            document.getElementById('currentYear').textContent = new Date().getFullYear();

            // smooth scroll for nav links (internal)
            const links = document.querySelectorAll('.nav-links a[href^="#"]');
            links.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                    if (navLinks.classList.contains('show')) navLinks.classList.remove('show');
                });
            });

            // Intersection Observer for fade sections
            const faders = document.querySelectorAll('.fade-section');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.15, rootMargin: '0px' });
            faders.forEach(el => observer.observe(el));
        })();