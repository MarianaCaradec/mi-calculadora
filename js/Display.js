class Display {
    constructor(displayValorAnterior, displayValorActual) {
    this.displayValorAnterior = displayValorAnterior;
    this.displayValorActual = displayValorActual;
    this.calculadora = new Calculadora();
    this.valorAnterior = '';
    this.valorActual = '';
    this.tipoOperacion = undefined;
    this.signos = {
        sumar: '+',
        restar: '-',
        dividir: '/',
        multiplicar: '*',
    }
    }


    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    mostrarNum(numero) {
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    calcular() {
        const valorActual = parseFloat(this.valorActual);
        const valorAnterior = parseFloat(this.valorAnterior);

        if(isNaN(valorAnterior) || isNaN(valorActual)) return
        this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior,valorActual);
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;    
        this.imprimirValores();
    }
}