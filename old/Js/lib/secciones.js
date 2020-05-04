// JavaScript Document
function cargarAlInicio(){
	navegarA(document.location);
};
function navegarA(urlSeleccion){
	//alert(urlSeleccion);
	var objUrl =urlSeleccion.toString().split("#");
		if(objUrl[1]=="index" ||objUrl[1]==null ||objUrl[1]=='undefined' ){
		document.location="index.html";
		return;
	}
	
	document.location='#'+objUrl[1];
	($.browser.msie && objUrl[1]=="contacto" )?cargarContenido(objUrl[1]+"E"):cargarContenido(objUrl[1]);
}

function cargarContenido(url){
    //alert(url);

    $.ajax({
        type: "GET", 
        url:url+".html",
        async:false,
        dataType: "html",

        global: true,

        processData:true,

        success: function(contenido){
			$("#Contenido").html(contenido);
		},
        timeout: 3000
	});	
}