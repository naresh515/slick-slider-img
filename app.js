$('.slider-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    infinite: true,
    dots: true,
    variableWidth: false,
    centerPadding: '100px',
    centerMode: true,
    prevArrow: '<div class="slider-arrow slider-prev fa fa-angle-left"></div>',
    nextArrow: '<div class="slider-arrow slider-next fa fa-angle-right"></div>',
    customPaging: function (slick, index) {
        return '<p>' + (2008 + index + 1) + '</p>';
    },
    responsive: [
        {
            breakpoint: 820,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                centerPadding: '0px',
                centerMode: false,
            }
        }
    ]
})

