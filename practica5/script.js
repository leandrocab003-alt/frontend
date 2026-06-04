
const contenedor = document.getElementById('container');

contenedor.innerHTML="<button id='cambiar_fondo'> cambiar a modo oscuro</button>";

boton= document.getElementById(`cambiar_fondo`);

boton.addEventListener("click",function(){
document.body.style.backgroundColor= 'red';
});

