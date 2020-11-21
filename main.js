// jQuery Ripples
// dropRadius :The size (in pixels) of the drop that results by clicking or moving the mouse over the canvas.
// perturbance	: Basically the amount of refraction caused by a ripple. 0 means there is no refraction.

$(document).ready(function() {
    $('#banner').ripples({
        dropRadius: 10,
        perturbance: 0.01,
    });

    $('.gallery-container').magnificPopup({
        delegate: 'a',
        type: 'image',

        gallery: {
            enabled: true
        },
    });
});

window.addEventListener('load',function(){
    document.querySelector('.pre-loader').classList.add('hidePreLoader');
});