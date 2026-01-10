// DARK MODE
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// CONTACT FORM
const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const status = document.getElementById("status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    status.textContent = "Please fill all fields";
    status.style.color = "red";
  } else {
    status.textContent = "Thanks! I will contact you soon.";
    status.style.color = "green";
    form.reset();
  }
});