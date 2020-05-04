/**
 *  create JSON String from form
 * @returns {String|Array|$.fn.serializeObject@pro;value}
 */
$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
       
        if(this.name!=="q") {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                if(this.name==='_wysihtml5_mode'){
                    console.log("Test: "+this.name+" valor: "+ $(".textarea").val() );
                    o["description"] = $(".textarea").val() || '';
                }else if(this.name==='registerDate'){
//                    dd/MM/yyyy HH:mm:ss
                    o[this.name] = new Date(dateSelected);
                
                }else if(this.name==='fn'){
//                    dd/MM/yyyy HH:mm:ss
                    o[this.name] = new Date(fnSelected);
                
                }else{
                    o[this.name] = this.value || '';
                }
            }
        }
    });
    return o;
};