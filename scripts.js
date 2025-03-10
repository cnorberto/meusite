document.getElementById("contact-form").addEventListener("submit", function(event) {
    // Impede o envio do formulário se os campos não forem válidos
    event.preventDefault();

    // Coleta os valores dos campos do formulário
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validação simples
    if (name === "" || number === "" || email === "" || message === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Verifica se o número de telefone tem pelo menos 20 dígitos
    if (number.length < 20) {
        alert("Por favor, insira um número de telefone válido!");
        return;
    }

    // Verifica se o e-mail tem um formato válido
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um e-mail válido!");
        return;
    }

    // Se todos os campos passarem na validação
    alert("Sua reserva foi enviada com sucesso!");

    // Limpar o formulário após o envio (opcional)
    document.getElementById("contact-form").reset();
});
