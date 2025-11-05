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