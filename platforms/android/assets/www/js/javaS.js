var guardaDato;
var datoUrl;

$(document).ready(function() {

    var url = document.URL;
    var index = url.indexOf("?");
    datoUrl = url.substring(index + 1, url.length);

    if(datoUrl == 1024) {
        document.getElementById("link").setAttribute("href","css/estiloRes.css");
    } else {
        document.getElementById("link").setAttribute("href","css/estilos.css");
    }
    
    $('#iPizarra').css("display", "none");
    
    $('#nav-button').click( function(){
        $(this).toggleClass('width');
        $('#main-nav').toggleClass('show');
        $(this).children().toggleClass('fa-navicon').toggleClass('fa-close');
        $('#nav-list').toggleClass('nav-show'); 
        $('#cover').toggleClass('display'); 
        $("#lista").hide();
        $("#imagen").toggleClass('esconder');
        $('#cont_lista').toggleClass('mostrarList');
        $(this).css("background","#EA222F");
        $(this).css("color","#FFF");
    });
    $('#cover').click( function(){
        $('#nav-button').toggleClass('width', false);
        $('#main-nav').toggleClass('show',false);
        $('#nav-button').children().toggleClass('fa-navicon', true).toggleClass('fa-close', false);
        $('#nav-list').toggleClass('nav-show', false); 
        $('#cover').toggleClass('display', false);
        $("#lista").hide();
        $("#imagen").toggleClass('esconder', false);
        $('#cont_lista').toggleClass('mostrarList', false);
        $('#nav-button').css("background","#EA222F");
        $('#nav-button').css("color","#FFF");
    });
    $('.cerrar').click( function(){
        $('#nav-button').toggleClass('width', false);
        $('#main-nav').toggleClass('show',false);
        $('#nav-button').children().toggleClass('fa-navicon', true).toggleClass('fa-close', false);
        $('#nav-list').toggleClass('nav-show', false); 
        $('#cover').toggleClass('display', false);
        $("#lista").hide();
        $("#imagen").toggleClass('esconder', false);
        $('#cont_lista').toggleClass('mostrarList', false);
        $('#nav-button').css("color","#FFF");
    });
    
});

var valida = true;
function blackboard() {
    var pizarra = $("#iPizarra");
    if(valida) {
        document.getElementById("iPizarra").src = "pizarra/pizarra.html";
        //pizarra.attr('src','pizarra/pizarra.html');
        valida = false;
    }
    if (pizarra.is(':visible')) {
        pizarra.fadeOut(500,function(){
            document.getElementById("iPizarra").setAttribute("src","");
            document.getElementById("iPizarra").setAttribute("src","pizarra/pizarra.html");
            //pizarra.attr('src','pizarra/pizarra.html');
        });
    } else {
        pizarra.fadeIn(500);
    }
}

function irPagina(dato) {
    guardaDato = datoUrl;
    var paginas = ['index.html?' + guardaDato,'l2.html?' + guardaDato,'l3.html?' + guardaDato,'l4.html?' + guardaDato,'l5.html?' + guardaDato,'l6.html?' + guardaDato,'l7.html?' + guardaDato,'l8.html?' + guardaDato];
    window.location.assign(paginas[dato]);
}