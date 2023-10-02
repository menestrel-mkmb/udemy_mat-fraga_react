const content = document.querySelector(".content");
const loginBtn = document.querySelector(".loginBtn");

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const text = document.querySelector(".loggedText");
    if(loginBtn.textContent == "Entrar") {
        loginBtn.textContent = "Sair";
        const text = document.createElement("p");
        text.textContent = "Você está logado.";
        text.className = "loggedText";
        loginBtn.replaceWith(text);
        content.appendChild(loginBtn);
    } else {
        loginBtn.textContent = "Entrar";
        text.parentNode.removeChild(text);
    }
});
