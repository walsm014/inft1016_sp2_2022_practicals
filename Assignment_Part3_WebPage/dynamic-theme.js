if (window.CSS && CSS.supports("color", "var(--primary-color)")) {
    var toggleColorMode = function toggleColorMode(e) {
  
      // Switch to Light Mode
      if (e.currentTarget.classList.contains("light--hidden")) {
        document.documentElement.setAttribute("color-mode", "light");
  
        localStorage.setItem("color-mode", "light");
        return;
      }
      // Switch to Dark Mode
      document.documentElement.setAttribute("color-mode", "dark");
  
      localStorage.setItem("color-mode", "dark");
    }; 
  
    var toggleColorButtons = document.querySelectorAll(".color-mode__btn");
  
    toggleColorButtons.forEach(function(btn) {
      btn.addEventListener("click", toggleColorMode);
    });
  } else {
    var btnContainer = document.querySelector(".color-mode__header");
    btnContainer.style.display = "none";
  }
  
  
  if (
      localStorage.getItem('color-mode') === 'dark' ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches &&
       !localStorage.getItem('color-mode'))
  ) {
      document.documentElement.setAttribute('color-mode', 'dark')
  }