
  // Hamburger Menu
  
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

//Filtering 

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filters button");
  const projects = document.querySelectorAll(".projects .project");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      projects.forEach(project => {
        const categories = project.getAttribute("data-category").split(" ");

        if (filter === "all" || categories.includes(filter)) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    });
  });
});