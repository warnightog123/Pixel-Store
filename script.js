// Typewriter effect for the title
const titleText = "Welcome to Pixel Store";
let index = 0;
const titleElement = document.querySelector(".title");

function typeWriter() {
    if (index < titleText.length) {
        titleElement.textContent += titleText.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Speed of typing effect
    }
}

window.onload = typeWriter;
