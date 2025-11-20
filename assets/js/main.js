(() => {
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

  window.addEventListener("load", () => {
    initTheme(localStorage.getItem("theme"));

    if (lamp) {
      lamp.addEventListener("click", () =>
        toggleTheme(localStorage.getItem("theme"))
      );
    }
  });
})();
