import {saudacao} from "./config.js";
let cadasterContainer = document.getElementById("cadasterF");
let cadasterButton =document.createElement("button");

cadasterButton.setAttribute("id", "cadasterButton");
cadasterButton.innerHTML = "Cadastre-se";


let nome = document.createElement("input");
nome.setAttribute("type", "text");
nome.setAttribute("name", "nome");
nome.setAttribute("placeholder", "Name");

let email = document.createElement("input");
email.setAttribute("type", "text");
email.setAttribute("name", "email");
email.setAttribute("placeholder", "Email");

let idade = document.createElement("input");
idade.setAttribute("type", "number");
idade.setAttribute("name", "age");
idade.setAttribute("placeholder", "Idade");

let endereco = document.createElement("input");
endereco.setAttribute("type", "text");
endereco.setAttribute("name", "endereco");
endereco.setAttribute("placeholder", "Endereco");

let telefone = document.createElement("input");
telefone.setAttribute("type", "text");
telefone.setAttribute("name", "telefone");
telefone.setAttribute("placeholder", "Telefone");

let login = document.createElement("input");
login.setAttribute("type", "text");
login.setAttribute("name", "login");
login.setAttribute("placeholder", "Login");

let senha = document.createElement("input");
senha.setAttribute("type", "password");
senha.setAttribute("name", "senha");
senha.setAttribute("placeholder", "Senha");

nome.classList.add("input-field");
email.classList.add("input-field");
idade.classList.add("input-field");
endereco.classList.add("input-field");
telefone.classList.add("input-field");
login.classList.add("input-field");
senha.classList.add("input-field");

cadasterContainer.appendChild(nome);
cadasterContainer.appendChild(email);
cadasterContainer.appendChild(idade);
cadasterContainer.appendChild(endereco);
cadasterContainer.appendChild(telefone);
cadasterContainer.appendChild(login);
cadasterContainer.appendChild(senha);
cadasterContainer.appendChild(cadasterButton);

idade.addEventListener("input", function() {
    if (this.value < 0) {
      this.value = 0;
    }
  });
  saudacao("João");
