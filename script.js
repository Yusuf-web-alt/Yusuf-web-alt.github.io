const btn = document.getElementById('theme-toggle');

// When the button is clicked...
btn.addEventListener('click', () => {
    // Add or remove the "dark" class from the body
    document.body.classList.toggle('dark');
    
    // Change the button text based on the mode
    if (document.body.classList.contains('dark')) {
        btn.textContent = "☀️ Light Mode";
    } else {
        btn.textContent = "🌙 Dark Mode";
    }
});
