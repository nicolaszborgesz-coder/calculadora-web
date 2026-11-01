
// PEGAR A TELA DA CALCULADORA
const display = document.getElementById('display');

// FUNCAO PARA ADICIONAR NUMEROS E OPERADORES
function adicionar(valor) {

    // Se aparecer erro, limpa a tela
    if (display.value === 'Erro') {
        display.value = '';
    }

    display.value += valor;
}

// FUNCAO PARA LIMPAR A TELA
function limpar() {
    display.value = '';
}

// FUNCAO PARA APAGAR O ULTIMO CARACTERE
function apagar() {
    display.value = display.value.slice(0, -1);
}

// FUNCAO PARA CALCULAR
function calcular() {

    try {

        if (display.value.trim() === '') {
            return;
        }

        // Calcula a expressao digitada
        let resultado = eval(display.value);

        // Verifica se o resultado e valido
        if (resultado === undefined ||
            !Number.isFinite(resultado)) {

            display.value = 'Erro';
            return;
        }

        // Mostra o resultado
        display.value = resultado;

    } catch (erro) {

        // Se houver erro na conta
        display.value = 'Erro';

    }
}

// UTILIZAR O TECLADO FISICO
document.addEventListener('keydown', function(evento) {

    // Numeros e operadores
    if (
        !isNaN(evento.key) ||
        ['+', '-', '*', '/', '.', '%'].includes(evento.key)
    ) {
        adicionar(evento.key);
    }

    // Enter calcula
    else if (evento.key === 'Enter') {
        calcular();
    }

    // Backspace apaga
    else if (evento.key === 'Backspace') {
        apagar();
    }

    // Escape limpa
    else if (evento.key === 'Escape') {
        limpar();
    }

});
