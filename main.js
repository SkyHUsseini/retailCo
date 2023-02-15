"use strict";
"use strict";
const navBtn = document.querySelector(".nav-toggle-btn");
const navToggle = document.querySelector(".nav-wrapper");
const card = document.querySelectorAll(".product-card-wrapper ");

navBtn.addEventListener("click", function () {
  navToggle.toggleAttribute("visible");
});
