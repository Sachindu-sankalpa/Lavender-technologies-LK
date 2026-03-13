document.addEventListener('DOMContentLoaded', () => {

    // --- Custom Cursor Glow ---
    const cursor = document.querySelector('.cursor-glow');

    if (cursor && window.innerWidth > 860) {
        document.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            });
        });

        // Add hover effect on interactive elements
        const iteractives = document.querySelectorAll('a, button, .glass-card');
        iteractives.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.width = '200px';
                cursor.style.height = '200px';
                cursor.style.background = 'radial-gradient(circle, rgba(138,43,226,0.6) 0%, transparent 70%)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.width = '400px';
                cursor.style.height = '400px';
                cursor.style.background = 'radial-gradient(circle, rgba(138,43,226,0.4) 0%, transparent 60%)';
            });
        });
    }

    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            mobileBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                mobileBtn.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // --- Intersection Observer for Scroll Animations ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // trigger when 15% visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once animated
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-up, .zoom-in');
    animatedElements.forEach(el => observer.observe(el));

});
