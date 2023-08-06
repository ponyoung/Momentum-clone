const searchMenus = document.getElementById("search");
const searchIcon = searchMenus.querySelector("i");
const searchInput = searchMenus.querySelector("input");

searchMenus.classList.add("inline");
searchInput.classList.add("hidden");

function handleMouseEnter() {
  searchInput.classList.remove("hidden");
}

function handleMouseLeave() {
  searchInput.classList.add("hidden");
}

function handleClick() {
  searchInput.focus();
}

searchMenus.addEventListener("mouseenter", handleMouseEnter);
searchMenus.addEventListener("mouseleave", handleMouseLeave);
searchIcon.addEventListener("click", handleClick);
