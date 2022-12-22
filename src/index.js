import { initialSetup } from "./initialPage";
import { menuPage } from "./menuPage";
import { contactUs } from "./contactUs";
import './style.css';

const mainContainer = document.getElementById('content');

const mainBody = document.createElement('section');
mainBody.setAttribute('id', 'mainBody');

const mainHead = document.createElement('header');
const navBar = document.createElement('ul');
navBar.setAttribute('class', 'mainHeader');

const navOption1 = document.createElement("li");
navOption1.setAttribute("class", "navOption");
navOption1.addEventListener("click", () => {
    mainBody.innerHTML = "";
    initialSetup();
});
const navOption1Text = document.createTextNode('Home');
navOption1.appendChild(navOption1Text);

const navOption2 = document.createElement("li");
navOption2.setAttribute("class", "navOption");
navOption2.addEventListener("click", () => {
    mainBody.innerHTML = "";
    menuPage();
});
const navOption2Text = document.createTextNode('Menu');
navOption2.appendChild(navOption2Text);

const navOption3 = document.createElement("li");
navOption3.setAttribute("class", "navOption");
navOption3.addEventListener("click", () => {
    mainBody.innerHTML = "";
    contactUs();
});
const navOption3Text = document.createTextNode('Contact Us');
navOption3.appendChild(navOption3Text);

navBar.appendChild(navOption1);
navBar.appendChild(navOption2);
navBar.appendChild(navOption3);

mainHead.appendChild(navBar);

mainContainer.appendChild(mainHead);

mainContainer.appendChild(mainBody);

initialSetup();





// initialSetup();
// menuPage();
// contactUs();

console.log("This is log 2 electric boogaloo");