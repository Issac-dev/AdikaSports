window.addEventListener('load', function() {
    const loader = document.querySelector('.loader-wrapper');
    
    // Ensure the loader shows for at least 1 second
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1000);
});

window.addEventListener('load', function() {
    // Hide loader when page is fully loaded
    const loader = document.querySelector('.loader-wrapper');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1000);

    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Remove the existing Three.js setup since we're using Spline
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// const renderer = new THREE.WebGLRenderer();
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
        offset: 100
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Add hover animation class
    const cards = document.querySelectorAll('.about-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('animate__animated', 'animate__pulse');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('animate__animated', 'animate__pulse');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        once: false,
        mirror: true,
        offset: 100
    });

    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Active link handler
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });

        // Header scroll effect
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Parallax effect for brand logos
    const brandItems = document.querySelectorAll('.brand-item');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        brandItems.forEach(item => {
            const speed = item.getAttribute('data-speed');
            const yPos = -(scrolled * speed);
            item.style.transform = `translateY(${yPos}px)`;
        });
    });
});

// Add this to your app.js file
document.addEventListener('DOMContentLoaded', function() {
    const brandsTrack = document.querySelector('.brands-track');
    let lastScrollTop = 0;
    let scrollDirection = 'down';
    
    window.addEventListener('scroll', function() {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        const brandsSection = document.querySelector('.brands-section');
        const brandsSectionTop = brandsSection.offsetTop;
        const brandsSectionBottom = brandsSectionTop + brandsSection.offsetHeight;
        
        if (st > lastScrollTop) {
            scrollDirection = 'down';
        } else {
            scrollDirection = 'up';
        }
        
        if (st >= brandsSectionTop && st <= brandsSectionBottom) {
            const scrollPercentage = (st - brandsSectionTop) / (brandsSectionBottom - brandsSectionTop);
            const moveAmount = scrollDirection === 'down' ? 
                -(scrollPercentage * (brandsTrack.offsetWidth - window.innerWidth)) :
                -((1 - scrollPercentage) * (brandsTrack.offsetWidth - window.innerWidth));
                
            brandsTrack.style.transform = `translateX(${moveAmount}px)`;
        }
        
        lastScrollTop = st <= 0 ? 0 : st;
    });
});

// Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navItems = document.querySelector('.nav-items');

    if (mobileNavToggle && navItems) {
        mobileNavToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navItems.classList.toggle('active');
            
            // Toggle icon
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = navItems.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking a nav link
        const navLinks = navItems.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navItems.classList.remove('active');
                document.body.style.overflow = '';
                mobileNavToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
            });
        });
    }
});