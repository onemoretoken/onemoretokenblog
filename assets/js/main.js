// Dark mode toggle functionality
(function() {
  const body = document.body;
  const modeToggle = document.getElementById("mode");

  const toggleTheme = () => {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
      // Switch to light mode
      localStorage.setItem("theme", "light");
      body.removeAttribute("data-theme");
    } else {
      // Switch to dark mode
      localStorage.setItem("theme", "dark");
      body.setAttribute("data-theme", "dark");
    }
  };

  // Add click listener to toggle button
  if (modeToggle) {
    modeToggle.addEventListener("click", toggleTheme);
  }
})();
