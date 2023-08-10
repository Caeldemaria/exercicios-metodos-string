function formatarNumeroCelular(celular) {
    const celularStr = celular.toString();
    let ddd = '';
    let numero = celularStr;

    if (celularStr.length === 10) {
        ddd = celularStr.substr(0, 2);
        numero = celularStr.substr(2);
    }

    if (numero.length === 8) {
        numero = `9 ${numero.substr(0, 4)}-${numero.substr(4)}`;
    } else if (numero.length === 9) {
        numero = `${numero.substr(0, 1)} ${numero.substr(1, 4)}-${numero.substr(5)}`;
    }

    if (ddd) {
        return `(${ddd}) ${numero}`;
    } else {
        return numero;
    }
}

const celular1 = 7199918888;
const celular2 = 99918888;

console.log(formatarNumeroCelular(celular1));
console.log(formatarNumeroCelular(celular2));
