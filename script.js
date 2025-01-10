const iconsNavBar = document.querySelectorAll(".icon-side-bar");

iconsNavBar.forEach((icon) => {
  icon.addEventListener("click", function () {
    iconsNavBar.forEach((i) => i.classList.remove("active"));
    this.classList.add("active");
  });
});

const filterBtns = document.querySelectorAll(".filter-btn");
const certificateCards = document.querySelectorAll(".certificate-card");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.innerHTML;

    certificateCards.forEach((card) => {
      if (filter === "All" || card.innerHTML.includes(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    filterBtns.forEach((i) => i.classList.remove("active"));
    this.classList.add("active");
  });
});
