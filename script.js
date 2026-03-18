const message = "Hi, I'm Yusuf.";
let i = 0;

function typeWriter() {
    if (i < message.length) {
        document.getElementById("typewriter").innerHTML += message.charAt(i);
        i++;
        // 120ms is a nice, natural typing speed
        setTimeout(typeWriter, 120);
    }
}

// Tells the browser to start the function as soon as the page loads
window.onload = typeWriter;
