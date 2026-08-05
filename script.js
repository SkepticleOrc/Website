// Apply saved theme on page load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

const darkToggle = document.getElementById("darkToggler");

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Save the current theme
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

const hamburger = document.querySelector(".hamburger");
const navi = document.querySelector(".navi");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navi.classList.toggle("active");
});