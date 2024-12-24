// Dynamically fetch and insert footer content
const footer = document.createElement('footer');
footer.id = 'footer';

fetch('mixin/footer.html')
    .then(response => response.text())
    .then(data => {
        footer.innerHTML = data;
        document.body.appendChild(footer);
        adjustFooterPosition();
    });

// Function to adjust footer position based on page content
function adjustFooterPosition() {
    const body = document.body;
    const html = document.documentElement;

    // Check if the body content exceeds the viewport height
    if (html.scrollHeight <= html.clientHeight) {
        // If the content fits in the viewport, stick the footer to the bottom
        const footer = document.getElementById('footer');
        footer.style.position = 'absolute';
        footer.style.bottom = '0';
        footer.style.width = '100%';
    } else {
        // If content overflows, place the footer at the end of the content
        const footer = document.getElementById('footer');
        footer.style.position = 'relative';
        footer.style.width = '100%';
    }
}

// Ensure that the footer position is adjusted when the window is resized
window.addEventListener('resize', adjustFooterPosition);
