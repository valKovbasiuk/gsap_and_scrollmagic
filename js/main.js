$(document).ready(function() {

    // Init ScrollMagic
    var controller = new ScrollMagic.Controller();

    // build a scene
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#block_1'
    })
    .setClassToggle('#block_1', 'fade-out') // add class
    .addIndicators({
        name: 'fade scene',
        colorTrigger: 'black',
        indent: 0,
        colorStart: '#880088'
    })
    .addTo(controller);

});