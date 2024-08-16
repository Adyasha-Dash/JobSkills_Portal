let navbar = document.querySelector(".header .flex .navbar");
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};
document.querySelectorAll('input[type="number"]').forEach((inputNumber) => {
  inputNumber.oninput = () => {
    if (inputNumber.value.length > inputNumber.maxLength) {
      inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
    }
  };
});

let toggleBtn = document.getElementById("toggle-btn");
let body = document.body;
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  toggleBtn.classList.replace("fa-sun", "fa-moon");
  body.classList.add("dark");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  toggleBtn.classList.replace("fa-moon", "fa-sun");
  body.classList.remove("dark");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode();
}

toggleBtn.onclick = (e) => {
  darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
};
