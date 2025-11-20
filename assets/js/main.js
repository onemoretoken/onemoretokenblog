// Dark mode is always on - no toggle functionality needed
(function() {
  const body = document.body;

  // Always set dark mode
  localStorage.setItem("theme", "dark");
  body.setAttribute("data-theme", "dark");

  // Hide toggle button if it exists
  // const modeToggle = document.getElementById("mode");
  // if (modeToggle) {
  //   modeToggle.style.display = "none";
  // }
})();
