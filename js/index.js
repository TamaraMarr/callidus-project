$(function () {
    $('[data-toggle="popover"]').popover();
})

let eventTarget;

$('body').click((event) => {
    $("." + eventTarget).removeClass('visibilityClass');

    if (event.target.name === 'optionsButton' || event.target.outerHTML === '<i class="fa fa-ellipsis-h" id="' + event.target.id + '"></i>') {
        if (eventTarget == event.target.id) {
            $("." + eventTarget).removeClass('visibilityClass');
            eventTarget = null;
        } else {
            eventTarget = event.target.id;
            $("." + event.target.id).addClass('visibilityClass');
        }
    }
})

$('ul li').click((event) => {
    $('#modalContent').html(`<p>${event.target.innerHTML} <i class="fa fa-thumbs-up"></i><p>`);
})

$("body").on("mousemove", (event) => {
    if ($(window).width() < 992 && event.pageX < 20) {
        $('aside').css({'display': 'inline', 'float': 'left'});
    }
});

$('body').click((event) => {
    if ($(window).width() < 992 && event.target && event.target.localName !== 'aside' && event.target.localName !== 'span') {
        $('aside').css('display', 'none');
    }
})

$(window).on('resize', (event) => {
    if ($(window).width() >= 992) {
        $('aside').css('display', 'block');
    } else {
        $('aside').css('display', 'none');
    }
})

$('.spinner').hover(() => {
    $('#spinner').toggleClass('spin fa-wrench fa-cog');
}, () => {
    $('#spinner').toggleClass('spin fa-wrench fa-cog');
});