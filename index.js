AOS.init();

const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

const sidemenu = document.getElementById("sidemenu");
const openButton = document.querySelector(".fa-bars");
const closeButton = document.querySelector(".fa-xmark");
const links = document.querySelectorAll("#sidemenu a");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

function closeMenuOnClick() {
  closemenu();
}

function closeMenuOutsideClick(event) {
  if (!sidemenu.contains(event.target) && event.target !== openButton) {
    closemenu();
  }
}

openButton.addEventListener("click", openmenu);
closeButton.addEventListener("click", closemenu);
links.forEach((link) => link.addEventListener("click", closeMenuOnClick));
document.addEventListener("click", closeMenuOutsideClick);

document.addEventListener("DOMContentLoaded", function () {
  const seeMoreBtn = document.getElementById("see-more-btn");
  const works = document.querySelectorAll(".work");

  for (let i = 3; i < works.length; i++) {
    works[i].style.display = "none";
  }

  seeMoreBtn.addEventListener("click", function (event) {
    event.preventDefault();

    for (let i = 3; i < works.length; i++) {
      works[i].style.display = "block";
    }

    seeMoreBtn.style.display = "none";
  });
});

const expandLinks = document.querySelectorAll(".expand-link");
expandLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const expandableText = this.parentNode.querySelector(".expandable-text");
    expandableText.classList.toggle("expanded");
    this.textContent = expandableText.classList.contains("expanded")
      ? "Show less"
      : "Learn more";
  });
});

window.addEventListener("scroll", parallax);

function parallax() {
  const header = document.getElementById("header");
  let scrollPosition = window.pageYOffset;
  header.style.backgroundPositionY = scrollPosition * 0.7 + "px";
}

setTimeout(() => {
  const animationContainer = document.getElementById("animation-container");
  animationContainer.style.display = "none";
}, 3000);

const animationDelay = 3000;

const nav = document.getElementById("header-info");
const headerText = document.querySelector(".header-text");

nav.classList.add("animate__animated");
headerText.classList.add("animate__animated");

setTimeout(() => {
  if (window.innerWidth >= 900) {
    nav.classList.add("header-info-animate");
    headerText.classList.add("header-info-tex-animate");
  } else {
    nav.classList.remove("header-info-animate");
    headerText.classList.add("header-info-tex-animate");
  }
}, animationDelay);

const animationContainer = document.getElementById("animation-container");

animationContainer.addEventListener("wheel", function (e) {
  e.preventDefault();
});

animationContainer.addEventListener("scroll", function (e) {
  e.preventDefault();
});
