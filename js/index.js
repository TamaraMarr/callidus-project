let eventTarget;
let hamburgerClicked = false;

// popover functions
$(function () {
    $('[data-toggle="popover"]').popover();
    const height = $('main').outerHeight() + 10;
    $('aside').css('height', height);
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
        $('aside').fadeIn()
                  .removeClass('sideMenuHidden')
                  .addClass('sideMenuShown')
                  .css('height', height);
        hamburgerClicked = true;
    } else {
        $('aside').removeClass('sideMenuShown')
                  .addClass('sideMenuHidden');

        setTimeout(() => {
            $('aside').fadeOut(100);
        }, 200);
        hamburgerClicked = false;
    }
});

$('body').click((event) => {
    if ($(window).width() <= 992 && event.target.localName !== 'aside' && event.target.localName !== 'span' && event.target.className !== 'fa fa-bars hamburger') {
        $('aside').removeClass('sideMenuShown')
                  .addClass('sideMenuHidden');

        setTimeout(() => {
            $('aside').fadeOut(100);
        }, 200);

        hamburgerClicked = false;
    }
})

$(window).on('resize', (event) => {
    if ($(window).outerWidth() >= 992) {
        const height = $('main').outerHeight() + 10;
        $('aside').fadeIn()
                  .removeClass('sideMenuHidden')
                  .addClass('sideMenuShown')
                  .css('height', height);
    } else {
        $('aside').css('display', 'none')
                  .removeClass('sideMenuShown')
                  .addClass('sideMenuHidden');
    }
})

// icon spinner
$('.cog').hover(() => {
    $('#spinner').toggleClass('spin fa-wrench fa-cog');
}, () => {
    $('#spinner').toggleClass('spin fa-wrench fa-cog');
});