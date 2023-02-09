document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");

  header.addEventListener("mouseover", function () {
    this.classList.add("bgChange");
  });
  header.addEventListener("mouseout", function () {
    this.classList.remove("bgChange");
  });
});
