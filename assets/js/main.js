(() => {
  const body = document.body;
  const lamp = document.getElementById("mode");

  const initTheme = (state) => {
    if (state === null) {
      // Check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.setItem("theme", "dark");
        body.setAttribute("data-theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
        body.removeAttribute("data-theme");
      }
    } else if (state === "dark") {
      body.setAttribute("data-theme", "dark");
    } else {
      body.removeAttribute("data-theme");
    }
  };

  const toggleTheme = (state) => {
    if (state === "dark") {
      localStorage.setItem("theme", "light");
      body.removeAttribute("data-theme");
    } else if (state === "light") {
      localStorage.setItem("theme", "dark");
      body.setAttribute("data-theme", "dark");
    } else {
      initTheme(state);
    }
  };

  // Initialize theme on page load
  initTheme(localStorage.getItem("theme"));

  if (lamp) {
    lamp.addEventListener("click", () =>
      toggleTheme(localStorage.getItem("theme"))
    );
  }

  // Blur the content when the menu is open
  const cbox = document.getElementById("menu-trigger");

  if (cbox) {
    cbox.addEventListener("change", function () {
      const area = document.querySelector(".wrapper");
      if (area) {
        this.checked
          ? area.classList.add("blurry")
          : area.classList.remove("blurry");
      }
    });
  }
})();
