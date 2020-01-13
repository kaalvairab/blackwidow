function menuOpen() {
  document.getElementById("menuContent").style.display = "block";
  document.getElementById("menu").style.display = "none";
  // document.getElementById("menuContent").classList.toggle("show");
}

function menuClose() {
  document.getElementById("menuContent").style.display = "none";
  document.getElementById("menu").style.display = "block";
}

// window.onclick = function(e) {
//   if (!e.target.matches(".menu-close")) {
//     var myDropdown = document.getElementById("menuContent");
//     if (myDropdown.classList.contains("show")) {
//       myDropdown.classList.remove("show");
//     }
//   }
// };
