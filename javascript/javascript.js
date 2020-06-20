
// SELECTORS
let topBtn = document.querySelector('.scroll');
window.addEventListener('scroll', () => {

  let scrollable = document.documentElement.scrollHeight - window.innerHeight;
  console.log(scrollable);

  let scrolled = window.scrollY;
  console.log(scrolled);
  if (scrolled > 500) {
    topBtn.style.display = "block";
  }
  else
    topBtn.style.display = "none";
});