// JavaScript Document
$(function() {
	if($.browser.msie){
			$('#Contenido').append('<div class="apple_overlay" id="mainOverlay"><div id="content"></div></div><!--mainOverlay-->');
		alert("Hay  fuciones que no esta disponibles para internet explorer, por favor  utilizar otro navegador.");	
			$("a[rel]").overlay({
				onBeforeLoad: function() {
					// grab wrapper element inside content
					var wrap = this.getOverlay().find("#content");
		
					// load the page specified in the trigger
					wrap.load(this.getTrigger().attr("href"));
				}
			});
		
		return;
	}
	
	$('#amarre').html('<div class="apple_overlay" id="mainOverlay"><div id="content"></div></div><!--mainOverlay-->');
	$("a[rel]").overlay( {
		mask: '#545001', 
		effect:'apple', 
		top:getPading(),
		onBeforeLoad: function() {
			// grab wrapper element inside content
			var wrap = this.getOverlay().find("#content");

			// load the page specified in the trigger
			wrap.load(this.getTrigger().attr("href"));
		}
	});
});
// load Flash animations
$(function() {
	flashembed("barrerAniation", {src: "swfs/bannerColegio.swf", wmode: 'opaque'});
});


function getPading(){
	if(screen.height>"700"){
		return '5%';
	}else
		return '0%';
}
