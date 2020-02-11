$(function (){
	getJoke(); 
	
	$('#btn-chiste').on('click', function(){
		getJoke();	
	});

	
	
	function getJoke(){
		var $mostrarChiste = $('#mostrarChiste'); 	
		$.ajax({
			type:'GET',
			url: 'http://api.icndb.com/jokes/random',
			dataType:'json',
			success: function (chistes) {
				$mostrarChiste.html(chistes.value.joke); // 'chistes' es el parametro de la funcion, 'value' es el parametro del objeto al que hago referencia y 'joke' es el elemento dentro del objeto que quiero mostrar. Estos valores los veo en la API
			}
		});		
	}
	
});

