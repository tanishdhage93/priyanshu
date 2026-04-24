// Preloader functionality
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1000); // Show preloader for at least 1 second
    }
});

// Smooth scrolling for anchor links (if needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Handle inquiry form submission
function submitInquiry(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const grade = form.grade.value;
    const message = form.message.value;
    
    // Simple validation
    if (!name || !email || !grade) {
        showMessage('Please fill in all required fields.', 'error');
        return;
    }
    
    // In a real application, you would send this data to a server
    // For now, we'll just show a success message
    console.log('Inquiry submitted:', { name, email, grade, message });
    
    showMessage('Thank you for your inquiry! We will contact you within 24 hours.', 'success');
    form.reset();
}

function showMessage(text, type) {
    const messageDiv = document.getElementById('inquiryMessage');
    messageDiv.textContent = text;
    messageDiv.className = `message ${type}`;
    messageDiv.style.display = 'block';
    
    // Hide message after 5 seconds
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
}

// If there's a form, it would be handled, but since contact is on home without form, maybe add later.

// For gallery, perhaps lightbox, but keep simple.

// This script is minimal since navigation is via page links.