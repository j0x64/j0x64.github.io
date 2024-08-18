document.querySelectorAll('.animated-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent immediate navigation
        const href = this.parentElement.getAttribute('href'); // Get the target link

        // Create and append the overlay element
        const overlay = document.createElement('div');
        overlay.className = 'transition-overlay';
        document.body.appendChild(overlay);

        // Trigger the animation
        requestAnimationFrame(() => {
            overlay.classList.add('slide-in');
        });

        // Wait for the transition to complete, then navigate
        setTimeout(() => {
            window.location.href = href;
        }, 500); // Ensure this matches the CSS transition duration
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Hide the loading screen after the page is fully loaded
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500); // Matches the transition time
    }, 1000); // Optional delay to ensure the page is loaded
});
