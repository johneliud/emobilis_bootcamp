const navLinks = document.querySelectorAll("nav ul li");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});
