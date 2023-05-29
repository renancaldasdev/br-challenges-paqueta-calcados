export default function toggleMenu() {
  const menuMobile = document.querySelector(".menu-mobile");
  const menu = document.querySelector(".menu");

  menuMobile.addEventListener("click", () => {
    menu.classList.toggle("mobile");
  });
}
