"use strict";

function toggleNavbar() {
  const navbarItems = document.getElementById("navbarItems");
  navbarItems.style.display === "block"
    ? (navbarItems.style.display = "none")
    : (navbarItems.style.display = "block");
}

function viewProjects() {
  window.open("projects.html");
}

let currentSection = "navbar";

function goToNextSection() {
  const buttonArrowUp = document.getElementById("buttonArrowUp");
  const buttonArrowDown = document.getElementById("buttonArrowDown");

  buttonArrowUp.style.display = "block";

  if (currentSection === "navbar") {
    currentSection = "portrait";
    document.getElementById("portrait").scrollIntoView({ behavior: "smooth" });
  } else if (currentSection === "portrait") {
    currentSection = "skills";
    document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
    buttonArrowDown.style.display = "none";
  }
}

function goTop() {
  const buttonArrowUp = document.getElementById("buttonArrowUp");
  const buttonArrowDown = document.getElementById("buttonArrowDown");

  buttonArrowDown.style.display = "block";
  buttonArrowDown.value = "navbar";

  if (currentSection !== "navbar") {
    currentSection = "navbar"
    document.getElementById("navbar").scrollIntoView({ behavior: "smooth" });
    buttonArrowUp.style.display = "none";
  }
}
