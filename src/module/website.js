import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function header() {
    let head = document.createElement("header");
    let title = document.createElement('h1');
    title.classList.add("head");
    title.textContent = 'Pizza House';    
    head.appendChild(title);
    return head;
}

function navigation() {
    let nav = document.createElement("nav");
    let homeBtn = document.createElement("button");
    homeBtn.textContent = 'Home';
    homeBtn.addEventListener("click", () => {
        let content = document.querySelector(".main-content");
        content.innerHTML="";
        loadHome();
    });
    let menuBtn = document.createElement("button");
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener("click", () => {
        let content = document.querySelector(".main-content");
        content.innerHTML="";
        loadMenu();
    });
    let contactBtn = document.createElement("button");
    contactBtn.textContent = "Contact";
    contactBtn.addEventListener("click", () => {
        let content = document.querySelector(".main-content");
        content.innerHTML="";
        loadContact();
    });
    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);
    return nav;
}

function main() {
    let welcome = document.createElement("main");
    welcome.classList.add("main-content");
    return welcome;
}

export default function initWeb() {
    const content = document.getElementById("content");
    content.appendChild(header());
    content.appendChild(navigation());
    content.appendChild(main());
    loadHome();
}