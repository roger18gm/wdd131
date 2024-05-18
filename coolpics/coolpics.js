const year = document.querySelector("#year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;


const menuButton = document.querySelector(".menu-button");

function toggleMenu() {

    const menuLinks = document.querySelector(".menu-links");
   
    menuLinks.classList.toggle("hide");
    
}

menuButton.addEventListener("click", toggleMenu);

// Function to generate the HTML template for the viewer
function viewerTemplate(pic, alt) {
    return `<div class="image-viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
    </div>`;
  }
  
  // Function to handle the view action
  function viewHandler(event) {
    // Create a variable to hold the element that was clicked on
    const clickedElement = event.target;
  
    // Check if the clicked element is an image inside the gallery
    if (clickedElement.tagName.toLowerCase() === 'img') {
      // Get the src attribute from the clicked element and split it on the "-"
      const src = clickedElement.getAttribute('src');
      const srcParts = src.split('-');
  
      // Construct the new image file name by adding "-full.jpeg" to the first part of the array
      const newSrc = `${srcParts[0]}-full.jpeg`;
  
      // Construct the alt attribute from the clicked element
      const alt = clickedElement.getAttribute('alt');
  
      // Insert the viewerTemplate into the top of the body element
      document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newSrc, alt));
  
      // Add a listener to the close button (X) that calls the closeViewer function when clicked
      const closeButton = document.querySelector('.close-viewer');
      closeButton.addEventListener('click', closeViewer);
    }
  }
  
  // Function to close the viewer
  function closeViewer() {
    // Remove the viewer div from the DOM
    const viewer = document.querySelector('.image-viewer');
    if (viewer) {
      viewer.remove();
    }
  }
  
  // Add an event listener to the .gallery section
  const gallery = document.querySelector('.gallery');
  if (gallery) {
    gallery.addEventListener('click', viewHandler);
  }
  