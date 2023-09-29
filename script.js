const input = prompt("Digite algo no prompt");
console.log(input);

const content = document.querySelector(".content");
const text = document.createElement("p");
content.appendChild(text);
text.textContent = input;