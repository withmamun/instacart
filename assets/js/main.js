(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {


        //------------ Offcanvas -------------

        $('.menu-open , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').addClass('active');

        });
        $('.menu-close , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').removeClass('active');

        });


        //------------ Hero slider -------------

        $('.product__main__slider').owlCarousel({
            loop: false,
            margin: 20,
            nav: true,
            navText: ['<i class="far fa-chevron-left"></i>', '<i class="far fa-chevron-right"></i>'],
            dot: false,
            items: 6,
            slideToScroll: 1,
            smartSpeed: 700,
            responsive: {
                320: {
                    items: 3,
                    margin: 10,
                    nav: false,
                },
                450: {
                    items: 3,
                    margin: 10,
                    nav: false,
                },
                575: {
                    items: 4,
                    nav: false,
                },
                768: {
                    items: 5,
                },

                992: {
                    items: 5,
                },
                1100: {
                    items: 5,
                },
                1200: {
                    items: 6,
                },
            }
        })


        //------------ Nice Number -------------

        $('input[type="number"]').niceNumber();




    }); //---document-ready-----

}(jQuery));