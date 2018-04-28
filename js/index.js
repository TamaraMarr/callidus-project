$(function () {
    $('[data-toggle="popover"]').popover();
})

let eventTarget;

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

$('ul li').click((event) => {
    $('#modalContent').html(`<p>${event.target.innerHTML} <i class="fa fa-thumbs-up"></i><p>`);
})

$("body").on("mousemove", (event) => {
    if ($(window).width() < 992 && event.pageX < 20) {
        let height = $('main').outerHeight();
        $('aside').css({'display': 'inline', 'float': 'left', 'height': height, 'transition': 'visibility 0s, opacity 0.5s linear'});
    }
});

$('body').click((event) => {
    if ($(window).width() < 992 && event.target.localName !== 'aside' && event.target.localName !== 'span') {
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