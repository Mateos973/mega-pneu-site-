// Alerte sympa sur CTA
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => alert('Appel en cours vers MEGA PNEU – Roulez bien avec notre force jaune !'));
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Effet glowing sur logo au hover (inspiré du "M" lumineux)
document.querySelector('.navbar-brand img').addEventListener('mouseenter', function() {
    this.style.filter = 'drop-shadow(0 0 10px #FFC107)';
});
document.querySelector('.navbar-brand img').addEventListener('mouseleave', function() {
    this.style.filter = 'drop-shadow(0 0 5px #FFC107)';
});

// FALLBACK MOBILE - Force le défilement des logos si CSS ne marche pas
function initLogoScroll() {
    const logoSlides = document.querySelectorAll('.logos-slide');
    
    // Détection mobile
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        logoSlides.forEach(slide => {
            // Vérifier si l'animation CSS fonctionne
            const computedStyle = window.getComputedStyle(slide);
            const animationName = computedStyle.animationName;
            
            // Si pas d'animation CSS, forcer avec JavaScript
            if (animationName === 'none' || !animationName) {
                let position = 0;
                const speed = 0.5; // Vitesse de défilement
                
                function scroll() {
                    position -= speed;
                    const slideWidth = slide.scrollWidth / 2; // Largeur d'une série de logos
                    
                    if (position <= -slideWidth) {
                        position = 0; // Reset pour défilement infini
                    }
                    
                    slide.style.transform = `translateX(${position}px)`;
                    requestAnimationFrame(scroll);
                }
                
                scroll(); // Démarrer l'animation JS
            }
        });
    }
}

// Démarrer quand la page est chargée
document.addEventListener('DOMContentLoaded', initLogoScroll);

// Redémarrer si l'écran change de taille
window.addEventListener('resize', initLogoScroll);