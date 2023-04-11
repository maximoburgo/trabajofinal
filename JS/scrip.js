function calcularPresupuesto() {
    var horas = document.getElementById("horas").value;
    var tarifa = document.getElementById("tarifa").value;
    var gastos = document.getElementById("gastos").value;
    var impuestos = document.getElementById("impuestos").value;

    var total = horas * tarifa + parseFloat(gastos) + parseFloat(impuestos);

    document.getElementById("total").value = total.toFixed(2);
}