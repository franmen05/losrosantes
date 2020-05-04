window.onload = function(){
	if(!document.getElementById || !document.createTextNode){return false;}
	var menu = document.getElementById('nav_principal');
	for(var i=0; i<menu.childNodes.length; i++){
		node = menu.childNodes[i];
		if(node.nodeName == 'LI'){
			node.onmouseover = function() {
				this.className = 'over';
			}
			node.onmouseout = function() {
				this.className = this.className.replace('over', '');
			}
		}
	}
}


