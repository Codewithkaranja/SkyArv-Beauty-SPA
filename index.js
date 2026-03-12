   (function() {
            // mobile menu toggle
            const menuToggle = document.getElementById('menu-toggle');
            const navLinks = document.getElementById('nav-links');
            if (menuToggle) {
                menuToggle.addEventListener('click', () => {
                    navLinks.classList.toggle('show');
                });
            }

            // testimonial slider
            const slides = document.querySelectorAll('.testimonial-slide');
            const dots = document.querySelectorAll('.dot');
            let current = 0;
            function showSlide(index) {
                if (index < 0) index = slides.length - 1;
                if (index >= slides.length) index = 0;
                slides.forEach(s => s.classList.remove('active'));
                dots.forEach(d => d.classList.remove('active'));
                slides[index].classList.add('active');
                dots[index].classList.add('active');
                current = index;
            }
            dots.forEach((dot, i) => {
                dot.addEventListener('click', () => showSlide(i));
            });
            setInterval(() => showSlide(current + 1), 5000);

            // dynamic year
            document.getElementById('currentYear').textContent = new Date().getFullYear();

            // booking form prevent default (demo)
            document.getElementById('bookingForm').addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you. We will contact you shortly to confirm your appointment.');
            });

            // smooth scroll for nav links
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

            // navbar scroll effect
            let lastScroll = 0;
            const navbar = document.querySelector(".navbar");
            window.addEventListener("scroll", () => {
                let currentScroll = window.pageYOffset;
                if(currentScroll > lastScroll && currentScroll > 120){
                    navbar.classList.add("hide");
                } else {
                    navbar.classList.remove("hide");
                }
                if (currentScroll > 10) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
                lastScroll = currentScroll;
            });

            // intersection observer for fade sections
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