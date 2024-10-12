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
// document.getElementById("menu-button").addEventListener('click', function(event) {
//     const dropdowns = document.querySelectorAll('.dropdown');
//     dropdowns.forEach(dropdown => {
//         if (!dropdown.contains(event.target) && !dropdown.previousElementSibling.contains(event.target)) {
//             dropdown.classList.remove('show'); // Close dropdown
//         }
//     });
// });
// const menuButton = document.querySelector(".menu-button");
// function toggleMenu() {
//   const menu = document.querySelector(".menu");
//   let change = false
//   if (!change){
//     change = true
//     menu.classList.toggle("hide");
//   }
//   else {
//     change = false
//     menu.classList.toggle("hide");
//   }
// }

// menuButton.addEventListener("click", toggleMenu);

// const menuButton = document.querySelector(".menu-button");
// function toggleMenu() {
//   const menu = document.querySelector(".menu");
//   menu.classList.toggle("hide");
// }

// menuButton.addEventListener("click", toggleMenu);

const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");

});

// Get modal elements
const viewer = document.querySelector('.viewer');
const closeViewerButton = document.querySelector('.close-viewer');
const image = document.querySelector('.viewer img'); // If you want to change the image dynamically

// Function to open the viewer with an image
function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
};

// Close the viewer when the close button is clicked
closeViewerButton.onclick = function() {
    viewer.style.display = 'none'; // Hide the viewer
};

// Close the viewer when clicking outside of the image (optional)
viewer.onclick = function(event) {
    if (event.target === viewer) {
        viewer.style.display = 'none'; // Hide the viewer
    }
};