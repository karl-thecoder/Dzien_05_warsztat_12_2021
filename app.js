const button = document.querySelector(".menu-burger");
const menu = document.querySelector(".navigation");

console.log(button);
console.log(menu);

button.addEventListener("click", function () {
  console.log("klik");
  menu.classList.toggle("is-show");
});
