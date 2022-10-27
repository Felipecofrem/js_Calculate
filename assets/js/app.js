document.title="Calculando";

const cantidad = document.querySelector('#inputCantidad'); 
const btnCalcular = document.querySelector('#btnCalcular');
const mostrarCantidad = document.querySelector('#mostrarCantidad');
const mostrarTotal = document.querySelector('#mostrarTotal');
const colorCircle = document.querySelector("#colorCircle");
const colorList =document.querySelector("#colorList");


btnCalcular.addEventListener('click', () => {
    console.log(cantidad.value);
    mostrarTotal.textContent="Valor Total: $"+cantidad.value*1000000;
    mostrarCantidad.textContent="Cantidad: "+cantidad.value;
    let wichColor = colorList.value;
    colorCircle.style.backgroundColor= wichColor;
})