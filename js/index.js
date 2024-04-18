const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNum = document.querySelectorAll('.number');
const botonesOp = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNum.forEach(boton => {
    boton.addEventListener('click', () => display.mostrarNum(boton.innerHTML))
})

botonesOp.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
})