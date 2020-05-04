// JavaScript Document
function cargarAlInicio(){
	navegarA(document.location);
};
function navegarA(urlSeleccion,visible){
//	alert(urlSeleccion);
	var objUrl =urlSeleccion.toString().split("#");
	if(objUrl[1]=="index" ||objUrl[1]==null ||objUrl[1]=='undefined' ){
		document.location="adcelros.html";
		return;
	}
	if(visible)	document.location='#'+objUrl[1];
	cargarContenido(objUrl[1])
}

function cargarContenido(url){
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