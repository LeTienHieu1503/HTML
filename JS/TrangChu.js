document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const dropbtn = dropdown.querySelector(".dropbtn");
    const dropdownContent = dropdown.querySelector(".dropdown-content");

    dropbtn.addEventListener("click", (event) => {
      event.stopPropagation();
      closeAllDropdowns();
      dropdownContent.classList.toggle("show");
    });
  });

  // Close the dropdown menu if the user clicks outside of ita
  window.onclick = function () {
    closeAllDropdowns();
  };

  function closeAllDropdowns() {
    const dropdownContents = document.querySelectorAll(".dropdown-content");
    dropdownContents.forEach((dropdownContent) => {
      dropdownContent.classList.remove("show");
    });
  }
});
