// document.getElementById('menu').addEventListener('click', function() {
//     alert('Menu button clicked!');
// })

// Toggle dropdown menu
document.querySelectorAll('.nav-links > li > a').forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevent the default action (e.g., following the link)
        event.preventDefault();
        
        // Toggle the dropdown menu
        const dropdown = this.nextElementSibling; // Get the next sibling (dropdown)
        if (dropdown) {
            dropdown.classList.toggle('show'); // Add or remove 'show' class
        }
    });
});

// Optional: Close the dropdown if clicking outside of it
document.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target) && !dropdown.previousElementSibling.contains(event.target)) {
            dropdown.classList.remove('show'); // Close dropdown
        }
    });
});