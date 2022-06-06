let marca = Number(prompt('¿De donde es su marca? (America=1, Asia=2 o Europa=3'));
let añoAuto = Number(prompt('¿De que año es su auto?'));
let cantidad;
let total;
let base = 2000;

function año(){
    if((2022 - añoAuto) >= 20){
        total = cantidad * 1.5
    }else if ((2022 - añoAuto) < 20){
        total = cantidad *2
    }
}


if(marca == 0){
    while(marca==0){marca = Number(prompt('Debe seleccionar la region (America=1, Asia=2 o Europa=3'))}
}else if (añoAuto == 0){
    while(añoAuto==0){añoAuto = Number(prompt('Escriba el año'))}
}

switch (marca) {
    case 1:
        cantidad = base * 1.15
        año()
        break;
    case 2:
        cantidad = base * 1.30
        año()
        break;
    case 3:
        cantidad = base * 1.50
        año()
    break;
    
    default:
        break;
}

alert(total);
