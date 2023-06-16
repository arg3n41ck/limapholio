var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

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

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

document.addEventListener("DOMContentLoaded", function () {
  const seeMoreBtn = document.getElementById("see-more-btn");
  const works = document.querySelectorAll(".work");

  // Скрыть все работы, кроме первых трех
  for (let i = 3; i < works.length; i++) {
    works[i].style.display = "none";
  }

  // Обработчик события для кнопки "See more"
  seeMoreBtn.addEventListener("click", function (event) {
    event.preventDefault();

    // Показать остальные работы
    for (let i = 3; i < works.length; i++) {
      works[i].style.display = "block";
    }

    // Скрыть кнопку "See more"
    seeMoreBtn.style.display = "none";
  });
});
