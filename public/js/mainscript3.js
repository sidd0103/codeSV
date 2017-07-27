

$(document).ready(function(){    
    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        draggable: true, // Choose whether you can drag to open on touch screens,
    });
    $('.tiles').masonry({
        itemSelector: '.tile',
        gutter: 0,
        fitWidth: true
    });
    setTimeout(function(){
        $('.tiles').css('opacity','1');
    },300);
    
});
