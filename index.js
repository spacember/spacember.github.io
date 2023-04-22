"use strict";

function toggleNavbar() {
  const navbarItems = document.getElementById("navbarItems");
  navbarItems.style.display === "flex"
    ? (navbarItems.style.display = "none")
    : (navbarItems.style.display = "flex");
}

function viewProjects() {
  location.href = "projects.html";
}
