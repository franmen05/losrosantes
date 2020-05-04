//controllers/Chardcoder.js
$c.Cpage = {
	
	index: function(){
		
		/*
			MAIN
			1) Mostrar lo que sera la pagina principal
			
			Mientras
			mostrando catalogo
		*/
		$c.Chardcoder.mostrarCatalogo();
		
	},
	mostrarCatalogo : function(){
		$c.Chardcoder.prueba();
	},
    /*index: function() {	
	var dialog = $v.hardcoder.createhardcoderButtonControl({	//PARA CREAR UN BOTON	
			Name : "Hola Mundo!x2",	//ES EL TEXTO QUE SE MOSTRARA EN EL BOTON
			Id : "btnleave", 
			Style : "control-style",  //CSS QUE SE LE APLICARA
			Title : "Informacion sobre el boton",	
			Callback : function(e){		// FUNCION QUE SERA EJECUTABA CUANDO SE PRESIONE EL BOTON	
				$v.hardcoder.createhardcoderDialog({	//PARA CREAR UN DIALOGO
					Class : "bgmodal",
					Id : "dialog",
					Width : 200,
					Height : 70,
					HTML : "Deseas ver el saludo de prueba?",
					Ok : "Si",
					Left : 2,
					Top : 3,
					Cancel : "No",
					CallbackOk : function(){		
						$c.Chardcoder.prueba();
						$v.hardcoder.closehardcoderDialog({
							DialogId : "dialog"
						});
					},
					CallbackCancel : function(){					
						$v.hardcoder.closehardcoderDialog({
							DialogId : "dialog"
						});
					}					
				});	
			}
		});
    }, */
	prueba : function(){

		$m.hardcoder.sendToCatalog({
			//field : "Saludo",
			callback :function(result) {
				alert(result);			 
				$v.hardcoder.createTableCatalog(result);	
			}
		});	
	}
};