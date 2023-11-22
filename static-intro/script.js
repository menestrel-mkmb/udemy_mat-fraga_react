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

//REST operator

const usuarios = ["Fulano", "Sicrano", "Beltrano"];
const novosUsuarios = ["Zutano", "Citano"];

const cadastrar = (usuarios, ...novosUsuarios) => {
    return [...usuarios,
        ...novosUsuarios];
}

const totalUsuarios = cadastrar(usuarios, ...novosUsuarios);
console.log(totalUsuarios);

// includes
// endsWith
// startsWith

const nomeExistente = "Fulano";
const nomeNaoExistente = "Ciclano"
const arrayIncludes = (array, nome) =>
        `${nome} ${array.includes(nome) ? "" : "não "}está na lista`;
console.log(arrayIncludes(totalUsuarios, nomeExistente));
console.log(arrayIncludes(totalUsuarios, nomeNaoExistente));

const inicioTrue = "Ful";
const inicioFalse = 'ful';
const stringStartsWith = (string, inicio) => string.startsWith(inicio);
console.log(stringStartsWith(nomeExistente, inicioTrue));
console.log(stringStartsWith(nomeExistente, inicioFalse));

const fimTrue = "ano";
const fimFalse = "Ano";
const stringEndsWith = (string, fim) => string.endsWith(fim);
console.log(stringEndsWith(nomeExistente, fimTrue));
console.log(stringEndsWith(nomeExistente, fimFalse));