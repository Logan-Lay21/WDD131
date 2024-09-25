document.addEventListener('DOMContentLoaded', function() {
    const themeSelector = document.getElementById('mode-select');
    const logo = document.querySelector('.footer img');

    themeSelector.addEventListener('change', changeTheme);

    function changeTheme() {
        const selectedTheme = themeSelector.value;

        if (selectedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            logo.src = 'byui-logo-white.png';
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            logo.src = 'byui-logo.webp';
        }
    }
    // // Add an event listener to listen for changes in the theme selector
    // themeSelector.addEventListener('change', () => {
    //     const selectedTheme = themeSelector.value; // Get the current value of the dropdown

    //     // Apply the selected theme and save it to localStorage
    //     applyTheme(selectedTheme);
    //     localStorage.setItem('theme', selectedTheme); // Save the selected theme to localStorage
    // });

    // // On page load, check for saved theme in localStorage
    // window.onload = function() {
    //     const savedTheme = localStorage.getItem('theme'); // Retrieve the saved theme from localStorage
        
    //     if (savedTheme) {
    //         themeSelector.value = savedTheme; // Set the dropdown to the saved value
    //         applyTheme(savedTheme); // Apply the saved theme
    //     } else {
    //         applyTheme('light'); // Default to light theme if none is saved
    //     }
    // };
});
