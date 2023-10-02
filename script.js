const content = document.querySelector(".content");
const loginBtn = document.querySelector(".loginBtn");

const createOtherUserLogin = () => {
    const otherAcc = document.createElement("p");
    otherAcc.textContent = "Não é você? Trocar usuário";
    otherAcc.className ="otherUserText";
    otherAcc.addEventListener("click", (e) => {
        e.preventDefault();
        if(localStorage.getItem("nome")) localStorage.removeItem("nome");
        logout();
    })
    content.appendChild(otherAcc);
}

const createYouAreLoggedIn = () => {
    const loginTxt = document.createElement("p");
    loginTxt.textContent = localStorage.nome + ", você está logado.";
    loginTxt.className = "youAreLoggedText";
    content.appendChild(loginTxt);
}

const login = () => {
    while(typeof localStorage.nome == 'undefined') localStorage.nome = prompt("Qual seu nome?");
    
    createYouAreLoggedIn();
    createOtherUserLogin();
    
    loginBtn.textContent = "Sair";
}

const logout = () => {
    loginBtn.textContent = "Entrar";
    const loginTxt = document.querySelector(".youAreLoggedText");
    loginTxt.parentNode.removeChild(loginTxt);
    const otherUserTxt = document.querySelector(".otherUserText");
    otherUserTxt.parentNode.removeChild(otherUserTxt);
}

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    (loginBtn.textContent == "Entrar") ?
        login() :
        logout();
});