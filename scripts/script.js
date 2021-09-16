// JavaScript Document

var burgerMenu = document.querySelector("header section :nth-child(2)")
var menuUitklapbaar = document.querySelector("header nav ul")

burgerMenu.addEventListener("click", menuUitklappen);

function menuUitklappen() {
    menuUitklapbaar.classList.toggle("NavTranslateL");
}