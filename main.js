import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";

setTimeout(() => {
  AOS.init({
    duration: 500,
    startEvent: "DOMContentLoaded",
    once: true,
  });
}, 0);

document.querySelector(".nav-toggle-open").addEventListener("click", () => {
  document.querySelector(".nav-mobile").classList.add("open");
});

const closeMobileNav = () => {
  setTimeout(() => {
    document.querySelector(".nav-mobile").classList.remove("open");
  }, 100);
};
document
  .querySelector(".nav-toggle-close")
  .addEventListener("click", closeMobileNav);

document.querySelectorAll(".nav-mobile a").forEach((item) => {
  item.addEventListener("click", closeMobileNav);
});
