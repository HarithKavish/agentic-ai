document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add hover effects for application cards
    const applicationCards = document.querySelectorAll('.application-card');
    applicationCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });

    // Add animation for section headings
    const sectionHeaders = document.querySelectorAll('.content-section h2');
    sectionHeaders.forEach(header => {
        header.style.opacity = '0';
        header.style.transform = 'translateY(20px)';
        header.style.transition = `opacity ${var(--transition-speed)}s ease, transform ${var(--transition-speed)}s ease`;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    header.style.opacity = '1';
                    header.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        observer.observe(header);
    });

    // Add a subtle animation for the hero tagline
    const tagline = document.querySelector('.tagline');
    if (tagline) {
        tagline.style.opacity = '0';
        tagline.style.transform = 'translateX(20px)';
        tagline.style.transition = `opacity ${var(--transition-speed)}s ease, transform ${var(--transition-speed)}s ease`;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    tagline.style.opacity = '1';
                    tagline.style.transform = 'translateX(0)';
                }
            });
        }, { threshold: 0.1 });

        observer.observe(tagline);
    }
});