// --- Typewriter Logic ---
const textElement = document.getElementById('typewriter');
const message = "Hi, I'm Yusuf.";
let charIndex = 0;

function typeWriter() {
    if (charIndex < message.length) {
        textElement.innerHTML += message.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 120); 
    }
}

// --- Theme Toggle Logic ---
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    
    if (document.body.classList.contains('dark')) {
        themeBtn.textContent = "☀️ Light";
    } else {
        themeBtn.textContent = "🌙 Dark";
    }
});

// Run typewriter when page loads
window.onload = typeWriter;
