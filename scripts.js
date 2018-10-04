const menuButton = document.querySelector("#nav-button");
const navbar = document.querySelector("#navbar");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");

menuButton.addEventListener("click", function() {
  navbar.classList.toggle("hide");
});

email.innerHTML = "<h3>wimeraw18@gmail.com</h3>";
phone.innerHTML = "<h3>608-960-2211</h3>";
