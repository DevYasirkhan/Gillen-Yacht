// document.addEventListener("DOMContentLoaded", function () {
//   const openArrows = document.querySelectorAll(".gallery-item__arrow");
//   const CloseArrows = document.querySelectorAll(".close-model");

//   openArrows.forEach((arrow) => {
//     arrow.addEventListener("click", function () {
//       const modelid = this.getAttribute("data-model");

//       const modelBox = document.getElementById("model1");

//       modelBox.classList.add("active");
//     });
//   });

//   CloseArrows.forEach((arrow) => {
//     arrow.addEventListener("click", function () {
//       const modelid = this.getAttribute("data-model");
//       const modelBox = document.getElementById("model1");

//       modelBox.classList.remove("active");
//     });
//   });
// });

// // Get all the gallery links that open modals
// const openModalLinks = document.querySelectorAll(".open-model");

// // Get all the close links in the modals
// const closeModalLinks = document.querySelectorAll(".close-model");

// // Loop through all gallery items to attach event listeners for opening modals
// openModalLinks.forEach((link) => {
//   link.addEventListener("click", function (event) {
//     event.preventDefault();
//     const modalClass = link.getAttribute("data-modal");
//     const modal = document.querySelector(`.${modalClass}`);
//     modal.classList.add("active"); // Show the modal
//   });
// });

// // Loop through all modals to attach event listeners for closing modals
// closeModalLinks.forEach((link) => {
//   link.addEventListener("click", function (event) {
//     event.preventDefault();
//     const modalClass = link.getAttribute("data-close");
//     const modal = document.querySelector(`.${modalClass}`);
//     modal.classList.remove("active"); // Hide the modal
//   });
// });

// const menutoggle = document.getElementById("header-menu");

// const headermenubox = document.getElementById("header-menu-box");
// const navLinks = headermenubox.querySelectorAll("a");

// headermenu.addEventListener("click", () => {
//   headermenubox.toggleAttribute("active");
// });

// navLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     headermenubox.classList.remove("active");
//   });
// });
