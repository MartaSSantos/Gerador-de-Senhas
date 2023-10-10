let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");
let copiado = document.querySelector("#copiado");
console.log(copiado.innerHTML)

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@%$*&';
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
    sizePassword.innerHTML = this.value;
}

// function to generate password with all characters
// função para gerar senha com todos os caracteres

function generatePassword() {

    let pass = '';
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }


    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

// Function to display a message that the password has been successfully copied
// Função para exibir uma mensagem informando que a senha foi copiada com sucesso
function copyPassword() {
    copiado.innerHTML = " SENHA COPIADA COM SUCESSO! 😀🎉";

    const intervelAD = setTimeout(myCallback, 5000);

    navigator.clipboard.writeText(novaSenha);
}

function myCallback() {
    copiado.innerHTML = "";

}