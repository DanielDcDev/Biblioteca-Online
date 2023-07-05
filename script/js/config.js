function verifyButton(no,em,id,en,te,lo,se) {
if (no.value === ""){
  
  alert("Por favor, preencha o campo Email.");
} else {
  console.log("Campos preenchidos!");
  client.length = 0;
  client.push(nome.value, email.value, idade.value, endereco.value, telefone.value, login.value, senha.value);
  console.log(client);
}

}
function idadeInput(idade){
  if (this.value < 0) {
    this.value = 0;
  }
  if (this.value > 115) {
    this.value = 0;
    alert("Digite uma idade real");
  }
}
function numbersInput(senha,telefone){
  if (senha.length < 8||telefone.length < 8) {
    alert("Digite uma senha com mais de 8 caracteres");
  }
}
