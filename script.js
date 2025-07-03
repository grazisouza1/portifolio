const iconsNavBar = document.querySelectorAll(".icon-side-bar");

iconsNavBar.forEach((icon) => {
  icon.addEventListener("click", function () {
    iconsNavBar.forEach((i) => i.classList.remove("active"));
    this.classList.add("active");
  });
})

//SCROLL EFFECT
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
