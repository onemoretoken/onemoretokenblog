(() => {
  const body = document.body;
  const lamp = document.getElementById("mode");

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
    initTheme(localStorage.getItem("theme"));

    lamp.addEventListener("click", () =>
      toggleTheme(localStorage.getItem("theme"))
    );
  });

  const cbox = document.getElementById("menu-trigger");
  cbox.addEventListener("change", function () {
    const area = document.querySelector(".wrapper");
    this.checked
      ? area.classList.add("blurry")
      : area.classList.remove("blurry");
  });
})();
