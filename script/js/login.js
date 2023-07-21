let loginContainer = document.getElementById("loginF");

let loginL = document.createElement("input");
loginL.setAttribute("type", "text");
loginL.setAttribute("name", "login");
loginL.setAttribute("placeholder", "Login");

let senhaL = document.createElement("input");
senhaL.setAttribute("type", "password");
senhaL.setAttribute("name", "senha");
senhaL.setAttribute("placeholder", "Senha");

loginL.classList.add("input-field");
senhaL.classList.add("input-field");

loginContainer.appendChild(loginL);
loginContainer.appendChild(senhaL);

loginContainer.style.backgroundColor = "black";
loginContainer.style.display = "block";
loginL.style.display = "block";
senhaL.style.display = "block";
