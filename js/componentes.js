/*
* ACCIONES DENTRO DE LA PÁGINA
*/

/*
* Se oculta el icono de menú y se muestra la lista de categorías
* al momento de cargar la página, comprobando si está en el tamaño
* de un celular o tablet, o si está en el tamaño de un monitor.
*/
var ancho = $( window ).width();
$(window).on("load", function(){
	if (ancho <= 783) {
		$("#lista").hide();
		$("#iconoMenu").show();
		/* Muestra y oculta el menú lateral de la vista del Administrador */
		$("#mLateral").hide();
		/* Muestra y oculta el botón para el menú lateral */
		$("#boton").show();
	}else if (ancho > 783) {
		$("#lista").show();
		$("#iconoMenu").hide();
		/* Muestra y oculta el menú lateral de la vista del Administrador */
		$("#mLateral").show();
		/* Muestra y oculta el botón para el menú lateral */
		$("#boton").hide();
	}
});

/*
* Cambia el icono por el menú dependiendo del tamaño de la pantalla
*/
function redimensionar(){
	var dim = $( window ).width();
	if (dim <= 783) {
		$("#lista").hide();
		$("#iconoMenu").show();
		/* Muestra y oculta el menú lateral de la vista del Administrador */
		$("#mLateral").hide("fold");
		/* Muestra y oculta el botón para el menú lateral */
		$("#boton").show();
	}else if(dim > 783) {
		$("#lista").show();
		$("#iconoMenu").hide();
		/* Muestra y oculta el menú lateral de la vista del Administrador */
		$("#mLateral").show("fold");
		/* Muestra y oculta el botón para el menú lateral */
		$("#boton").hide("fold");
	}
}

/*
* Muestra u oculta el menú de cabecera al momento de presionar el icono del mismo.
*/
$("#presioname").click(function(){
	$("#lista").toggle("fold");
});


/* Mostrar el menú lateral del Administrador al presionar el boton */
$("#boton").click(function(){
	$("#mLateral").toggle("blind");
});