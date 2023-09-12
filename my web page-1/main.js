const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    // Remove active class from all links
    menuLinks.forEach(link => link.classList.remove('active'));

    // Add active class to the clicked link
    link.classList.add('active');

    // Get the target section's ID from the link's href attribute
    const targetId = link.getAttribute('href').substring(1); // Remove the "#" symbol

    // Find the target section by its ID
    const targetSection = document.getElementById(targetId);

    // Scroll to the target section with smooth behavior
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

//background images script start
const images = [
  'https://images4.alphacoders.com/710/thumbbig-710886.webp',
  'https://images8.alphacoders.com/487/thumbbig-487817.webp',
  'https://images8.alphacoders.com/362/thumbbig-362832.webp',
  'https://images4.alphacoders.com/155/thumbbig-155636.webp',
  'https://images3.alphacoders.com/213/thumbbig-213497.webp'
];
let currentImageIndex = 0;

function changeBackground() {
  document.body.style.backgroundImage = `url('${images[currentImageIndex]}')`;
  currentImageIndex = (currentImageIndex + 1) % images.length;
}

changeBackground();

// Set an interval to change the background every 5 seconds (5000 milliseconds)
setInterval(changeBackground, 5000);
const contentDiv = document.getElementById("content");
const viewMoreButton = document.getElementById("view-more-button");
let expanded = false;


// view more button script....
document.addEventListener("DOMContentLoaded", function() {
  const viewMoreButton = document.querySelector(".view-more-button");
  const hiddenBoxes = document.querySelectorAll(".hidden-box");
  
  viewMoreButton.addEventListener("click", function() {
    hiddenBoxes.forEach(function(box) {
      box.classList.toggle("hidden-box");
    });
    
    viewMoreButton.style.display = "none"; // Hide the button after revealing all boxes
  });
});
