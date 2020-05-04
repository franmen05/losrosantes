/*
AHCER QUE LOS CAMPOS DEL NEWSLETTER FUNCINEN BIEN Y QUE SE QUITE EL TEXTO PREDETERMINADO CUANDO SE HAGA FOCUS Y TAMBIEN QUE SI NO SE ESCRIBE NADA VUELVA Y QUE SI SE ESCRIBE ALGO CUANDO SE VUELVA A INVOCAR LA FUNCION NO LO BORRE
*/
function nombrevacio(){
 	if (document.newletter.name.value==0){
	 document.newletter.name.value='Name';
	 return false;
	}
 }    
 
function nombrefocus(){
  if((document.newletter.name.value=='Nombre') || (document.newletter.name.value=='Name') )
  document.newletter.name.value='';
  return false;
 }
 
function nombrevacio_email(){
 	if (document.newletter.newsletter_input.value==0){
	 document.newletter.newsletter_input.value='Email';
	 return false;
	}
 }    
 
function nombrefocus_email(){
  if((document.newletter.newsletter_input.value=='Email') || (document.newletter.newsletter_input.value=='Email') )
  document.newletter.newsletter_input.value='';
  return false;
 }
 
//validamos que llenene lo scampo e email
function newslettervalida(){
	if (document.newletter.name.value=='Name'){
		alert('The Field "Name" is required.!');		
		document.newletter.name.focus();
		return false;
		}
		
	if (document.newletter.newsletter_input.value=='Email'){
		alert('The Field "Email" is required.!');
		document.newletter.newsletter_input.focus();
		return false;
		}
	document.newletter.submit();	
}