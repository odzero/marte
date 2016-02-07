var cajaDeTexto = document.getElementById("formulario");
var boton = document.getElementById("boton");

boton.addEventListener("click", formula);

var respuesta = cajaDeTexto.value;

respuesta = parseInt(respuesta);



function formula()

	{
		alert(respuesta * 2);
	}




/*
var peso;
var pesoMarte;

peso = prompt("Quieres saber tu peso en marte,\nEscribe tu peso en kg",70);

peso = parseInt(peso);

pesoMarte = (peso/9.81)*3.711;

alert("Tu peso en marte es " + pesoMarte);
*/
















































