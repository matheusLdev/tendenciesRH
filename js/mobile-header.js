const btnMobile = document.getElementById("menu-mobile");
const menu = document.getElementById("menu-header");

function handleMenu() {
  menu.classList.toggle("active");
  const active = menu.classList.contains("active");
  btnMobile.ariaExpanded = active;
  if(active) {
    btnMobile.ariaLabel = "Fechar Menu";
    btnMobile.style.backgroundImage = "url(../img/icons/menu-close.svg)";
    btnMobile.style.transition = "0.3s";
  } else {
    btnMobile.ariaLabel = "Abrir Menu";
    btnMobile.style.backgroundImage = "url(../img/icons/menu-open.svg)";
    btnMobile.style.transition = "0.3s";
  }
}
btnMobile.addEventListener("click", handleMenu);
menu.addEventListener("click", handleMenu);

const header = document.querySelector("header")

window.addEventListener("scroll", function () {
  if(this.scrollY > 50){
    header.classList.add("fixed-header")
  } else {
    header.classList.remove("fixed-header")
  }
});