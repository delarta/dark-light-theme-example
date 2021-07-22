const toggler = document.getElementById("toggle-theme");
const body = document.body;

toggler.onclick = () => {
  if (body.classList.contains("light-theme")) {
    body.classList.replace("light-theme", "dark-theme");
  } else if (body.classList.contains("dark-theme")) {
    body.classList.replace("dark-theme", "light-theme");
  }
};
