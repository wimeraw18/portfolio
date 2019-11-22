const menuButton = document.querySelector("#nav-button");
const navbar = document.querySelector("#navbar");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const close = document.querySelector(".fa-times");
const bars = document.querySelector(".fa-bars");
const mainHeader = document.querySelector("#main-header");
const hero = document.getElementById("welcome-section");
const styleChangeLocation = hero.offsetHeight - 50;

// SHOW AND HIDE NAVBAR ON BUTTON CLICK
menuButton.addEventListener("click", function () {
  navbar.classList.toggle("hide");
  bars.classList.toggle("hide");
  close.classList.toggle("hide");
  mainHeader.classList.toggle("black-bg");
});

// CHANGE HEADER BG COLOR TO BLACK ON SCROLL
function changeHeaderStyle() {
  if (window.pageYOffset > styleChangeLocation) {
    mainHeader.style.backgroundColor = "black";
  } else {
    mainHeader.style.backgroundColor = "transparent";
  }
}

window.onscroll = function () {
  changeHeaderStyle();
};

// Projects Section
var pardotButton = document.querySelector('.pardot-button');
var pardotProjects = document.querySelector('#pardotProjectTiles');
pardotButton.onclick = function () {
  pardotProjects.style.display = 'block';
  pardotButton.style.transform = 'scale(1.5)';
  sfProjects.style.display = 'none';
  sfButton.style.transform = 'scale(1)';

}

var sfButton = document.querySelector('.salesforce-button');
var sfProjects = document.querySelector('#sfProjectTiles');
sfButton.onclick = function () {
  sfProjects.style.display = 'block';
  sfButton.style.transform = 'scale(1.5)';
  pardotProjects.style.display = 'none';
  pardotButton.style.transform = 'scale(1)';
}