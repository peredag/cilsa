const formulario = document.getElementById("formulario");

const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", () => {
    formulario.classList.toggle("cambiar"); // a imagen le pasa .classList.toggle ---> y esto verifica que clase esta activa(si esta la saca, SI NO ESTA LA AGREGA al hacer click)
 });


