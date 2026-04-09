// Brookah Lounge Admin Logic
const ADMIN_USER = "brookah";
const ADMIN_PASS = "bro123";

// 1. Initial State Check
function adminInit() {
    const isLoggedIn = sessionStorage.getItem('brookah-admin-auth');
    if (isLoggedIn === 'true') {
        showDashboard();
        loadSubscribers();
        loadContactMessages();
    } else {
        showLogin();
    }
    loadSettings();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', adminInit);
} else {
    adminInit();
}

// 2. Authentication
function handleLogin() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const error = document.getElementById('login-error');

    if (user === ADMIN_USER && pass === ADMIN_PASS) {
        sessionStorage.setItem('brookah-admin-auth', 'true');
        error.style.display = 'none';
        showDashboard();
    } else {
        error.style.display = 'block';
        error.innerText = "Ungültige Anmeldedaten.";
    }
}

function handleLogout() {
    sessionStorage.removeItem('brookah-admin-auth');
    location.reload();
}

function showLogin() {
    document.getElementById('login-view').style.display = 'block';
    document.getElementById('dashboard-view').style.display = 'none';
}

function showDashboard() {
    document.getElementById('login-view').style.display = 'none';
    document.getElementById('dashboard-view').style.display = 'block';
    loadSubscribers();
    loadContactMessages();
}

// 3. Management Logic
function saveSettings() {
    const isOnline = document.getElementById('status-toggle').checked;
    const message = document.getElementById('vacation-msg').value;
    const date = document.getElementById('reopen-date').value;
    
    const settings = {
        isOnline: isOnline,
        message: message,
        reopenDate: date,
        lastUpdated: new Date().getTime()
    };
    
    // Save to localStorage (persistent in this browser)
    localStorage.setItem('brookah-site-settings', JSON.stringify(settings));
    
    // Visual Feedback
    const indicator = document.getElementById('save-indicator');
    indicator.classList.add('show');
    setTimeout(() => indicator.classList.remove('show'), 3000);
}

function loadSettings() {
    const data = localStorage.getItem('brookah-site-settings');
    const toggle = document.getElementById('status-toggle');
    const statusLabel = document.getElementById('status-label');
    if (data) {
        let settings = {};
        try {
            settings = JSON.parse(data);
        } catch(e) {
            console.error("Corrupted settings data found, ignoring.");
        }
        // Default to true (online) if isOnline is not explicitly set
        const isOnline = settings.isOnline !== false;
        if (toggle) toggle.checked = isOnline;
        if (document.getElementById('vacation-msg')) document.getElementById('vacation-msg').value = settings.message || "";
        if (document.getElementById('reopen-date')) document.getElementById('reopen-date').value = settings.reopenDate || "";
        updateStatusLabel(isOnline);
    } else {
        // No settings saved yet: default to online
        if (toggle) toggle.checked = true;
        updateStatusLabel(true);
    }
}

// 4. Newsletter Management
function loadSubscribers() {
    const listBody = document.getElementById('subscriber-list-body');
    if (!listBody) return;

    let subscribers = [];
    try {
        subscribers = JSON.parse(localStorage.getItem('brookah-subscribers') || '[]');
    } catch (e) {
        console.error("Corrupted subscriber data found, resetting.", e);
        localStorage.removeItem('brookah-subscribers');
    }
    listBody.innerHTML = '';

    subscribers.forEach((sub, index) => {
        const row = document.createElement('tr');
        row.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
        row.innerHTML = `
            <td style="padding: 12px 20px;">${sub.name || '-'}</td>
            <td style="padding: 12px 20px; color: #fff;">${sub.email}</td>
            <td style="padding: 12px 20px;">${sub.birthday || '-'}</td>
            <td style="padding: 12px 20px; color: #888; font-size: 0.8rem;">${sub.date}</td>
            <td style="padding: 12px 20px; text-align: right;">
                <button onclick="deleteSubscriber(${index})" style="background: rgba(255,0,0,0.1); color: #ff4444; border: 1px solid rgba(255,0,0,0.2); padding: 5px 12px; border-radius: 6px; font-size: 0.75rem; cursor: pointer; transition: all 0.2s;">Löschen</button>
            </td>
        `;
        listBody.appendChild(row);
    });
}

window.deleteSubscriber = function(index) {
    showConfirmModal('Möchtest du diesen Abonnenten wirklich löschen?', () => {
        let subscribers = [];
        try {
            subscribers = JSON.parse(localStorage.getItem('brookah-subscribers') || '[]');
        } catch (e) {}
        subscribers.splice(index, 1);
        localStorage.setItem('brookah-subscribers', JSON.stringify(subscribers));
        loadSubscribers();
    });
}

function downloadSubscribers() {
    let subscribers = [];
    try {
        subscribers = JSON.parse(localStorage.getItem('brookah-subscribers') || '[]');
    } catch (e) {}
    if (subscribers.length === 0) return alert('Keine Abonnenten zum Exportieren.');

    let csv = 'Name;Email;Geburtstag;Anmeldedatum\n';
    subscribers.forEach(sub => {
        csv += `${sub.name || ''};${sub.email};${sub.birthday || ''};${sub.date}\n`;
    });
    
    // Create Blob and Trigger Download
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'brookah_newsletter_abonnenten.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// UI Helpers
function updateStatusLabel(isOnline) {
    const label = document.getElementById('status-label');
    if (isOnline) {
        label.innerText = "ONLINE";
        label.style.color = "#2ecc71";
    } else {
        label.innerText = "OFFLINE (URLAUB)";
        label.style.color = "#ff4757";
    }
}

const toggle = document.getElementById('status-toggle');
if (toggle) {
    toggle.addEventListener('change', (e) => {
        updateStatusLabel(e.target.checked);
    });
}

// 5. Contact Messages
function loadContactMessages() {
    const container = document.getElementById('contact-messages-list');
    if (!container) return;

    let messages = [];
    try {
        messages = JSON.parse(localStorage.getItem('brookah_contact_messages') || '[]');
    } catch(e) {
        console.error("Corrupted contact data found, resetting.");
        localStorage.removeItem('brookah_contact_messages');
    }
    
    if (messages.length === 0) {
        container.innerHTML = '<p style="color:rgba(255,255,255,0.3);font-size:0.9rem;">Noch keine Nachrichten.</p>';
        return;
    }

    container.innerHTML = messages.map((msg, i) => `
        <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.06);border-radius:12px;padding:18px 20px;">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px;flex-wrap:wrap;gap:8px;">
                <div>
                    <span style="font-weight:700;color:#fff;">${msg.name}</span>
                    <span style="color:rgba(255,255,255,0.4);font-size:0.85rem;margin-left:10px;">${msg.email}</span>
                </div>
                <span style="color:rgba(255,255,255,0.3);font-size:0.8rem;">${msg.date}</span>
            </div>
            ${msg.subject !== '—' ? `<div style="color:rgba(255,255,255,0.6);font-size:0.85rem;margin-bottom:8px;">Betreff: ${msg.subject}</div>` : ''}
            <p style="color:rgba(255,255,255,0.7);font-size:0.9rem;line-height:1.6;margin:0 0 12px;">${msg.message}</p>
            <button onclick="deleteContactMessage(${i})" style="background:rgba(255,0,0,0.08);color:#ff4444;border:1px solid rgba(255,0,0,0.15);padding:5px 14px;border-radius:6px;font-size:0.75rem;cursor:pointer;">Löschen</button>
        </div>
    `).join('');
}

window.deleteContactMessage = function(index) {
    showConfirmModal('Diese Nachricht unwiderruflich löschen?', () => {
        let messages = [];
        try {
            messages = JSON.parse(localStorage.getItem('brookah_contact_messages') || '[]');
        } catch (e) {}
        messages.splice(index, 1);
        localStorage.setItem('brookah_contact_messages', JSON.stringify(messages));
        loadContactMessages();
    });
};

window.clearContactMessages = function() {
    showConfirmModal('Alle Kontaktnachrichten wirklich löschen?', () => {
        localStorage.removeItem('brookah_contact_messages');
        loadContactMessages();
    });
};

/**
 * Custom Confirmation Logic
 */
let confirmCallback = null;

window.showConfirmModal = function(message, onConfirm) {
    const modal = document.getElementById('confirm-modal');
    const msgEl = document.getElementById('confirm-msg');
    const confirmBtn = document.getElementById('confirm-yes-btn');
    
    if (msgEl) msgEl.innerText = message;
    confirmCallback = onConfirm;
    
    // One-time listener for the confirm button
    confirmBtn.onclick = () => {
        if (confirmCallback) confirmCallback();
        closeConfirmModal();
    };
    
    modal.classList.add('active');
};

window.closeConfirmModal = function() {
    const modal = document.getElementById('confirm-modal');
    modal.classList.remove('active');
    confirmCallback = null;
};

