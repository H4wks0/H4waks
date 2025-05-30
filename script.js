// Initialize Particles.js
document.addEventListener('DOMContentLoaded', function() {
    // Particles.js configuration
    particlesJS('particles-bg', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#0f0" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#0f0",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true
            }
        },
        retina_detect: true
    });
    
    // PWA Installation
    let deferredPrompt;
    const installButton = document.getElementById('installPWA');
    
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        installButton.style.display = 'block';
    });
    
    installButton.addEventListener('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                installButton.style.display = 'none';
            }
            deferredPrompt = null;
        }
    });
    
    window.addEventListener('appinstalled', () => {
        installButton.style.display = 'none';
        deferredPrompt = null;
    });
    
    // Form validation
    const contactForm = document.getElementById('secure-contact');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const captchaValue = document.getElementById('captcha-value').textContent;
            const userInput = document.getElementById('captcha').value;
            
            if (parseInt(userInput) === parseInt(captchaValue) + 5) {
                // Form is valid
                alert('Message sent securely!');
                contactForm.reset();
                
                // Generate new CAPTCHA
                const newValue = Math.floor(Math.random() * 10);
                document.getElementById('captcha-value').textContent = newValue;
                document.getElementById('captcha').value = '';
            } else {
                alert('CAPTCHA verification failed. Please try again.');
                document.getElementById('captcha').value = '';
            }
        });
    }
    
    // Terminal cursor animation
    const cursor = document.querySelector('.terminal-cursor');
    if (cursor) {
        setInterval(() => {
            cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
        }, 500);
    }
});
