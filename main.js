/*Este es un juego de piedra,papel o tijera que hize con switch

var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera "); 
var user = pregunta.toLowerCase();//El tolowerCase devuelve el valor en minúscula
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];/*Esto es para que la máquina me responda aleatoriamente,
es decir el math.random me va dar un número entre 0 y 0.999 multiplicando por 3 para que me dé al azar cualquiera 
de los elementos de las opciones, de la variable options./*


switch (true) {//con true los casos van a pasar , al true se le llama expresión
    case (user === machine):
        document.write('es un empate');
        break;//Break es como decir en otro posible caso, osea es como la siguiente opción
    case (machine === 'piedra' && user === 'papel'):
        document.write('Ganaste')
        break;
    case (machine === 'papel'  && user === 'tijera'):
        document.write('Ganaste')
        break;
    case (machine === 'tijera' && user === 'piedra'):
        document.write('Ganaste')
        break;
    default://El default se comporta como else , es como decir si no sucede en los casos anteriores, haremos esto
        document.write('¡Perdiste!');       
}*/

//Este es otro proyecto que primero me nombra algunas prendas mediante un Id en la que decido que prenda elegir.
//Acá creo la clase del objeto producto como base para cargar los productos 
class Producto {
    constructor(nombre, id, precio, color, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.color = color;
        this.stock = stock;
    }
}

//Inicializo arrays para las categorias de los productos
const remeras = [];
const buzos = [];
const pantalones = [];

//Cargo el stock de productos segun su categoria
//Polos
remeras.push(new Producto("Polo Perú1", 1, 2000, "blanco", 30));
remeras.push(new Producto("Polo Perú2", 2, 1400, "negro", 10));
remeras.push(new Producto("Polo Perú3", 3, 1400, "negro", 20));

//Poleras
buzos.push(new Producto("Polera CuelloAlto", 5, 4000, "Negro", 20));
buzos.push(new Producto("Polera Deportiva Peru", 6, 3800, "Negro", 40));
buzos.push(new Producto("Polera Blanca", 7, 3800, "Negro", 40));
//PANTALONES
pantalones.push(new Producto("Jogger Gris", 8, 2900, "Negro", 10));
pantalones.push(new Producto("Jogger Azul Marino", 9, 1000, "Negro", 10));
pantalones.push(new Producto("Pantalón Deportivo Perú", 9, 1000, "Negro", 10));


//Recorro los arrays para mostrarle los productos al usuario
for (const remera of remeras) {
    alert("ID (" + remera.id + ") - " + remera.nombre);
}
for (const buzo of buzos) {
    alert("ID (" + buzo.id + ") - " + buzo.nombre);
}
for (const pantalon of pantalones) {
    alert("ID (" + pantalon.id + ") - " + pantalon.nombre);
}

//Solicito al usuario el ID de la prenda
let prendaSeleccionada = parseInt(prompt("Ingrese el ID de la prenda que desea comprar:"));
const remeraBuscada = remeras.find(remera => remera.id === prendaSeleccionada);
const buzoBuscado = buzos.find(buzo => buzo.id == prendaSeleccionada);
const pantalonBuscado = pantalones.find(pantalon => pantalon.id == prendaSeleccionada);

if (prendaSeleccionada <= 0) {
    alert("Ingresa un ID valido");
} else if (prendaSeleccionada <=4) {
    alert("Seleccionaste " +  remeraBuscada.nombre + "\nToca aceptar para agregarlo a tu carrito"); 
} else if (prendaSeleccionada <=7) {
    alert("Seleccionaste " + buzoBuscado.nombre + "\nToca aceptar para agregarlo a tu carrito");
} else if (prendaSeleccionada <= 9) {
    alert("Seleccionaste " + pantalonBuscado.nombre + "\nToca aceptar para agregarlo a tu carrito");
} else {
    alert("Ingresa un ID valido");
}


