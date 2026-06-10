const words = [
    "Cloud Engineer",
    "Azure Enthusiast",
    "Web Developer",
    "Software Developer"
];

let index = 0;

function changeWord() {
    document.querySelector(".typing").textContent =
    words[index];

    index = (index + 1) % words.length;
}

changeWord();

setInterval(changeWord, 2000);