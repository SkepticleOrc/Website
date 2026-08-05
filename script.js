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

// Prevents accidental multi-touch pinch zooming from breaking the layout
//document.addEventListener(
  //"touchstart",
  //function (event) {
   // if (event.touches.length > 1) {
     // event.preventDefault();
   // }
 // },
//  { passive: false },
//);

// Prevents double-tap zooming which can also trigger layout skewing
//let lastTouchEnd = 0;
//document.addEventListener(
  //"touchend",
  //function (event) {
    //const now = new Date().getTime();
    //if (now - lastTouchEnd <= 300) {
      //event.preventDefault();
    //}
    //lastTouchEnd = now;
  //},
  //{ passive: false },
//);
