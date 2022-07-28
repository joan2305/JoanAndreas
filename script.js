const items = document.querySelectorAll(".navbar-nav .nav-item .nav-link");
items.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".nav-link.active").classList.remove("active");
    item.classList.add("active");
  });
});
