function converter(tipoMoeda) {
    let form = document.getElementById('form');

    let valor = parseFloat(document.getElementById('valor').value);

    let resultado = document.getElementById('resultado');

    switch(parseInt(tipoMoeda)){
        case 1: {
            valor /= 5.41;
            resultado.innerText = `O total deu: ${valor.toFixed(2)}`;
            break;
        }

        case 2: {
            valor /= 6.37;
            resultado.innerText = `O total deu: ${valor.toFixed(2)}`;
            break;
        }

        case 3: {
            valor /= 7.38;
            resultado.innerText = `O total deu: ${valor.toFixed(2)}`;
            break;
        }

        case 4: {
            valor /= 594065;
            resultado.innerText = `O total deu: ${valor.toFixed(2)}`;
            break;
        }
    }

    return false;
}