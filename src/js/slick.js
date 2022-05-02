$('.carousel').slick({
    infinite: true,
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [{
        breakpoint:768,
        settings:{
            slidesToShow:2
        }
    }]
});