const cpf = "12345678900";
const cnpj = "12345678900888";


function formatCPF(cpf) {
    const cpfArray = cpf.split('');
    cpfArray.splice(3, 0, '.');
    cpfArray.splice(7, 0, '.');
    cpfArray.splice(11, 0, '-');
    return cpfArray.join('');
}


const formattedCPF = formatCPF(cpf);
if (cpf.length === 11) {
    console.log(formattedCPF)
}
else {
    console.log('CPF Inválido')
}


function formatcnpj(cnpj) {
    const cnpjArray = cnpj.split('');
    cnpjArray.splice(2, 0, '.');
    cnpjArray.splice(6, 0, '.');
    cnpjArray.splice(10, 0, '/');
    cnpjArray.splice(14, 0, '-')
    return cnpjArray.join('');
}


const formattedCnpj = formatcnpj(cnpj);
if (cnpj.length === 14) {
    console.log(formattedCnpj)
}
else {
    console.log('CNPJ Inválido')
}