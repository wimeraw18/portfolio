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
var sfButton = document.querySelector('.salesforce-button');
var sfProjects = document.querySelector('#sfProjectTiles');

// var opacity = 0;
// var intervalId = 0;
// function fadeOut() {
//   intervalId = setInterval(hide(), 20);
// }
// function hide() {
//   opacity = Number(window.getComputedStyle(pardotProjects).getPropertyValue('opactiy'));
//   if (opacity > 0) {
//     opacity = opacity - 0.1;
//     pardotProjects.style.opacity = opacity;
//   } else {
//     clearInterval(intervalId);
//   }
// }

pardotButton.addEventListener('click', function () {
  pardotProjects.classList.replace('hide-projects', 'show-projects');
  pardotButton.classList.add('active');
  sfProjects.classList.replace('show-projects', 'hide-projects');
  sfButton.classList.remove('active')

});

sfButton.addEventListener('click', function () {
  //sfProjects.classList.add('show-projects');
  pardotProjects.classList.replace('show-projects', 'hide-projects');
  pardotButton.classList.remove('active');
  sfProjects.classList.replace('hide-projects', 'show-projects');
  sfButton.classList.add('active');
});

// pardotButton.onclick = function () {
//   pardotProjects.style.display = 'block';
//   pardotButton.style.transform = 'scale(1.5)';
//   sfProjects.style.display = 'none';
//   sfButton.style.transform = 'scale(1)';

// }


// sfButton.onclick = function () {
//   sfProjects.style.display = 'block';
//   sfButton.style.transform = 'scale(1.5)';
//   pardotProjects.style.display = 'none';
//   pardotButton.style.transform = 'scale(1)';
// }