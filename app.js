// Select hamburger menu, nav items, and nav buttons
const hamburger = document.getElementById("hamburger");
const navItems = document.getElementById("nav-items");
const navButtons = document.getElementById("nav-buttons");

// Toggle visibility of nav items and buttons on click
hamburger.addEventListener("click", () => {
  // Toggle the 'active' class for nav items and buttons
  navItems.classList.toggle("active");
  navButtons.classList.toggle("active");

  // Change the hamburger icon to 'X' or back to the hamburger icon
  if (hamburger.textContent === "☰") {
    // Check the actual character
    hamburger.textContent = "✖"; // Close (X) symbol
  } else {
    hamburger.textContent = "☰"; // Hamburger icon
  }
});
