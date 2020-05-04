$(function(){
	$(':date').dateinput({
		// this is displayed to the user
		format:  'yyyy-mm-dd'
	});
});

function publicarNoticia(){
//alert($("#cuerpo").val())
//fecha:$("#fecha").val(), tipo:$("#seleccionTipo").val(),cuerpo:$("#cuerpo").val()
	if(validar()){
		$.post("Server/managers/NoticiasManager.php",{ action:"set", transaction: "publicar",titulo:$("#titulo").val(),
			fecha:$("#fecha").val(), tipo:$("#seleccionTipo").val(),cuerpo:$("#cuerpo").val()} ,
			function(r){
				alert(r);
				limpiar();
			}
		);
	}else{
		alert("No debes dejar campos  vacios");
	}
}

function validar(){
	if($("#titulo").val()=="")
		return false;
	if($("#fecha").val()=="")
		return false;
	if($("#seleccionTipo").val()=="")
		return false;
	if($("#cuerpo").val()=="")
		return false;

	return true;
}

function limpiar(){
	$("#titulo").val("");
	$("#fecha").val("");
	$("#seleccionTipo").val("");
	$("#cuerpo").val("");
}

function getNoticias(){
//alert($("#cuerpo").val())
	$('#divNoticias').html("<h2>Cargando...</h2>");
	$.post("Server/managers/NoticiasManager.php",{ action:"get"},
		function(r){
			alert(r);
			$('#divNoticias').empty();
			var data=jQuery.parseJSON(r);
			$('#tmpNoticia').tmpl(data).appendTo('#divNoticias');
			reponse= r;
		}
	);
}

