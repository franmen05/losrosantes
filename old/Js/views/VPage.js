//views/Vhardcoder.js
$v.vpage = {

	sethardcoderEventControl : function(Event){
		this.hardcoder = Event;
	},
	gethardcoderEventControl : function(){
		return this.hardcoder;
	},
	sethardcoderEventPublish : function(Event){
		this.PUBLISH = Event;	
	},
	gethardcoderEventPublish : function(){
		return this.PUBLISH;
	},
	slideUphardcoder : function(){
		$("#action").slideUp("fast");
		$("#layerActivity").slideDown("fast");	
	},
	slideDownhardcoder : function(){
		$("#layerActivity").slideUp("fast");
		$("#action").slideDown("fast");			
	},
	createhardcoderButtonControl : function(config){		
		var container  = document.createElement("div");
		container.setAttribute("id", config.Id);
		
		var containerUI = document.createElement('div');
		
		containerUI.setAttribute("class", config.Style);
		containerUI.title = config.Title;
		
		container.appendChild(containerUI);
		
		var controlText = document.createElement('DIV');
		controlText.innerHTML = config.Name;
		containerUI.appendChild(controlText);
		
		$(container).click(config.Callback);
		
		$("#action").append(container);
		
	},
	createhardcoderDialog : function(config){
		
		var moddiv = $('<div>').attr({
			className : config.Class,
			id : config.Id
		});			
		var Ok = $('<div>').attr({
			className : "button-style",
			id : config.Ok,
			innerHTML :	config.Ok		
		});			
		var Cancel = $('<div>').attr({
			className : "button-style",
			id : config.Cancel,
			innerHTML : config.Cancel
		});	
		var container = $('<p>').attr({
			className : "messages"
		});	
		
		$('body').append(moddiv);		
		container.append(config.HTML+"<br><br>");
		
		var table = $('<table>').attr({
			innerHTML : "<tr><td>"
		});	
		
		$(table).append(Ok);
		$(table).append("</td><td>");
		$(table).append(Cancel);
		$(table).append("</td></tr></table>");
		
		$(container).append(table);
		
		$('#'+config.Id).append(container);
		
		$(Ok).click(config.CallbackOk);
		$(Cancel).click(config.CallbackCancel);
		
		var wscr = $(window).width();
		var hscr = $(window).height();
		
		$('#'+config.Id).css("width", config.Width+'px');
		$('#'+config.Id).css("height", config.Height+'px');
		
		var mleft = ( wscr - config.Width ) / config.Left;
		var mtop = ( hscr - config.Height ) / config.Top;
		
		$('#'+config.Id).css("left", mleft+'px');
		$('#'+config.Id).css("top", mtop+'px');
	},
	createNotifi : function(config){
		
		var moddiv = document.getElementById(config.Id)
		$(moddiv).addClass(config.Class);
		
		$('body').append(moddiv);		
		
		$('#'+config.Id).text(config.HTML);
		
		var wscr = $(window).width();
		var hscr = $(window).height();
		
		$('#'+config.Id).css("width", config.Width+'px');
		$('#'+config.Id).css("height", config.Height+'px');
		
		var mleft = ( wscr - config.Width ) / config.Left;
		var mtop = ( hscr - config.Height ) / config.Top;
		
		$('#'+config.Id).css("left", mleft+'px');
		$('#'+config.Id).css("top", mtop+'px');
		
		$('#'+config.Id).fadeIn();
		
		var fadeOut = function(){			
			$('#'+config.Id).fadeOut();
			if(config.After=="publish"){
				var publish = config.AfterCallback;
				setTimeout(publish,0);		
			}
		}
		setTimeout(fadeOut,config.Time);
	},
	closehardcoderDialog : function(config){
		$('#'+config.DialogId).remove();
	},
	createhardcoderPopup : function(config){
		day = new Date();
		popupWindow = window.open(config,day.getTime(),'toolbar=0,scrollbars=0,location=1,statusbar=0,menubar=0,width=500,height=300');
		popupWindow = window.open(config,day.getTime(),'toolbar=0,scrollbars=0,location=1,statusbar=0,menubar=0,width=500,height=300');
		this.sethardcoderEventPublish(true);
	},
	createActivity : function(config){
	
		$("#title").text(config.Title);
		$("#Mensaje").text(config.Mensaje);
		$("#publish").hide();
		
		$("#ok").val(config.Ok);
		$("#cancel").val(config.Cancel);
		$("#ok").unbind('click');
		$("#ok").click(config.CallbackOk);
		$("#cancel").unbind('click');
		$("#cancel").click(config.CallbackCancel);
	},
	createTableCatalog : function(data){

		var obj = jQuery.parseJSON(data);
		//DEFINIENDO ARREGLO  --SUSTITUIR POR EL ARREGLO DE DATOS

//		products = new Array(obj);
		alert(obj[0].nombre);
		productos = new Array();		
		productos[0] = new Array();
			productos[0][0] = "Manzana"; 
			productos[0][1] = "$30"; 
			productos[0][2] = "Fruta natural"; 
		productos[1] = new Array();
			productos[1][0] = "Paleta Chaba";
			productos[1][1] = "$25";
			productos[1][2] = "Paleta del chabo dulce.";
		
		//RECORRIENDO EL ARREGLO
		$("#divCatalog").empty();
		$("#divCatalog").append("<table>");
		for(var producto in productos){
			$("#divCatalog").append("<tr>");
			for(var dato in productos[producto]){
				$("#divCatalog").append("<td>" + productos[producto][dato] + "</td>");
			}
			$("#divCatalog").append("</tr>");
		} 
		$("#divCatalog").append("</table>"); 
		
	}
	
};