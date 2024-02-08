// Função para calcular a velocidade média
function calcularVelocidadeMedia(distancia) {
    return distancia / 4; // Tempo de viagem é fixo em 4 horas
}

// Função para calcular a quantidade de combustível necessária para um carro
function calcularCombustivelCarro(distancia) {
    const consumoCarro = 10; // Consumo de combustível do carro em litros por quilômetro
    return consumoCarro * distancia;
}

// Função para calcular a quantidade de combustível necessária para um caminhão
function calcularCombustivelCaminhao(distancia) {
    const consumoCaminhao = 4.5; // Consumo de combustível do caminhão em litros por quilômetro
    return consumoCaminhao * distancia;
}

// Função principal para calcular a quantidade de combustível com base na distância e veículo escolhido
function calcular() {
    const cidades = document.getElementById("cidades").value;
    const distancia = parseInt(document.getElementById("distancia").value);
    let velocidadeMedia;
    switch (cidades) {
        case 'SP-RJ':
            velocidadeMedia = calcularVelocidadeMedia(distancia);
            break;
        case 'RJ-BH':
            velocidadeMedia = calcularVelocidadeMedia(distancia);
            break;
        case 'BH-BSB':
            velocidadeMedia = calcularVelocidadeMedia(distancia);
            break;
        case 'BSB-SSA':
            velocidadeMedia = calcularVelocidadeMedia(distancia);
            break;
        default:
            console.log("Cidades não reconhecidas");
            return;
    }
    const litrosCarro = calcularCombustivelCarro(distancia);
    const litrosCaminhao = calcularCombustivelCaminhao(distancia);

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
    <p>Velocidade Média: ${velocidadeMedia} km/h</p>
    <p>Litros de combustível necessários para o carro: ${litrosCarro} litros</p>
    <p>Litros de combustível necessários para o caminhão: ${litrosCaminhao} litros</p>
    `;
}