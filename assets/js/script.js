document.addEventListener('DOMContentLoaded', (event) => {
    const cpfInput = document.getElementById('cpf');

    cpfInput.addEventListener('input', () => {
        formatCPF(cpfInput);
    });

    function formatCPF(cpfInput) {
        let cpf = cpfInput.value;

        // Remove todos os caracteres que não são números
        cpf = cpf.replace(/\D/g, '');

        // Adiciona os pontos e o hífen conforme o tamanho do input
        if (cpf.length > 3 && cpf.length <= 6) {
            cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
        } else if (cpf.length > 6 && cpf.length <= 9) {
            cpf = cpf.replace(/(\d{3})(\d{3})(\d)/, '$1.$2.$3');
        } else if (cpf.length > 9) {
            cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
        }

        // Define o valor do input com a formatação
        cpfInput.value = cpf;
    }
});
