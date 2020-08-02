// var parentURL="http://losrosantes.edu.do";
var parentURLWS="http://52.10.56.216:8080"; 
 // var parentURL="http://localhost:8383";
var parentURLWS="http://localhost:8080"; 
var selection;
var dblSelection;
var idSelected;
var idItem;
var dateSelected;
var fnSelected;

function actSelectetionRow(){

    $('#data tbody').on('click', 'tr', function () {

        $(selection).removeClass("selectedrow");
        selection= this;
        $(this).addClass("selectedrow");
    });
    
    $('#data tbody').on('dblclick', 'tr', function () {
//        console.info("DOBLE CLICK");  
        var col = $('td', this);
        idSelected=col.eq(0).text();
//        console.log(idSelected);
    });
}

function aut(){
    
    var user=$("#userid").val();
    var pass=$("#pass").val();
    
    $.getJSON(parentURLWS+'/SysMedicalServer/api/user/aut/'+pass+'/'+user, function(jd) {

//       console.log("true");
//       console.log(jd);
       sessionStorage.user = true;
       sessionStorage.userId = jd.userId;
       sessionStorage.userName = jd.userName;
//       alert(sessionStorage.userName);
        location.href=parentURL+"/SysMedicalClient/pages/mainContainer.html"
   }).fail(function() {
       alert("Usuario o Contraseña incorrectos");
        clear();
//        console.log( "error" );
  });
}
function closedSession(){
    clear();
    location.href=parentURL+"/SysMedicalClient/";
}

function valide(){
     if(sessionStorage.user!=="false"){
//         alert(sessionStorage.user);
         alert("Bienvenido");
         $(".showUserName").text(sessionStorage.userName);
         $(".user-header .bg-light-blue p").text(sessionStorage.userName);
         
     }else{
         
         alert("debe iniciar sesión");
         closedSession();
     }
}

function clear(){
        sessionStorage.user = false;
       sessionStorage.userId = -1;
       sessionStorage.userName = "";
      // alert(sessionStorage.user);
}