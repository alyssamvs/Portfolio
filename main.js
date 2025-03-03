
  document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const closeMenu = document.querySelector(".close-menu");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    //Show dropdown menu when hamburger is clicked
    hamburger.addEventListener("click", () => {
      dropdownMenu.classList.add("show");
    });

    // Hide dropdown menu when close button is clicked
    closeMenu.addEventListener("click", () => {
      dropdownMenu.classList.remove("show");
    });

    //Close the menu when a link is clicked
    dropdownMenu.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        dropdownMenu.classList.remove("show");
      }
    });
  });
