const menuButton = document.querySelector("#nav-button");
const navbar = document.querySelector("#navbar");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const icon = document.querySelector("button");
const close = document.querySelector(".fa-times");
const bars = document.querySelector(".fa-bars");

menuButton.addEventListener("click", function() {
  navbar.classList.toggle("hide");
  bars.classList.toggle("hide");
  close.classList.toggle("hide");
});

email.innerHTML = "<h3>wimeraw18@gmail.com</h3>";
phone.innerHTML = "<h3>608-960-2211</h3>";
