// Handle contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Here you would typically send the data to a server
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Handle donation amount selection
    const amountButtons = document.querySelectorAll('.amount-btn');
    amountButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            amountButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            if (this.dataset.amount === 'custom') {
                const amount = prompt('Enter custom amount:');
                if (amount) {
                    this.textContent = '$' + amount;
                }
            }
        });
    });

    // Handle donation submission
    const donateButtons = document.querySelectorAll('.donate-now-btn');
    donateButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.donation-card');
            const activeAmount = card.querySelector('.amount-btn.active');
            
            if (!activeAmount) {
                alert('Please select an amount first');
                return;
            }

            // Here you would typically integrate with a payment processor
            alert('Thank you for your generous donation!');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect to header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.background = '#fff';
        }
    });
});
