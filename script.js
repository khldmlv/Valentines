const messages = [
    "Non ??",
    "Pourquoi tu choisis non ?",
    "T'es vraiment sérieuse ?",
    "Marha ...",
    "En plus tu m'as pas souhaité mon anniversaire",
    "Réflèchis encore",
    "ENCORE NON ????",
    "T'abuse la",
    "Met oui",
    "Ok, kitokos alors ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}