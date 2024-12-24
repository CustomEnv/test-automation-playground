// Dynamically load the navbar content
document.addEventListener('DOMContentLoaded', () => {
    const navbarContainer = document.createElement('div');
    navbarContainer.id = 'navbar-container';
    document.body.prepend(navbarContainer); // Add it at the top of <body>

    fetch('mixin/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load navbar');
            }
            return response.text();
        })
        .then(data => {
            navbarContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
        });
});
