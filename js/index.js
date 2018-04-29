let eventTarget;
let hamburgerClicked = false;

// popover functions
$(function () {
    $('[data-toggle="popover"]').popover();
})

$('main').click((event) => {
    $("." + eventTarget).removeClass('visibilityClass');

    if (event.target.name === 'optionsButton' || event.target.outerHTML === '<i class="fa fa-ellipsis-h" data-id="' + event.target.attributes['data-id'].value + '"></i>') {
        if (eventTarget == event.target.attributes['data-id'].value) {
            $("." + eventTarget).removeClass('visibilityClass');
            eventTarget = null;
        } else {
            eventTarget = event.target.attributes['data-id'].value;
            $("." + event.target.attributes['data-id'].value).addClass('visibilityClass');
        }
    }
})

// modal content
$('ul li').click((event) => {
    $('#modalContent').html(`<p>${event.target.innerHTML} <i class="fa fa-thumbs-up"></i><p>`);
})

// side menu triggers
$(".hamburger").click((event) => {
    if ($(window).width() <= 992 && !hamburgerClicked) {
        const height = $('main').outerHeight() + 10;
        $('aside').css({
            'display': 'inline',
            'float': 'left',
            'height': height,
            'transform': 'translateX(0px)'
        });
        hamburgerClicked = true;
    } else {
        $('aside').css({
            'transform': 'translateX(-180px)'
        });

        setTimeout(() => {
            $('aside').fadeOut(100);
        }, 200);
        hamburgerClicked = false;
    }
});

$('body').click((event) => {
    if ($(window).width() <= 992 && event.target.localName !== 'aside' && event.target.localName !== 'span' && event.target.className !== 'fa fa-bars hamburger') {
        $('aside').css({
            'transform': `translateX(-180px)`
        });

        setTimeout(() => {
            $('aside').fadeOut(100);
        }, 200);

        hamburgerClicked = false;
    }
})

$(window).on('resize', (event) => {
    if ($(window).width() >= 992) {
        const height = $('main').outerHeight() + 10;
        $('aside').css({
            'display': 'block',
            'height': height,
            'transform': 'translateX(0px)'
        });
    } else {
        $('aside').css({
            'display': 'none',
            'transform': `translateX(-180px)`
        });
    }
})

// icon spinner
$('.spinner').hover(() => {
    $('#spinner').toggleClass('spin fa-wrench fa-cog');
}, () => {
    $('#spinner').toggleClass('spin fa-wrench fa-cog');
});