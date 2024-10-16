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

const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");

});

// Get modal elements
const image = document.querySelector('.viewer img'); // If you want to change the image dynamically


// Toggle dropdown menu
document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", viewHandler);
});

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    const elementHold = event.target;

	// get the src attribute from that element and 'split' it on the "-"
    let url = elementHold.src.split("-")[0]

	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    url+="-full.jpeg"

	// insert the viewerTemplate into the top of the body element
    const template = viewerTemplate(url, "big-image")
    document.body.insertAdjacentHTML("afterbegin", template)




	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    const viewer = document.querySelector('.viewer');
    const closeViewerButton = document.querySelector('.close-viewer');
    // Close the viewer when the close button is clicked
    closeViewerButton.onclick = function() {
        viewer.style.display = 'none'; // Hide the viewer
};

}

// Function to open the viewer with an image
function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
};

// Close the viewer when clicking outside of the image (optional)
// viewer.onclick = function(event) {
//     if (event.target === viewer) {
//         viewer.style.display = 'none'; // Hide the viewer
//     }
// };