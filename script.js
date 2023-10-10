let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@%$*&';
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function() {
  sizePassword.innerHTML = this.value;
}

// function to generate password with all characters
// função para gerar senha com todos os caracteres

function generatePassword(){

  let pass = '';
  for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
  
  console.log(pass)
  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
}

// Function to display a message that the password has been successfully copied
// Função para exibir uma mensagem informando que a senha foi copiada com sucesso
function copyPassword(){
    alert(" SENHA COPIADA COM SUCESSO! 😀🎉")
  navigator.clipboard.writeText(novaSenha);
}