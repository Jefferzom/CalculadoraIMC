/**
 * Altura * Altura / Peso
 * IMC                                                  Resultado
 * Menos do que 18,5                                    Abaixo do peso
 * Entre 18,5 e 24,9                                    Peso normal
 * Entre 25 e 29,9                                      Sobrepeso
 * Entre 30 e 34,9                                      Obesidade grau 1
 * Entre 35 e 39,9                                      Obesidade grau 2
 * Mais do que 40                                       Obesidade grau 3
 */

function myIMC() {
    const form = document.querySelector('.form');
    const waiting = document.querySelector('.waiting');
    const results = document.querySelector('.results');

    function recebeEventoForm(ev) {
        ev.preventDefault();

        const peso = Number(form.querySelector('.inputPeso').value);
        const altura = Number(form.querySelector('.inputAltura').value);

        const resultIMC = parseFloat(peso/(altura*altura));

        if(resultIMC < 18.5){
            waiting.innerHTML= '';

            results.innerHTML = `<p>Seu resultado foi: ${resultIMC.toFixed(2)} | Você está abaixo do peso.</p>`
        }else if (resultIMC >= 18.5 && resultIMC < 24.9){
            waiting.remove();
            results.innerHTML = `<p>Seu resultado foi: ${resultIMC.toFixed(2)} | Você está com peso normal.</p>`
        }else if (resultIMC >= 25 && resultIMC < 29.9){
            waiting.remove();
            results.innerHTML = `<p>Seu resultado foi: ${resultIMC.toFixed(2)} | Você está sobrepso.</p>`
        }else if (resultIMC >= 30 && resultIMC < 34.9) {
            waiting.remove();
            results.innerHTML = `<p>Seu resultado foi: ${resultIMC.toFixed(2)} | Está com obesidade grau 1.</p>`
        }else if (resultIMC >= 35 && resultIMC < 39.9) {
            waiting.remove();
            results.innerHTML = `<p>Seu resultado foi: ${resultIMC.toFixed(2)} | Está com obesidade grau 2.</p>`
        } else if ( resultIMC > 40){
            waiting.remove();
            results.innerHTML = `<p>Seu resultado foi: ${resultIMC.toFixed(2)} | Está com obesidade grau 3.</p>`
        }

    }



    form.addEventListener('submit', recebeEventoForm);
}



myIMC();

