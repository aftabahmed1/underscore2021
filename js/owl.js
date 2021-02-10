$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<i class='icon-keyboard_arrow_left'></i>", "<i class='icon-keyboard_arrow_right'></i>"],
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 5.5
        }
    }
})


