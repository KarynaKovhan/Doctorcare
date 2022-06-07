function burgerMenu(icon) {
    icon.classList.toggle("change");
}
const getModalWindow = () => alert('Contact us via Viber : +3080505005');
const button = document.querySelectorAll(".button-normal");
Array.from(button).forEach(elem => elem.addEventListener("click", () => getModalWindow()));
