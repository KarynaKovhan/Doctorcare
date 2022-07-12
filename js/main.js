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
  let headerText = document.getElementsByClassName("menu-item color");
  
  if (prevScrollpos < currentScrollPos) {
    header.classList.add("change-header-color");
    button.classList.add("change-button-color");
    headerLogo.classList.add("change-headerlogo-color");
    headerLogoSecond.classList.add("change-headerlogo-color-second");
    Array.from(headerText).forEach(element => element.classList.add("change-headertext-color"));
  } else {
    header.classList.remove("change-header-color");
    button.classList.remove("change-button-color");
    headerLogo.classList.remove("change-headerlogo-color");
    headerLogoSecond.classList.remove("change-headerlogo-color-second");
    Array.from(headerText).forEach(element => element.classList.remove("change-headertext-color"));
  }
  prevScrollpos = currentScrollPos;
}

var modal = document.getElementById('myModal');
var myBtn = document.getElementsByClassName('myBtn');
var close = document.getElementsByClassName('close')[0];

for (var i = 0; i < myBtn.length; i++) {
  myBtn[i].addEventListener('click', function() {
    openModalWindow();
  })
}
close.addEventListener('click', function() {
  closeModalWindow();
})

function openModalWindow() {
  modal.style.display = "block";
}

function closeModalWindow() {
  modal.style.display = "none";
}


