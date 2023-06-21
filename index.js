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

let initialBackgroundPositionY = 0;
window.addEventListener("scroll", parallax);

function parallax() {
  let header = document.getElementById("header");
  let scrollPosition = window.pageYOffset;

  if (scrollPosition > initialBackgroundPositionY) {
    // Scrolling down
    header.style.backgroundPositionY =
      (scrollPosition - initialBackgroundPositionY) * 0.7 + "px";
  } else {
    // Scrolling up
    header.style.backgroundPositionY = "0";
  }
}
