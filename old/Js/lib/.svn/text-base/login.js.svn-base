// JavaScript Document
/*function cargarAlInicio(){
	navegarA(document.location);
};*/

function login(){
//alert($("#cuerpo").val())
	$.post("Server/managers/LoginManager.php",{ action:"login",user:$("#usuario").val(),pass:$("#contrasena").val()},
		function(r)
		{
			if(r=='true')
			{
				$(".contact").slideUp('slow', function() 
				{
					$("#message").slideDown('slow', function()
					 {
						$("#message").html("<p class='cool'>Bienvenid@ :D</p>");
						  $(this).oneTime('2s', function() 
						  {
								navegarA('#publicarNoticias');
					 	 });
					 });	
				});
				
			}else
				$("#message").html("<p class='error'>El  usuario y/o contraseña son incorrectos.</p>");
		}
	);
}