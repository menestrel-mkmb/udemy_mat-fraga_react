const content = document.querySelector(".content");
const loginBtn = document.querySelector(".loginBtn");

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    loginBtn.textContent = "Sair";
    const text = document.createElement("p");
    text.textContent = "Você está logado ";
    loginBtn.replaceWith(text);
    content.appendChild(loginBtn);
});
