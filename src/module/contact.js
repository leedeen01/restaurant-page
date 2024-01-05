
export default function loadContact() {
    let content = document.querySelector(".main-content");
    let intro = document.createElement('div');
    let chefName = document.createElement('div');
    let chefContacts = document.createElement('div');
    intro.textContent = "Please email Mr Lee for reservation at this great Pizza House!";
    chefName.textContent = "Lee De En";
    chefContacts.textContent = "Email: leedeen01@gmail.com";
    content.appendChild(intro);
    content.appendChild(chefName);
    content.appendChild(chefContacts);

}