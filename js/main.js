const getModalWindow = () => alert('Contact us via Viber : +3080505005');
const button = document.querySelectorAll(".button-normal");
Array.from(button).forEach(elem => elem.addEventListener("click", () => getModalWindow()));

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;
 
const menu = document.querySelector("#menu").cloneNode(1);
 
hamb.addEventListener("click", hambHandler);
 
function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}
 
function renderPopup() {
  popup.appendChild(menu);
}
 
const links = Array.from(menu.children);
 
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});
 
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}


function myFunction(x) {
    x.classList.toggle("change");
}


var prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  var currentScrollPos = window.pageYOffset;
  let header = document.getElementsByClassName("navbar")[0];
  let button = document.getElementsByClassName("button-normal")[1];
  let headerLogo = document.getElementsByClassName("title-a")[0];
  let headerLogoSecond = document.getElementsByClassName("title-a-second")[0];
  let headerText = document.getElementsByClassName("color")[0];
  let headerTextSecond = document.getElementsByClassName("color")[1];
  let headerTextThird = document.getElementsByClassName("color")[2];
  let headerTextFourth = document.getElementsByClassName("color")[3];

  if (prevScrollpos < currentScrollPos) {
    header.classList.add("change-header-color");
    button.classList.add("change-button-color");
    headerLogo.classList.add("change-headerlogo-color");
    headerLogoSecond.classList.add("change-headerlogo-color-second");
    headerText.classList.add("change-headertext-color");
    headerTextSecond.classList.add("change-headertext-color");
    headerTextThird.classList.add("change-headertext-color");
    headerTextFourth.classList.add("change-headertext-color");

  } else {
    header.classList.remove("change-header-color");
    button.classList.remove("change-button-color");
    headerLogo.classList.remove("change-headerlogo-color");
    headerLogoSecond.classList.remove("change-headerlogo-color-second");
    headerText.classList.remove("change-headertext-color");
    headerTextSecond.classList.remove("change-headertext-color");
    headerTextThird.classList.remove("change-headertext-color");
    headerTextFourth.classList.remove("change-headertext-color");
  }
  prevScrollpos = currentScrollPos;
}
