//models/Mhardcoder.js

$m.hardcoder = {
	sendToServer : function(config){
		$.post("../Server/managers/NoticiasManager.php", { action: "get", Transaction: config.field } ,config.callback);
	},
	sendToCatalog: function(config){
		$.post("../Server/managers/NoticiasManager.php", { action: "get", Transaction:"list"} ,config.callback);
	}
};