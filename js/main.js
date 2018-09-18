$(document).ready(function() {

    var controller = new ScrollMagic.Controller();

    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#block_1 .center',
        duration: '30%'
    })
    .setClassToggle('#block_1 .center', 'fade-out')
    .addIndicators({
        name: 'fade scene',
        colorTrigger: 'black',
        indent: 0,
        colorStart: '#880088'
    })
    .addTo(controller);

});