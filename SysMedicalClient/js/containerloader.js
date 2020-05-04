/*
$(document).on('ready', function(e){


    $('a.hdr-no-accent').smoothScroll({
        offset: -80,
        scrollTarget: $(this).val()
    });

    $('.open_windows').on('click', function(e){

        cargarContenido(e.target.id);
        e.preventDefault();
        $('#black_screen').fadeIn();
        $('#windows').addClass('middle_top');
        $('#windows').fadeIn();
        return false;

    });

    $('.close').on('click',function(e){
        var parent=  $(this).parent();
        close_windows(parent);

    });

    $('body').on('click', function(e){

        var container= $('#windows');
        if(!container.is(e.target) && container.has(e.target).length ===0 ){
            close_windows(container);
        }

    });


});


function test(e) {

    alert(e.target.attr("href"));

}

function close_windows(element){
    $('#black_screen').fadeOut();
    element.removeClass('middle_top');
}

*/
function cargarContenido(url){
    console.log(url);

    $.ajax({
        type: "GET",
        url:"/SysMedicalClient/pages/"+url+".html",
        async:false,
        dataType: "html",
//        cache: false,
        processData:true,
        success: function(contenido){
//            console.log(contenido);
            $("#mainContainer").html(contenido);
        },
        timeout: 3000
    });
}
