document.addEventListener('DOMContentLoaded', () => {
    const avanca = document.querySelectorAll('.btn-proximo');
    const finalizar = document.getElementById('finalizar');

    function calcularOrcamento() {
        const processador = parseInt(document.getElementById('processador').value) || 0;
        const gpu = parseInt(document.getElementById('gpu').value) || 0;
        const ram = parseInt(document.getElementById('ram').value) || 0;

        const total = processador + gpu + ram;
        const orcamentoInicial = 2500;

        const resultadoElement = document.getElementById('resultado');
        const resultadoElementfinal = document.getElementById('resultadofinal');
        const titulofinal = document.getElementById('titulofinal');
        const againyes = document.getElementById('again-yes');
        const againno = document.getElementById('again-no');
        const fim = document.getElementById('FIM');

        const imagemDentroOrcamento = document.getElementById('imagem-dentro-orcamento');
        const imagemForaOrcamento = document.getElementById('imagem-fora-orcamento');
        const imagemFinalBom = document.getElementById('imagem-final-bom');
        const imagemFinalRuim = document.getElementById('imagem-final-ruim');

        if (total <= orcamentoInicial) {
            resultadoElement.textContent = `Parabéns! Você não ultrapassou o orçamento. Total gasto: R$${total}`;
            resultadoElementfinal.textContent = `Você conseguiu montar seu PC e está curtindo muito. Aproveite!`;
            titulofinal.textContent = 'Final bom';
            imagemFinalBom.style.display = 'block';
            imagemDentroOrcamento.style.display = 'block';
            imagemForaOrcamento.style.display = 'none';
            imagemFinalRuim.style.display = 'none';
            fim.style.display = 'inline'
            againyes.style.display = 'none';
            againno.style.display = 'none';
        } else {
            resultadoElement.textContent = `Ops! Você ultrapassou o orçamento. Total gasto: R$${total}`;
            resultadoElementfinal.textContent = `Você montou um PC pelo qual não pode pagar. Tentar novamente?`;
            titulofinal.textContent = 'Final ruim';
            imagemDentroOrcamento.style.display = 'none';
            imagemFinalBom.style.display = 'none';
            imagemForaOrcamento.style.display = 'block';
            imagemFinalRuim.style.display = 'block';
            againyes.style.display = 'inline';
            againno.style.display = 'inline';
            fim.style.display = 'none';
        }
    }    

    function irParaPasso(passoId) {
        const passoAtual = document.querySelector('.passo.ativo');
        const proximoPasso = document.getElementById(passoId);
        
        if (proximoPasso) {
            passoAtual.classList.remove('ativo');
            proximoPasso.classList.add('ativo');
        }
    }

    avanca.forEach(button => {
        button.addEventListener('click', function() {
            irParaPasso('passo-' + this.getAttribute('data-proximo'));
        });
    });

    document.getElementById('again-yes').addEventListener('click', function() {
        irParaPasso('passo-5');
    });
    
    document.getElementById('again-no').addEventListener('click', function() {
        irParaPasso('passo-0');
    });

    document.getElementById('FIM').addEventListener('click', function() {
        irParaPasso('passo-0');
    });

    finalizar.addEventListener('click', (event) => {
        event.preventDefault();
        calcularOrcamento();
    });
});
