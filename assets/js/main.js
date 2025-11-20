(() => {
  // Theme handling
  const body = document.body;
  const lamp = document.getElementById("mode");

  const initTheme = (state) => {
    if (state === "dark") {
      body.setAttribute("data-theme", "dark");
    } else if (state === "light") {
      body.removeAttribute("data-theme");
    } else {
      localStorage.setItem("theme", "light");
      body.removeAttribute("data-theme");
    }
  };

  const toggleTheme = () => {
    const currentTheme = body.getAttribute("data-theme");
    if (currentTheme === "dark") {
      localStorage.setItem("theme", "light");
      body.removeAttribute("data-theme");
    } else {
      localStorage.setItem("theme", "dark");
      body.setAttribute("data-theme", "dark");
    }
  };

  // Set up event listeners when DOM is ready
  if (lamp) {
    lamp.addEventListener("click", (e) => {
      e.preventDefault();
      toggleTheme();
    });
  }

  // Initialize theme if not already done
  if (typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener("DOMContentLoaded", () => {
      // Re-init theme in case it wasn't set properly
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        initTheme(storedTheme);
      }
    });
  }
})();