let marca = Number(prompt('¿De donde es su marca? (America=1, Asia=2, Europa=3, Otro=4)'));
let añoAuto = Number(prompt('¿De que año es su auto?'));
let cantidad;
let total;
let base = 2000;
const marcaCotizados = ['AMERICA', 'ASIA', 'EUROPA'];

function año(){
    if((2022 - añoAuto) >= 20){
        total = cantidad * 1.5
    }else if ((2022 - añoAuto) < 20){
        total = cantidad *2
    }
}

if(marca == 0){
    while(marca==0){marca = Number(prompt('Debe seleccionar la region (America=1, Asia=2, Europa=3, Otro=4'))}
}else if (añoAuto == 0){
    while(añoAuto==0){añoAuto = Number(prompt('Escriba el año'))}
}

switch (marca) {
    case 1:
        cantidad = base * 1.15
        console.log('La marca es de: ' + marcaCotizados[0])
        año()
        break;
    case 2:
        cantidad = base * 1.30
        console.log('La marca es de: ' + marcaCotizados[1])
        año()
        break;
    case 3:
        cantidad = base * 1.50
        console.log('La marca es de: ' + marcaCotizados[2])
        año()
    break;
    case 4:
        cantidad = base * 1.75
        let nuevaMarca=prompt('Escriba de que continenete es la marca de su auto')
        marcaCotizados.push(nuevaMarca)
        console.log('La marca es de: ' + marcaCotizados[3].toUpperCase())
        año()
    break;
    
    default:
        break;
}

console.log('Año del auto:' + añoAuto)
console.log('La cotizacion es de: ' + '$' +total)