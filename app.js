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
    // CLOSE MOBILE MENU ON LINK CLICK
    // ============================================
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Close mobile menu
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        });
    });
    
    // ============================================
    // SMOOTH SCROLL BEHAVIOR (already handled by CSS scroll-behavior: smooth)
    // ============================================
    
    // ============================================
    // PRODUCT "LEARN MORE" BUTTONS
    // ============================================
    const learnMoreBtns = document.querySelectorAll('.learn-more-btn');
    
    learnMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Scroll to contact page when "Learn More" is clicked
            document.getElementById('contact-page').scrollIntoView({ behavior: 'smooth' });
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
    // SMOOTH SCROLL FOR ANCHOR LINKS (Already handled by CSS)
    // Browser native smooth scroll is enabled via CSS scroll-behavior
    // ============================================
    
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
