// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    mobileMenuBtn.addEventListener('click', function() {
        // Toggle menu visibility
        mobileMenu.classList.toggle('hidden');
        
        // Toggle icons
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });
    
    // ============================================
    // SPA PAGE NAVIGATION
    // ============================================
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetPage = this.getAttribute('data-page');
            
            // Hide all pages
            pages.forEach(page => {
                page.classList.add('hidden');
            });
            
            // Show target page
            const targetSection = document.getElementById(`${targetPage}-page`);
            if (targetSection) {
                targetSection.classList.remove('hidden');
            }
            
            // Update active nav link (optional visual feedback)
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
            
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
            
            // Smooth scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
    
    // ============================================
    // PRODUCT "LEARN MORE" BUTTONS
    // ============================================
    const learnMoreBtns = document.querySelectorAll('.learn-more-btn');
    
    learnMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Navigate to contact page when "Learn More" is clicked
            const contactLink = document.querySelector('[data-page="contact"]');
            if (contactLink) {
                contactLink.click();
            }
            
            // Alternative: Show alert with more info
            // alert('For more information about this product, please contact us!');
        });
    });
    
    // ============================================
    // FORM VALIDATION & ENHANCEMENT
    // ============================================
    const contactForm = document.querySelector('form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Basic validation (HTML5 validation will also run)
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                e.preventDefault();
                alert('Please fill in all required fields.');
                return false;
            }
            
            // If using a real backend, you can handle the form submission here
            // For now, let Formspree handle it
        });
    }
    
    // ============================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's a page navigation link (handled above)
            if (this.hasAttribute('data-page')) {
                return;
            }
            
            // Handle other anchor links if any
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // ============================================
    // ANIMATION ON SCROLL (OPTIONAL)
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements with animation class (if any are added)
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ============================================
    // PREVENT EXTERNAL LINK ISSUES
    // ============================================
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        // Ensure external links open in new tab
        if (!link.hasAttribute('target')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
    
    // ============================================
    // CONSOLE LOG FOR DEBUGGING
    // ============================================
    console.log('Chye Kee Beancurd Website Loaded Successfully!');
    console.log('Navigation system active');
    console.log('Mobile menu ready');
    
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Smooth scroll to top function
 * Can be called from anywhere
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Show a specific page programmatically
 * @param {string} pageName - Name of the page (home, about, products, contact)
 */
function showPage(pageName) {
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => {
        page.classList.add('hidden');
    });
    
    const targetSection = document.getElementById(`${pageName}-page`);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        scrollToTop();
    }
}
