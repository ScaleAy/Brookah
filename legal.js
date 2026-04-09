// ======================================================
// LEGAL MODALS (IMPRESSUM & DATENSCHUTZ)
// ======================================================
function openImpressum() {
    document.getElementById('impressum-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function openDatenschutz() {
    document.getElementById('datenschutz-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLegalModal(id) {
    document.getElementById(id).classList.remove('active');
    document.body.style.overflow = '';
}

// ESC key to close any legal modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.legal-modal-overlay.active').forEach(m => {
            m.classList.remove('active');
        });
        document.body.style.overflow = '';
    }
});

// Scripts are at end of <body>, DOM is already ready — attach form listener directly
window.submitContactForm = function() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const subject = document.getElementById('contact-subject').value.trim() || '—';
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
        console.warn('Contact form: missing required fields');
        return;
    }

    try {
        const existing = localStorage.getItem('brookah_contact_messages');
        const messages = existing ? JSON.parse(existing) : [];
        messages.unshift({
            name,
            email,
            subject,
            message,
            date: new Date().toLocaleString('de-DE')
        });
        localStorage.setItem('brookah_contact_messages', JSON.stringify(messages));
        console.log('Contact form: message saved from', email);

        contactForm.reset();
        const success = document.getElementById('contact-success');
        if (success) {
            success.style.display = 'block';
            setTimeout(() => {
                success.style.display = 'none';
                closeLegalModal('impressum-modal');
            }, 2000);
        }
    } catch(err) {
        console.error('Contact form save error:', err);
    }
};
