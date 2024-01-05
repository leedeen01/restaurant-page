

export default function loadHome() {
    let content = document.querySelector(".main-content");
    let chef = document.createElement('img');
    chef.src = 'images/main-image.jpg';
    content.appendChild(chef);
}