$(document).ready(function() {
	
	//Cargamos la lista de alumnos en la tabla
    $('#gridAlumnos').DataTable({
        "ajax": "data/peliculas.json",
        "columns": [
            { "data": "nombre" },
            { "data": "anyo" },
            { "data": "director" },
            { "data": "pais" }
        ],
		language: {
			url: 'locale/es_ES.json'
		}
    });
});

