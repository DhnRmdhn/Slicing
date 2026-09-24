
const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("muncul");
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => observer.observe(item));


const themeToggle = document.getElementById("theme-toggle");
const page = document.body;

themeToggle.addEventListener("click", () => {
  const isirenk = page.getAttribute("data-theme") === "irenk";
  const newTheme = isirenk ? "cahaya" : "irenk";

  if (newTheme === "irenk") {
    page.setAttribute("data-theme", "irenk");
  } else {
    page.removeAttribute("data-theme");
  }

  localStorage.setItem("theme", newTheme);
});
